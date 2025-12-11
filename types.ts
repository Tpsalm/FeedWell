export enum CourseType {
  STARTER = 'Starter',
  MAIN = 'Main Course',
  DESSERT = 'Dessert',
  DRINK = 'Beverage'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  course: CourseType;
  image: string;
  dietary?: string[]; // e.g., 'Vegan', 'GF'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export type ViewState = 'home' | 'menu' | 'reservation' | 'contact';
