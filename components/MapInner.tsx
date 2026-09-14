'use client';
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import L from 'leaflet';
import type {TravelOffer} from '@/lib/data';
import Link from 'next/link';
const icon=L.divIcon({className:'custom-pin',html:'<span></span>',iconSize:[24,24],iconAnchor:[12,12]});
export default function MapInner({offers}:{offers:TravelOffer[]}){return <div className="map-wrap"><MapContainer center={[35,20]} zoom={2} scrollWheelZoom={false} className="h-full w-full"><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>{offers.map(o=><Marker key={o.slug} position={o.coordinates} icon={icon}><Popup><b>{o.title}</b><br/>{o.country}<br/><Link href={`/voyages/${o.slug}`} className="font-bold text-blue-700">Voir le voyage</Link></Popup></Marker>)}</MapContainer><span className="map-label">OpenStreetMap · données démo</span></div>}
