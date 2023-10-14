import {Link} from "react-router-dom"
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import market from '../components/logo.png'

const Navigation = ({ web3Handler, account }) => {
    return (

        <Navbar expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="http://localhost:3000/">
                    <img src={market} width="40" height="40" classname="" alt="" />
                    &nbsp; HalfArt
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Marketplace</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">Collections</Nav.Link>
                        <Nav.Link as={Link} to="/create">Create</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases">Community</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* ternary - ako ima account stavi znamenke i link na ethScan, ako nema onda "Connect wallet*/}
                        {account ? (

                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + "..." + account.slice(38, 42)}
                                </Button>
                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;