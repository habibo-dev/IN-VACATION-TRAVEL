'use client';
import dynamic from 'next/dynamic';
import type {TravelOffer} from '@/lib/data';
const MapInner=dynamic(()=>import('./MapInner'),{ssr:false,loading:()=> <div className="map-preview grid place-items-center"><span className="rounded-xl bg-white px-4 py-2 text-sm font-bold shadow">Chargement de la carte…</span></div>});
export default function MapView({offers}:{offers:TravelOffer[]}){return <MapInner offers={offers}/>}
