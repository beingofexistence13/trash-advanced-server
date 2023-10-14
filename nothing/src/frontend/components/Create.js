import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from "react-bootstrap"
import { Buffer } from 'buffer';
import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = 'INSERT_INFURA_PROJECT_ID'
const projectSecret = 'INSERT_INFURA_PROJECT_SECRET'
const gateway = "INSERT"
const subdomain = `https://${gateway}.infura-ipfs.io`;

const authorization  = "Basic " + Buffer.from(projectId + ":" + projectSecret).toString('base64')

const client = ipfsHttpClient({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: authorization,
    },
  });

const Create = ({ marketplaceInstance, nftInstance }) => {

    const [image, setImage] = useState('')
    const [price, setPrice] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const uploadToIPFS = async (event) => {
        event.preventDefault()
        const file = event.target.files[0]

        if (typeof file !== 'undefined') {
            try {
                const result = await client.add(file)
                console.log(result)
                setImage(`${subdomain}/ipfs/${result.path}`);
            } catch (error) {
                console.log("IPFS image upload error: ", error)
            }
        }
    }

    const createNFT = async () => {
        if (!image || !price || !name || !description) return;

        try {
            const result = await client.add(JSON.stringify({ image, price, name, description }))
            mintThenList(result)
        } catch (error) {
            console.log("IPFS uri upload error: ", error)
        }
    }

    const mintThenList = async (result) => {
        const uri = `${subdomain}/ipfs/${result.path}`;

        //mint nft
        await (await nftInstance.mint(uri)).wait()

        //dohvati tokenId novog NFT-a
        const id = await nftInstance.tokenCount()

        //approveaj marketplace da spenda NFT
        await (await nftInstance.setApprovalForAll(marketplaceInstance.address, true)).wait()

        //dodaj nft u marketplace
        const listingPrice = ethers.utils.parseEther(price.toString())
        await (await marketplaceInstance.makeItem(nftInstance.address, id, listingPrice)).wait()

    }

    return (
        <div className="container-fluid mt-5">
            <div className='row'>
                <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
                    <div className='content mx-auto'>
                    <Row className='g-4'>
                        <Form.Control
                            type="file"
                            required
                            name="file"
                            onChange={uploadToIPFS}
                        />
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            size="lg"
                            type="text"
                            placeholder="Name"
                        />
                        <Form.Control
                            onChange={(e) => setDescription(e.target.value)}
                            size="lg"
                            required
                            as="textarea"
                            placeholder="Description"
                        />
                        <Form.Control
                            onChange={(e) => setPrice(e.target.value)}
                            size="lg"
                            type="number"
                            placeholder="Price in ETH"
                        />
                        <div className="d-grid px-0">
                            <Button onClick={createNFT} variant="primary" size="lg">
                                Create & List NFT!
                            </Button>
                        </div>

                    </Row>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Create