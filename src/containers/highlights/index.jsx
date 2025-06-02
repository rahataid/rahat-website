import React from "react";
import highlightsData from "../../data/highlights";
import CustomCard from "@components/cards/custom";
import Button from "@ui/button";
import Link from "next/link";

const HighlightPage = () => {
    return (
        <div className="container py-5">
            <h3>Highlights</h3>
            <p className="text-muted mb-4">
                Showcase media features, milestones, or visual highlights here.
            </p>

            <div className="row g-4">
                {highlightsData.cardData.map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <CustomCard
                            title={item.title}
                            thumbnail={item.thumbnail}
                        >
                            <div className="d-flex justify-content-start mt-3">
                                <Link
                                    href={`/highlights/${item.slug}`}
                                    passHref
                                >
                                    <Button size="medium">Read More</Button>
                                </Link>
                            </div>
                        </CustomCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightPage;
