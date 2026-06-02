// Real coordinates of well-known ancient sites. Tier: CONTENT (the coordinates
// are real; the "ley line" connections are folklore, presented as such).

export type Site = { name: string; lat: number; lng: number; note: string };

export const SACRED_SITES: Site[] = [
  { name: "Giza Pyramids", lat: 29.9792, lng: 31.1342, note: "Egypt — c. 2560 BCE" },
  { name: "Stonehenge", lat: 51.1789, lng: -1.8262, note: "England — c. 3000 BCE" },
  { name: "Nazca Lines", lat: -14.739, lng: -75.13, note: "Peru — c. 500 BCE" },
  { name: "Angkor Wat", lat: 13.4125, lng: 103.8667, note: "Cambodia — 12th c." },
  { name: "Easter Island (Rapa Nui)", lat: -27.1127, lng: -109.3497, note: "Pacific — c. 1250 CE" },
  { name: "Machu Picchu", lat: -13.1631, lng: -72.545, note: "Peru — 15th c." },
  { name: "Teotihuacan", lat: 19.6925, lng: -98.8438, note: "Mexico — c. 100 BCE" },
  { name: "Göbekli Tepe", lat: 37.2231, lng: 38.9224, note: "Turkey — c. 9500 BCE" },
  { name: "Great Zimbabwe", lat: -20.2675, lng: 30.9339, note: "Zimbabwe — 11th c." },
];
