//Component to display gpx tracks
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "./map.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface TrackPoint {
  lat: number;
  lng: number;
}

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  // Placeholder track, to be replace with data from Firebase
  const trackData: TrackPoint[] = [
    { lat: 41.1579, lng: -8.6291 }, // Porto, Portugal
    { lat: 41.1621, lng: -8.622 },
    { lat: 41.165, lng: -8.615 },
    { lat: 41.168, lng: -8.608 },
    { lat: 41.171, lng: -8.601 },
    { lat: 41.174, lng: -8.594 },
    { lat: 41.177, lng: -8.587 },
    { lat: 41.18, lng: -8.58 },
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView([41.1579, -8.6291], 13);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Create polyline for the track
    const polyline = L.polyline(
      trackData.map((point) => [point.lat, point.lng]),
      {
        color: "#3388ff",
        weight: 4,
        opacity: 0.8,
      }
    ).addTo(map);

    // Add markers for start and end points
    const startMarker = L.marker([trackData[0].lat, trackData[0].lng])
      .addTo(map)
      .bindPopup("Start Point");

    const endMarker = L.marker([
      trackData[trackData.length - 1].lat,
      trackData[trackData.length - 1].lng,
    ])
      .addTo(map)
      .bindPopup("End Point");

    // Fit map to track bounds
    map.fitBounds(polyline.getBounds(), { padding: [20, 20] });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="map-container">
      <div className="">
        <h1 className="">Track Map</h1>
      </div>
      <div ref={mapRef} className="" style={{ height: "200px" }} />
    </div>
  );
};

export default Map;