const { expect } = require("chai")
const { ethers } = require("hardhat")

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("NFTMarketplace", () => {

    let nftInstance, marketplaceInstance;
    let deployer, addr1, addr2;
    let feePercent = 1;
    let URI = "Sample URI"

    beforeEach(async () => {

        const accounts = await ethers.getSigners();
        deployer = accounts[0]
        addr1 = accounts[1]
        addr2 = accounts[2]

        console.log(accounts[0])
        console.log(deployer);

        const NFT = await ethers.getContractFactory("NFT");
        nftInstance = await NFT.deploy();

        const Marketplace = await ethers.getContractFactory("Marketplace");
        marketplaceInstance = await Marketplace.deploy(feePercent);

    })

    describe("Deployment", () => {
        it("Should track name and symbol of the NFT collection", async () => {
            expect(await nftInstance.name()).to.equal("CRO NFT")
            expect(await nftInstance.symbol()).to.equal("CRO")
        })
        it("Should track feeAccount and feePercent of the marketplace", async () => {
            expect(await marketplaceInstance.feeAccount()).to.equal(deployer.address)
            expect(await marketplaceInstance.feePercent()).to.equal(feePercent)
        })
    })

    describe("Minting NFTs", () => {

        it("Should track each minted NFT", async () => {
            //addr1 mints an nft
            await nftInstance.connect(addr1).mint(URI)
            expect(await nftInstance.tokenCount()).to.equal(1);
            expect(await nftInstance.balanceOf(addr1.address)).to.equal(1);
            expect(await nftInstance.tokenURI(1)).to.equal(URI);

            //addr2 mints an nft
            await nftInstance.connect(addr2).mint(URI)
            expect(await nftInstance.tokenCount()).to.equal(2);
            expect(await nftInstance.balanceOf(addr2.address)).to.equal(1);
            expect(await nftInstance.tokenURI(2)).to.equal(URI);
        })
    })

    describe("Making marketplace items", () => {
        beforeEach(async () => {
            //mintanje tokena
            await nftInstance.connect(addr1).mint(URI);
            //argumenti(operator, approve)
            await nftInstance.connect(addr1).setApprovalForAll(marketplaceInstance.address, true);
        })

        it("Should track newly created item, transfer NFT from seller to marketplace and emit Offered event", async () => {
            //addr1 nudi svoj nft za cijeni 1 ether
            //kod evenata await se stavlja prije "expect"
            await expect(marketplaceInstance.connect(addr1).makeItem(nftInstance.address, 1, toWei(1)))
                .to.emit(marketplaceInstance, "Offered")
                //argumenti eventa koje očekujemo
                .withArgs(
                    1,
                    nftInstance.address,
                    1,
                    toWei(1),
                    addr1.address
                );

            //Vlasnik NFT-a bi sada trebao biti marketplace contract
            expect(await nftInstance.ownerOf(1)).to.equal(marketplaceInstance.address)
            //itemCount marketplacea sada mora biti 1
            expect(await marketplaceInstance.itemCount()).to.equal(1)
            //dohvati item iz mappinga i provjeri da li su podaci točni
            const item = await marketplaceInstance.items(1)
            //elementi Item strukture
            expect(item.itemId).to.equal(1)
            expect(item.nft).to.equal(nftInstance.address)
            expect(item.tokenId).to.equal(1)
            expect(item.price).to.equal(toWei(1))
            expect(item.sold).to.equal(false)
        })

        it("Should fail if the price is set to zero", async () => {
            await expect(marketplaceInstance.connect(addr1).makeItem(nftInstance.address, 1, 0))
                .to.be.revertedWith("Price must be greater than zero")
        })
    })

    describe("purchasing marketplace items", () => {

        let price = 2
        let totalPriceInWei

        beforeEach(async () => {
            await nftInstance.connect(addr1).mint(URI)
            await nftInstance.connect(addr1).setApprovalForAll(marketplaceInstance.address, true)
            await marketplaceInstance.connect(addr1).makeItem(nftInstance.address, 1, toWei(price));
        })

        it("Should update item as sold, pay seller, transfer NFT to buyer, charge fees and emit a Bought event", async () => {
            const sellerInitialEthBal = await addr1.getBalance()
            const feeAccountInitialEthBal = await deployer.getBalance()

            totalPriceInWei = await marketplaceInstance.getTotalPrice(1);

            console.log(`Total price: ${fromWei(totalPriceInWei)}`)

            //addr2 kupuje item
            await expect(marketplaceInstance.connect(addr2).purchaseItem(1, { value: totalPriceInWei }))
                .to.emit(marketplaceInstance, "Bought")
                .withArgs(
                    1,
                    nftInstance.address,
                    1,
                    toWei(price),
                    addr1.address,
                    addr2.address
                )

            const sellerFinalEthBal = await addr1.getBalance()
            const feeAccountFinalEthBal = await deployer.getBalance()

            expect(+fromWei(sellerFinalEthBal)).to.equal(+price + +fromWei(sellerInitialEthBal))
            const fee = (feePercent / 100) * price;
            expect(+fromWei(feeAccountFinalEthBal)).to.equal(+fee + +fromWei(feeAccountInitialEthBal))
            expect(await nftInstance.ownerOf(1)).to.equal(addr2.address);
            expect((await marketplaceInstance.items(1)).sold).to.be.equal(true)

            console.log(`Seller balance before: ${fromWei(sellerInitialEthBal)} - after: ${fromWei(sellerFinalEthBal)}`)
            console.log(`Fee account balance before: ${fromWei(feeAccountInitialEthBal)} - after: ${fromWei(feeAccountFinalEthBal)}`)

            console.log(`Sa PLUSOM: ${+fromWei(sellerFinalEthBal)}, BEZ PLUSA: ${fromWei(sellerFinalEthBal)}`)

        })

        it("Should fail for invalid item ids, sold items and when not enough ether is paid", async () => {
            //nepostojeći ID
            await expect(
                marketplaceInstance.connect(addr2).purchaseItem(2, { value: totalPriceInWei }))
                .to.be.revertedWith("item doesn't exist")
            //nepostojeći ID
            await expect(
                marketplaceInstance.connect(addr2).purchaseItem(0, { value: totalPriceInWei }))
                .to.be.revertedWith("item doesn't exist")

            //nedovoljno ethra
            await expect(
                marketplaceInstance.connect(addr2).purchaseItem(1, { value: toWei(price) }))
                .to.be.revertedWith("not enough ether to cover item price and market fee")

            //addr2 kupi NFT
            await marketplaceInstance.connect(addr2).purchaseItem(1, { value: totalPriceInWei })

            //treća adresa pokuša ponovno kupiti item nakon što je prodan
            await expect(
                marketplaceInstance.connect(deployer).purchaseItem(1, { value: totalPriceInWei }))
                .to.be.revertedWith("item already sold")
        })
    })


})