import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Col, Container, Row } from "react-bootstrap";

 export default function PrivacyPolicy() {
    return (
        <>
            <Header/>
            <Container>
                <Row style={{ justifyContent: "space-between" }} >
                    <Col md={6} className="no-overflow">
                        <div className="h-100 middle-center">
                            <div className="text-center">
                                <h1>Privacy Policy</h1>
                                <h2>SMRT16.com Privacy Policy</h2>
                                <p className="error-details">
                                    SMRT16.com is committed to protecting the privacy of our users.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col  md={6} className="no-overflow">
                        <img
                            src="/privacypolicy.svg"
                            alt="404"
                            layout="fixed"
                            width={300}
                            height={300}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )

}