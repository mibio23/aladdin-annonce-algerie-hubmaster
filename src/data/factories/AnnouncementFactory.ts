
import { Announcement } from "../types/homePageTypes";

export class AnnouncementFactory {
  static createDefaultAnnouncements(categoryName: string): Announcement[] {
    return [
      {
        id: `${categoryName}-1`,
        title: `Annonce ${categoryName} 1`,
        price: Math.floor(Math.random() * 50000) + 1000,
        location: "Alger",
        imageUrl: `https://picsum.photos/seed/${categoryName}1/300/200`,
        isProfessional: Math.random() > 0.7,
        hasVideoStory: Math.random() > 0.8,
        date: "Il y a 2 heures",
        category: categoryName
      },
      {
        id: `${categoryName}-2`,
        title: `Annonce ${categoryName} 2`,
        price: Math.floor(Math.random() * 50000) + 1000,
        location: "Oran",
        imageUrl: `https://picsum.photos/seed/${categoryName}2/300/200`,
        isProfessional: Math.random() > 0.7,
        hasVideoStory: Math.random() > 0.8,
        date: "Il y a 5 heures",
        category: categoryName
      },
      {
        id: `${categoryName}-3`,
        title: `Annonce ${categoryName} 3`,
        price: Math.floor(Math.random() * 50000) + 1000,
        location: "Constantine",
        imageUrl: `https://picsum.photos/seed/${categoryName}3/300/200`,
        isProfessional: Math.random() > 0.7,
        hasVideoStory: Math.random() > 0.8,
        date: "Il y a 1 jour",
        category: categoryName
      }
    ];
  }
}
