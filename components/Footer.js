import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Telegram, EnvelopeHeart, Github, Code, Bug, HouseHeart, Dash, Hospital } from 'react-bootstrap-icons';
import { Container } from "react-bootstrap";



const Footer = () => {



  return (
    <footer>
      <Container>
        <Row style={{margin:"32px 0px"}}>
          <Col>
            <a href="/" id="#footer"><img src="/white-logo137x49.png" width={137} height={49} alt="SMRT16" /></a>
          </Col>
        </Row>
        <Row>

        <Col sm={12} md={5} lg={5}>
          
          
          <p>
            <strong>TheData.projInfo.diclimerBottomline</strong>
          </p>
          <p>TheData.projInfo.diclimer</p>
        </Col>
        <Col lg={1} md={1}>&nbsp;</Col>

        <Col sm={12} md={3} lg={3}>
          
          <div>
            <div><a href="https://github.com/SMRT16/smrt16.com" target="_blank"><Github/>&nbsp;SMRT16 DApp sources</a></div>
            <div><a href="https://polygonscan.com/address/0x1b605deaedc71f1a764e572b1ca68b5060978753#code" target="_blank"><Code/>&nbsp;SMRT16 Smart Contract sources</a></div>
            <div><a  href="/faq#bug"><Bug />&nbsp;How to report a bug</a></div>
            <div>Copyright Vasilkoff Ltd © 2012-{(new Date().getFullYear())}</div>
          </div>
          

        </Col>

        <Col sm={12} md={3} lg={3}>
          <div>
            <div>
                <a href="https://t.me/+toXd6a6bF9QzM2Q0" target="_blank"><Telegram/>&nbsp;SMRT16.com Community</a>
            </div>

            <div>
                <a href="mailto:dev@smrt16.com" target="_blank"><EnvelopeHeart/>&nbsp;dev@smrt16.com</a>
            </div>
            <hr/>
            <div><a href="/0"><Dash style={{width:16,height:16}}/>&nbsp;Random referrer</a></div>
            <div><a href="/1"><Hospital style={{width:16,height:16}}/>&nbsp;Client area</a></div>
            
          </div>
        </Col>

        </Row>
      </Container>
      
    </footer>
  );
};

export default Footer;
