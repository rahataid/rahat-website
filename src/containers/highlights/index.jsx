import React from "react";
import highlightsData from "../../data/highlights.json";
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

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
                {highlightsData.cardData.map((item, index) => (
                    <div key={index} className="col d-flex align-items-stretch">
                        <CustomCard
                            
                            title={item.title}
                            thumbnail={item.thumbnail}
                        >
                            <Link href={`/highlights/${item.slug}`} passHref>
                                <Button size="medium">Read More</Button>
                            </Link>
                        </CustomCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightPage;
