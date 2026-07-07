export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Pizza' | 'Burgers' | 'Desserts' | 'Drinks';
  isVeg: boolean;
  isBestSeller: boolean;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  rating: number;
  text: string;
  role: string;
  image: string;
}

export interface SpecialOfferItem {
  id: number;
  title: string;
  description: string;
  code: string;
  discount: string;
  badge: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 1,
    title: 'Garlic Bread Stix',
    description: 'Freshly baked artisan bread strips brushed with olive oil, garlic butter, and fresh rosemary, served with warm marinara dipping sauce.',
    price: 5.99,
    category: 'Starters',
    isVeg: true,
    isBestSeller: false,
    rating: 4.5,
    image: '/images/garlic_bread.png',
  },
  {
    id: 2,
    title: 'Crispy Calamari',
    description: 'Lightly breaded squid rings seasoned with lemon pepper and parsley, served with house-made garlicky aioli.',
    price: 9.49,
    category: 'Starters',
    isVeg: false,
    isBestSeller: true,
    rating: 4.7,
    image: '/images/calamari.png',
  },
  {
    id: 3,
    title: 'Stuffed Mushrooms',
    description: 'Juicy cremini mushrooms stuffed with breadcrumbs, herbs, and local goat cheese, baked until perfectly golden.',
    price: 7.99,
    category: 'Starters',
    isVeg: true,
    isBestSeller: false,
    rating: 4.4,
    image: '/images/stuffed_mushrooms.png',
  },

  // Main Course
  {
    id: 4,
    title: 'Spaghetti Bolognese',
    description: 'Rich slow-cooked Angus beef ragout with organic tomatoes, garlic, herbs, and fresh parmesan over house-made spaghetti.',
    price: 16.99,
    category: 'Main Course',
    isVeg: false,
    isBestSeller: true,
    rating: 4.8,
    image: '/images/pasta.png',
  },
  {
    id: 5,
    title: 'Grilled Salmon Fillet',
    description: 'Atlantic salmon fillet grilled with lemon-herb glaze, served alongside garlic mashed potatoes and steamed asparagus.',
    price: 21.99,
    category: 'Main Course',
    isVeg: false,
    isBestSeller: false,
    rating: 4.6,
    image: '/images/salmon.png',
  },
  {
    id: 6,
    title: 'Truffle Wild Mushroom Risotto',
    description: 'Creamy Arborio rice slowly simmered with forest mushrooms, white wine, truffle oil, and shaved parmesan cheese.',
    price: 18.49,
    category: 'Main Course',
    isVeg: true,
    isBestSeller: false,
    rating: 4.7,
    image: '/images/risotto.png',
  },

  // Pizza
  {
    id: 7,
    title: 'Margherita Pizza',
    description: 'Classic rustic Neapolitan dough topped with sweet San Marzano tomato sauce, fresh creamy mozzarella, and garden-picked sweet basil leaves.',
    price: 10.99,
    category: 'Pizza',
    isVeg: true,
    isBestSeller: true,
    rating: 4.9,
    image: '/images/pizza.png',
  },
  {
    id: 8,
    title: 'Spicy Italian Pepperoni Pizza',
    description: 'Hand-tossed dough with zesty organic tomato sauce, aged mozzarella cheese, and generous layers of cured spicy Italian pepperoni.',
    price: 13.99,
    category: 'Pizza',
    isVeg: false,
    isBestSeller: true,
    rating: 4.9,
    image: '/images/pizza.png',
  },
  {
    id: 9,
    title: 'Garden Veggie Feast Pizza',
    description: 'Crispy thin crust topped with bell peppers, red onions, mushrooms, cherry tomatoes, sweet corn, and organic black olives.',
    price: 12.49,
    category: 'Pizza',
    isVeg: true,
    isBestSeller: false,
    rating: 4.5,
    image: '/images/pizza.png',
  },

  // Burgers
  {
    id: 10,
    title: 'Gourmet Double Cheeseburger',
    description: 'Double flame-grilled beef patties, melting aged cheddar cheese, fresh crisp lettuce, juicy tomato slices, and house secret burger sauce on a brioche bun.',
    price: 12.99,
    category: 'Burgers',
    isVeg: false,
    isBestSeller: true,
    rating: 4.8,
    image: '/images/burger.png',
  },
  {
    id: 11,
    title: 'Crispy Buffalo Chicken Burger',
    description: 'Spicy hand-breaded chicken breast glazed in buffalo hot sauce, topped with creamy cabbage slaw and blue cheese sauce on a toasted bun.',
    price: 11.49,
    category: 'Burgers',
    isVeg: false,
    isBestSeller: false,
    rating: 4.6,
    image: '/images/burger.png',
  },
  {
    id: 12,
    title: 'Smoked Truffle Portobello Burger',
    description: 'Juicy balsamic-marinated Portobello mushroom cap, melted Swiss cheese, caramelized sweet onions, and white truffle aioli.',
    price: 11.99,
    category: 'Burgers',
    isVeg: true,
    isBestSeller: false,
    rating: 4.5,
    image: '/images/burger.png',
  },

  // Desserts
  {
    id: 13,
    title: 'Rich Chocolate Fudge Cake',
    description: 'Three tiers of decadent dark chocolate cake layers covered in velvety chocolate fudge icing, served with vanilla bean ice cream.',
    price: 6.99,
    category: 'Desserts',
    isVeg: true,
    isBestSeller: true,
    rating: 4.9,
    image: '/images/chocolate_cake.png',
  },
  {
    id: 14,
    title: 'Classic Tiramisu',
    description: 'Ladyfingers soaked in dark espresso and coffee liqueur, layered with whipped mascarpone cream, and dusted with organic cocoa powder.',
    price: 7.49,
    category: 'Desserts',
    isVeg: true,
    isBestSeller: false,
    rating: 4.8,
    image: '/images/tiramisu.png',
  },

  // Drinks
  {
    id: 15,
    title: 'Organic Mango Smoothie',
    description: 'Creamy cold blend of fresh organic Alphonso mangoes, Greek yogurt, wildflower honey, and raw organic coconut milk.',
    price: 5.49,
    category: 'Drinks',
    isVeg: true,
    isBestSeller: false,
    rating: 4.7,
    image: '/images/smoothie.png',
  },
  {
    id: 16,
    title: 'Caramel Macchiato Coffee',
    description: 'Rich dark espresso poured over steamed whole milk, sweet vanilla syrup, topped with thick milk foam and signature caramel drizzle.',
    price: 4.99,
    category: 'Drinks',
    isVeg: true,
    isBestSeller: true,
    rating: 4.6,
    image: '/images/coffee.png',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'What are your operating hours?',
    answer: 'We are open seven days a week: Monday through Thursday from 11:00 AM to 10:00 PM, Friday and Saturday from 11:00 AM to 11:00 PM, and Sunday from 12:00 PM to 9:00 PM.',
  },
  {
    id: 2,
    question: 'Do you provide home delivery?',
    answer: 'Yes! We offer hot and fresh home delivery within a 7-mile radius of our kitchen. Delivery is free for orders over $35, and has a flat $3.99 fee otherwise.',
  },
  {
    id: 3,
    question: 'Do you have vegetarian and vegan options?',
    answer: 'Absolutely. We have a wide range of vegetarian dishes, clearly marked with a green "Veg" tag. Our dough is 100% vegan, and we offer vegan cheese substitutions upon request.',
  },
  {
    id: 4,
    question: 'Can I reserve a table in advance?',
    answer: 'Yes, table reservations can be booked directly online via our Bookings button on the contact page or by calling us at (555) 123-4567. We recommend booking 24 hours in advance for weekends.',
  },
  {
    id: 5,
    question: 'Which payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), Apple Pay, Google Pay, and contactless NFC mobile payments.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    rating: 5,
    text: 'Amazing food and quick service! The Margherita pizza had the perfect thin crust, and the fresh basil smelled incredible. Highly recommended!',
    role: 'Local Food Blogger',
    image: '👩‍💻',
  },
  {
    id: 2,
    name: 'Marcus Brody',
    rating: 5,
    text: 'The gourmet cheeseburger was easily one of the best burgers I have had in years. Super juicy meat and soft buns. Delivery was lightning fast too.',
    role: 'Regular Customer',
    image: '👨‍🔧',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    rating: 4,
    text: 'Beautiful environment, friendly staff, and high-quality ingredients. I love the truffle mushroom risotto. Excellent options for vegetarians.',
    role: 'Vegan Advocate',
    image: '👩‍💼',
  },
];

export const SPECIAL_OFFERS: SpecialOfferItem[] = [
  {
    id: 1,
    title: "Today's Special",
    description: "Enjoy a free artisan garlic bread appetizer with any order of a Main Course pasta item.",
    code: "FREESTIX",
    discount: "Free Garlic Bread",
    badge: "Daily Promo",
  },
  {
    id: 2,
    title: "Weekend Family Feast",
    description: "Get 2 large pizzas (any selection), 1 giant box of fries, and 4 soft drinks.",
    code: "FAMILYPACK",
    discount: "Save $12.00 Off Total",
    badge: "Weekend Only",
  },
  {
    id: 3,
    title: "Buy One Get One (BOGO)",
    description: "Order any Signature Burger on Tuesdays and get a second burger of equal value absolutely free.",
    code: "TUESBOGO",
    discount: "BOGO on Burgers",
    badge: "Tuesday Deal",
  },
  {
    id: 4,
    title: "Seasonal Fruit Special",
    description: "Cool down with 25% off our organic smoothies and iced caramel macchiatos.",
    code: "SUMMERCOOL",
    discount: "25% Off Drinks",
    badge: "Seasonal Offer",
  },
];
