// pages/highlights/index.jsx

import React from "react";
import Link from "next/link";
import highlightsData from "@/data/highlights.json";
import CustomCard from "@components/cards/custom";
import Button from "@ui/button";

export default function HighlightsListPage() {
    return (
        <div className="container py-5">
            <h3>Highlights</h3>
            <p className="text-muted mb-4">
                Showcase media features, milestones, or visual highlights here.
            </p>

            <div className="row g-4">
                {highlightsData.cardData.map((item, index) => (
                    <div
                        key={index}
                        className="col-md-6 col-lg-4 d-flex justify-content-center"
                    >
                        <CustomCard
                            title={item.title}
                            thumbnail={item.thumbnail}
                        >
                            {/* Link to /highlights/{slug} */}
                            <div className="d-flex justify-content-start mt-3">
                                <Link
                                    href={`/highlights/${item.slug}`}
                                    passHref
                                >
                                    <Button as="a" size="medium">
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </CustomCard>
                    </div>
                ))}
            </div>
        </div>
    );
}
