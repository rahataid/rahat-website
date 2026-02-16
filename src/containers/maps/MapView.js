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
    scrollZoom: false,
};

const StyledMapContainer = styled("div")(({ theme, sx }) => ({
        zIndex: 0,
        height: 400,
        overflow: "hidden",
        position: "relative",
        ...sx,
    }));
const MapView = ({ mapData, sx }) => {
    const theme = useTheme();

    // Nepal boundaries
    const NEPAL_BOUNDS = {
        minLat: 26.3,
        maxLat: 30.4,
        minLng: 80.1,
        maxLng: 88.2,
    };

    // Calculate zoom and center based on mapData
    const getMapCenter = () => 
        // NOTE: bound map to nepal because community lat long data is not accurate
             ({
                latitude: (NEPAL_BOUNDS.minLat + NEPAL_BOUNDS.maxLat) / 2,
                longitude: (NEPAL_BOUNDS.minLng + NEPAL_BOUNDS.maxLng) / 2,
                zoom: 5,
            })

    ;

    const { latitude, longitude, zoom } = getMapCenter();

    return (
        <div>
            <StyledMapContainer sx={sx}>
                <MapClusters
                    {...baseSettings}
                    mapData={mapData}
                    mapStyle={THEMES[theme.palette.mode]}
                    initialLatitude={latitude}
                    initialLongitude={longitude}
                    initialZoom={zoom}
                />
            </StyledMapContainer>
        </div>
    );
};

MapView.propTypes = {};

export default MapView;
