import { memo, useRef } from "react";
import Map, { Layer, Source, Marker } from "react-map-gl";
//
import {
    clusterCountLayer,
    clusterLayer,
    unclusteredPointLayer,
} from "./layers";

// ----------------------------------------------------------------------

function MapClusters({
    mapData = [],
    initialLatitude = 28.31456,
    initialLongitude = 68.48329,
    initialZoom = 3,
    ...other
}) {
    const mapRef = useRef(null);

    mapData = mapData.map((item) => ({
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [item?.longitude, item?.latitude],
        },
        properties: {
            // cluster: true,
            id: item.country,
        },
    }));
    let data = {
        type: "FeatureCollection",
        crs: {
            type: "name",
            properties: {
                name: "urn:ogc:def:crs:OGC:1.3:CRS84",
            },
        },
        features: mapData,
    };

    const onClick = (event) => {
        const feature = event.features?.[0];

        const clusterId = feature?.properties?.cluster_id;

        const mapboxSource = mapRef.current?.getSource("earthquakes");

        console.log(mapboxSource);
        mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
                return;
            }

            mapRef.current?.easeTo({
                center: feature?.geometry?.coordinates,
                zoom: Number.isNaN(zoom) ? 3 : zoom,
                duration: 500,
            });
        });
    };

    return (
        <>
            <Map
                initialViewState={{
                    latitude: initialLatitude,
                    longitude: initialLongitude,
                    zoom: initialZoom,
                }}
                interactiveLayerIds={[clusterLayer.id || ""]}
                onClick={onClick}
                ref={mapRef}
                {...other}
            >
                <Source
                    id="earthquakes"
                    type="geojson"
                    data={data}
                    cluster={true}
                    clusterMaxZoom={14}
                    clusterRadius={50}
                >
                    <Layer {...clusterLayer} />
                    <Layer {...clusterCountLayer} />
                    <Layer {...unclusteredPointLayer} />
                </Source>
                {/* Show a pin for each point */}
                {mapData && mapData.length > 0 && mapData.map((item, idx) => (
                    <Marker
                        key={idx}
                        longitude={item.geometry.coordinates[0]}
                        latitude={item.geometry.coordinates[1]}
                        anchor="bottom"
                    >
                        <svg height="30" viewBox="0 0 24 24" style={{ display: 'block' }}>
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#d00"/>
                        </svg>
                    </Marker>
                ))}
            </Map>
        </>
    );
}

export default memo(MapClusters);

