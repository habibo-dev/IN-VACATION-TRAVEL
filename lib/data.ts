export type TravelOffer = { slug:string; title:string; destination:string; country:string; type:string; duration:string; departure:string; date?:string; price?:number; image:string; themes:string[]; hotel?:string; included:string[]; notIncluded:string[]; summary:string; demo?:boolean; coordinates:[number,number] };

export const agency = {
  name:'In Vacation Travel', address:'44 Avenue Colonel Bougara, Khemis Miliana, Aïn Defla, Algeria', postal:'044000', phone1:'0552 42 65 12', phone2:'0552 43 56 50', email:'invacationtravels@gmail.com', website:'https://www.invacationtravel.com', instagram:'https://www.instagram.com/in.vacation.travel', tiktok:'https://www.tiktok.com/@in.vacation.travel', agreement:'N°4409', rc:'N°44/00-3869651A23'
};

export const services = [
 {id:'billetterie',title:'Billetterie',desc:'Demandez votre billet et recevez un accompagnement personnalisé.',icon:'Plane'},
 {id:'hotellerie',title:'Hôtellerie',desc:'Recherche et demande de réservation selon votre destination et vos besoins.',icon:'Hotel'},
 {id:'voyages-organises',title:'Voyages organisés',desc:'Découvrez les voyages organisés locaux et internationaux proposés par l’agence.',icon:'Compass'},
 {id:'omra',title:'Omra',desc:'Programme et informations Omra sur demande, selon les détails vérifiés par l’agence.',icon:'Star'},
 {id:'visa',title:'E-visa & dossiers',desc:'Informations et traitement de dossiers pour les services e-visa communiqués par l’agence.',icon:'Passport'},
];

export const destinations = [
 {slug:'dubai',name:'Dubaï',country:'Émirats arabes unis',image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85',coordinates:[25.2048,55.2708] as [number,number],tag:'City break'},
 {slug:'istanbul',name:'Istanbul',country:'Turquie',image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85',coordinates:[41.0082,28.9784] as [number,number],tag:'Culture'},
 {slug:'paris',name:'Paris',country:'France',image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85',coordinates:[48.8566,2.3522] as [number,number],tag:'City break'},
 {slug:'makkah',name:'La Mecque',country:'Arabie saoudite',image:'https://images.unsplash.com/photo-1565552629477-2f5e8c6f4a4f?auto=format&fit=crop&w=1400&q=85',coordinates:[21.4225,39.8262] as [number,number],tag:'Religieux'},
 {slug:'algiers',name:'Alger',country:'Algérie',image:'https://images.unsplash.com/photo-1587974928442-77dc3f7d1f07?auto=format&fit=crop&w=1400&q=85',coordinates:[36.7538,3.0588] as [number,number],tag:'Local'},
 {slug:'antalya',name:'Antalya',country:'Turquie',image:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=85',coordinates:[36.8969,30.7133] as [number,number],tag:'Plage'},
];

export const offers: TravelOffer[] = destinations.slice(0,5).map((d,i)=>({slug:`${d.slug}-sur-demande`,title:`Séjour ${d.name}`,destination:d.name,country:d.country,type:i===3?'Omra':'Voyage organisé',duration:'Sur demande',departure:'Khemis Miliana',image:d.image,themes:[d.tag,'Famille','Culture'],summary:`Une proposition de voyage à ${d.name}, présentée comme DEMO tant qu’aucun tarif ou calendrier réel n’est confirmé.`,included:['Accompagnement de la demande','Informations selon disponibilité'],notIncluded:['Prix non confirmé','Disponibilités non garanties'],demo:true,coordinates:d.coordinates}));

export const tripTypes=['Voyage organisé','Voyage local','Voyage international','Omra','Hôtel','Billetterie','Visa'];
export const themes=['Plage','Famille','Luxe','Aventure','Culture','Shopping','Religieux','City break'];
