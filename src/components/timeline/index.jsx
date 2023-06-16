import { Chrono } from "react-chrono";

const items = [
    {
        title: "Search for Community",
    },
    {
        title: "Select Community",
    },
    {
        title: "Allocate Community",
    },
    {
        title: "Fund Donated",
    },
];

function Timeline() {
    return (
        <Chrono
            items={items}
            timelinePointShape="circle"
            timelinePointDimension={30}
            itemWidth={"100"}
            hideControls={true}
            cardHeight={0}
            borderLessCards={true}
            slideShow={false}
            scrollable={false}
            theme={{
                primary: "#007bb6",
                // secondary: "#010606",
                // cardBgColor: "#f7f8fa",
                // cardForeColor: "#010606",
                // titleColor: "#fff",
            }}
        />
    );
}

export default Timeline;