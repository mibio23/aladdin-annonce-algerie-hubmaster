
import { Announcement } from "../types/homePageTypes";

export const billetterieAnnouncements: Announcement[] = [
  {
    id: "bill1",
    title: "2 Billets concert Soolking",
    price: 8000,
    location: "Salle El Mouggar, Alger",
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
    date: "Ce week-end",
    category: "billetterie",
    isOnline: true,
  },
  {
    id: "bill2",
    title: "Billet match USMA vs MCA",
    price: 3500,
    location: "Stade 5 Juillet, Alger",
    date: "Vendredi prochain",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    category: "billetterie",
  },
];
