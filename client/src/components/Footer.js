import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy;
            <a
              href="https://github.com/AtharvRedij"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atharv Redij
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
