import Head from "next/head";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ReactGA from "react-ga4";

const Header = (props) => {
    ReactGA.initialize("G-9WSLDWGM8P");
    ReactGA.send("pageview");
    return (<>
        <Head>
            <meta charSet="utf-8" />
            {!props.title ?
                <title>Vasilkoff Ltd - Software Development Services</title>
                :
                <title>{props.title}</title>}

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=2"
            />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff"></meta>

            <meta property="og:title" content="Vasilkoff Ltd - Software Development Services" />
            <meta property="og:site_name" content="Vasilkoff Ltd" />
            <meta property="og:url" content="https://vasilkoff.com" />
            <meta property="og:description" content="Vasilkoff Ltd is a full-stack development company offering web & mobile app development: blockchain, DApps, smart contracts development." />
            <meta property="og:type" content="product" />
            <meta property="og:image" content="/vasilkoff-cover-1024x583.jpg" />
            <meta content="origin" name="referrer" />
            <meta content="/images/LOGO-vasilkoff-1024x475.png" itemProp="image" />
        </Head>
        <Navbar>
            <Container className="px-5">
                <Navbar.Brand href="/"><Image
                    src="/images/logo-vasilkoff.png"
                    alt="Vasilkoff Ltd"
                    layout="fixed"
                    width={140}
                    height={68}
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Navbar.Text>
                        <Nav>
                            <Nav.Link href="/#home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/contacts">Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>


    );
};

export default Header;


