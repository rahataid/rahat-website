import { MAPBOX_API } from "@config";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";

// sections
const MapClusters = dynamic(() => import("./ClusterMap"));

// ----------------------------------------------------------------------

const THEMES = {
    streets: "mapbox://styles/mapbox/streets-v11",
    outdoors: "mapbox://styles/mapbox/outdoors-v11",
    light: "mapbox://styles/mapbox/light-v10",
    dark: "mapbox://styles/mapbox/dark-v10",
    satellite: "mapbox://styles/mapbox/satellite-v9",
    satelliteStreets: "mapbox://styles/mapbox/satellite-streets-v11",
};

const baseSettings = {
    mapboxAccessToken: MAPBOX_API,
    minZoom: 1,
};

const StyledMapContainer = styled("div")(({ theme }) => ({
    zIndex: 0,
    height: 560,
    overflow: "hidden",
    position: "relative",
}));

const MapView = ({ mapData }) => {
    const theme = useTheme();

    return (
        <div>
            <StyledMapContainer>
                <MapClusters
                    {...baseSettings}
                    mapData={mapData}
                    mapStyle={THEMES[theme.palette.mode]}
                />
            </StyledMapContainer>
        </div>
    );
};

MapView.propTypes = {};

export default MapView;
