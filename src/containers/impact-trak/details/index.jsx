import React from "react";
import ImpactCharts from "./impact-metrics";
import ImpactDescription from "./impactDescription";
import ImpactDescCard from "./impactDescCard";
import { Container, Row, Stack } from "react-bootstrap";

const ImpactDetailsPage = ({ data }) => {
    return (
        <Stack gap={3} className="mt-5 ">
            <ImpactDescCard data={data} />

            <ImpactDescription data={data} />

            <ImpactCharts data={data} />
        </Stack>
    );
};

export default ImpactDetailsPage;

