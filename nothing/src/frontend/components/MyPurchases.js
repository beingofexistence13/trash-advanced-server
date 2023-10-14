import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card } from "react-bootstrap"

export default function MyPurchases({ marketplaceInstance, nftInstance, account }) {

    const [loading, setLoading] = useState(true)
    const [purchases, setPurchases] = useState([])

    const loadPurchasedItems = async() => {
        const filter = marketplaceInstance.filters.Bought(null,null,null,null,null, account)
        const results = await marketplaceInstance.queryFilter(filter);

        //dohvati metadata
        const purchases = await Promise.all(results.map(async i => {
            i = i.args;

            const uri = await nftInstance.tokenURI(i.tokenId)

            const response = await fetch(uri)
            const metadata = await response.json()

            const totalPrice = await marketplaceInstance.getTotalPrice(i.itemId)

            let purchasedItem = {
                totalPrice,
                price: i.price,
                itemId: i.itemId,
                name: metadata.name,
                description: metadata.description,
                image: metadata.image
            }
            return purchasedItem
        }))

        setLoading(false)
        setPurchases(purchases)
    }

    useEffect(() => {
        loadPurchasedItems()
    }, [])

    if (loading) return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Loading...</h2>
        </main>
    )

    return(
        <div className='flex justify-center'>
            {purchases.length > 0 ?
                <div className="px-5 container">
                    <Row xs={1} md={2} lg={4} className="g-4 py-5">
                        {purchases.map((item, idx) => (
                            <Col key={idx} className="overflow-hidden">
                                <Card>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Footer>
                                        {ethers.utils.formatEther(item.totalPrice)} ETH
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* {soldItems.length > 0 && renderSoldItems(soldItems)} */}
                </div>
                : (
                    <main style={{ padding: "1rem 0" }}>
                        <h2>No listed assets</h2>
                    </main>
                )
            }
        </div>
    )
}