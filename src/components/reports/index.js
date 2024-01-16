import React from "react";
import { Container, Image } from "react-bootstrap";
import Reports from "../../data/reports.json";

const ReportsPage = () => {
    return (
        <Container fluid className="p-0 m-0">
            <Container
                className="mb-5 p-0 "
                fluid
                style={{
                    position: "relative",
                    // backgroundImage: `url("/images/pic/career.png")`,
                    backgroundColor: "#2B7EC1",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "300px",
                }}
            >
                <Container
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        // backdropFilter: "blur(4px)",
                        // backgroundColor: "rgba(35 ,31 ,32, 0.3)",
                    }}
                    className="d-flex align-items-center justify-content-center"
                    fluid
                >
                    <h2 style={{ color: "#FFFFFF " }}>Reports</h2>
                </Container>
            </Container>
            {Reports?.reports?.map((content) => {
                return (
                    <Container className="mb-4">
                        <Container
                            className="text-center mb-1 pt-3 pb-2 fs-1 "
                            style={{
                                background: "#2B7EC1",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 800,
                                lineHeight: "normal",
                                color: "white",
                            }}
                        >
                            {content?.descp}
                        </Container>
                        <Image
                            src={`${content?.image}`}
                            style={{ width: "100%" }}
                        />
                    </Container>
                );
            })}
        </Container>
    );
};

export default ReportsPage;

