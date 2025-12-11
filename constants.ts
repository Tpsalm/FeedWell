import { CourseType, MenuItem } from './types';

export const RESTAURANT_PHONE = "07054998556";
export const RESTAURANT_NAME = "FeedWell";

// Using picsum with specific IDs or randomness to simulate food images elegantly
export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Truffle & Wild Mushroom Arancini',
    description: 'Crispy risotto balls infused with black truffle oil, served with garlic aioli.',
    price: 18,
    course: CourseType.STARTER,
    image: 'https://picsum.photos/seed/arancini/600/400',
    dietary: ['Vegetarian']
  },
  {
    id: 's2',
    name: 'Pan-Seared Scallops',
    description: 'Hand-dived scallops with pea purée and crispy pancetta dust.',
    price: 24,
    course: CourseType.STARTER,
    image: 'https://picsum.photos/seed/scallops/600/400',
    dietary: ['GF']
  },
  {
    id: 's3',
    name: 'Wagyu Beef Carpaccio',
    description: 'Thinly sliced A5 Wagyu, parmesan shavings, capers, and truffle vinaigrette.',
    price: 32,
    course: CourseType.STARTER,
    image: 'https://picsum.photos/seed/carpaccio/600/400',
    dietary: ['GF']
  },
  
  // Mains
  {
    id: 'm1',
    name: 'Herb-Crusted Rack of Lamb',
    description: 'Served pink with fondant potatoes, seasonal greens, and a red wine reduction.',
    price: 45,
    course: CourseType.MAIN,
    image: 'https://picsum.photos/seed/lamb/600/400',
    dietary: ['GF']
  },
  {
    id: 'm2',
    name: 'Miso Glazed Black Cod',
    description: 'Sustainably sourced cod marinated in miso for 48 hours, served with bok choy.',
    price: 42,
    course: CourseType.MAIN,
    image: 'https://picsum.photos/seed/cod/600/400',
    dietary: ['GF']
  },
  {
    id: 'm3',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice cooked with porcini mushrooms, finished with mascarpone and truffle oil.',
    price: 34,
    course: CourseType.MAIN,
    image: 'https://picsum.photos/seed/risotto/600/400',
    dietary: ['Vegetarian', 'GF']
  },

  // Desserts
  {
    id: 'd1',
    name: 'Dark Chocolate Fondant',
    description: 'Molten center chocolate cake served with Madagascar vanilla bean ice cream.',
    price: 16,
    course: CourseType.DESSERT,
    image: 'https://picsum.photos/seed/fondant/600/400',
    dietary: ['Vegetarian']
  },
  {
    id: 'd2',
    name: 'Lemon Basil Tart',
    description: 'Zesty lemon curd in a buttery pastry shell, topped with fresh basil glaze.',
    price: 14,
    course: CourseType.DESSERT,
    image: 'https://picsum.photos/seed/tart/600/400',
    dietary: ['Vegetarian']
  },

  // Drinks
  {
    id: 'b1',
    name: 'FeedWell Signature Old Fashioned',
    description: 'Smoked maple bourbon, angostura bitters, orange peel.',
    price: 18,
    course: CourseType.DRINK,
    image: 'https://picsum.photos/seed/drink1/600/400'
  },
  {
    id: 'b2',
    name: 'Vintage Cabernet Sauvignon 2015',
    description: 'Full-bodied red with notes of dark cherry and oak. Glass.',
    price: 22,
    course: CourseType.DRINK,
    image: 'https://picsum.photos/seed/wine/600/400'
  }
];
