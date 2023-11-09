import Summary from "@components/donation-summary";
import ChartData from "./chartData";
import {
    Button,
    Col,
    Container,
    Row,
    ToggleButton,
    ToggleButtonGroup,
} from "react-bootstrap";
import { useState } from "react";

const ImpactCharts = ({ data }) => {
    const [selectedOption, setSelectedOption] = useState(1);

    const handleButtonClick = (value) => {
        setSelectedOption(value);
    };

    const buttonStyle = {
        width: "200px",
        height: "30px",
        fontFamily: "Poppins",
        fontSize: "2vh",
        fontStyle: "normal",
        // fontWeight: 400,
        cursor: "pointer", // Make the cursor change to a pointer on hover
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        // padding: "10px",
    };
    return (
        <Container
            style={{
                background: "#FFFFFF",
                borderRadius: "8px",
            }}
            className="my-5 pt-5 pb-5"
            fluid
        >
            <Row className="px-5 ">
                <Col
                    style={{
                        color: "#000000",
                        fontFamily: "Poppins",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                    }}
                >
                    Impact Metrics
                </Col>

                <Col className="mt-4">
                    <Row xs="auto" className="justify-content-center">
                        <Col className="mb-3">
                            <button
                                onClick={() => handleButtonClick(1)}
                                style={{
                                    ...buttonStyle,
                                    backgroundColor:
                                        selectedOption === 1 && "#4A8EBD",
                                    color:
                                        selectedOption === 1
                                            ? "white"
                                            : "black",
                                }}
                            >
                                Gender
                            </button>
                        </Col>
                        <Col className="mb-3">
                            <button
                                onClick={() => handleButtonClick(2)}
                                style={{
                                    ...buttonStyle,
                                    backgroundColor:
                                        selectedOption === 2 && "#4A8EBD",
                                    color:
                                        selectedOption === 2
                                            ? "white"
                                            : "black",
                                }}
                            >
                                Access To Bank
                            </button>
                        </Col>
                        <Col className="mb-3">
                            <button
                                onClick={() => handleButtonClick(3)}
                                style={{
                                    ...buttonStyle,
                                    backgroundColor:
                                        selectedOption === 3 && "#4A8EBD",
                                    color:
                                        selectedOption === 3
                                            ? "white"
                                            : "black",
                                }}
                            >
                                Internet Distribution
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row xs={12}>
                <ChartData
                    summary={data?.summary}
                    selectedOption={selectedOption}
                />
            </Row>
        </Container>
    );
};

export default ImpactCharts;

