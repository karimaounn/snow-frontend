'use client'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function SelectedMap({ params }: { params: { mapId: string }} ) {
  const [geojsonData, setGeojsonData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8000/maps/${params.mapId}`, { next: { revalidate: 1 } })
      .then((res) => res.json())
      .then((data) => {
        setGeojsonData(data.geoJson)
      })
  }, [])
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geojsonData && (
        <GeoJSON data={geojsonData} />
      )}
    </MapContainer>
  )
}