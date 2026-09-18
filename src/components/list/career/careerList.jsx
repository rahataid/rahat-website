import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CareerList = ({ career, path = "/career" }) => {
    if (career.status !== true) {
        return null;
    }
    return (
        <Container className="my-5">
            <Row className="my-4 justify-content-center text-center">
                <Col sm={12} md={8} lg={6}>
                    <p className="text-muted mb-0">
                        Sorry! There are no current openings at this time.
                        Please check back later for new opportunities.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default CareerList;

