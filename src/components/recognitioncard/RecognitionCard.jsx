// src/components/recognitioncard/RecognitionCard.jsx
import React from "react";
import Image from "next/image";
import LearnMoreButton from "@components/learn-more-button";

const RecognitionCard = ({ image, alt, title, description, link }) => (
    <div className="col-lg-6 col-md-6 col-12 ">
        <div className="card p-4 h-100 rounded-4 border-0 ">
            <div
                className="d-flex align-items-center justify-content-start mb-3"
                style={{
                    height: "60px",
                    minHeight: "150px",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={image}
                    alt={alt || title}
                    width={180}
                    height={40}
                    style={{
                        objectFit: "contain",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                    }}
                />
            </div>

            <div className="content">
                <h5 className="mb-2">{title}</h5>
                <p
                    className="mb-3"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "32px",
                        letterSpacing: "-0.01em",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {description}
                </p>

                <LearnMoreButton linkTo={link} />
            </div>
        </div>
    </div>
);

export default RecognitionCard;
