import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";



export default function PageNotFound(props) {


    return (<>
        <Header/>
        <Container>
            <Row style={{ justifyContent: "space-between" }} >
                <Col md={6} className="no-overflow">
                    <div className="h-100 middle-center">
                        <div className="text-center">
                            <h1>Oops!</h1>
                            <h2>404 Not Found</h2>
                            <p className="error-details">
                                Requested page not found!
                            </p>
                        </div>
                        
                    </div>
                </Col>
                <Col  md={6} className="no-overflow">
                    <img
                        src="/404error.svg"
                        alt="404"
                        layout="fixed"
                        width={300}
                        height={300}
                    />
                </Col>
            
            </Row>
        </Container>
        <Footer/>
    </>);
}