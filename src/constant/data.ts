import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
export interface PayDates {
  bank: string;
  code: string;
  cedula: string;
  phone: string;
}
export interface ContactItem {
  name: string;
  link: string;
  icon: IconType;
}
export interface DeliveryOptions {
  name: string;
  fee: number;
}
const data: {
  categories: Category[];
  paydates: PayDates;
  contactData: ContactItem[];
  deliveryOptions: DeliveryOptions[];
} = {
  categories: [
    {
      id: 6,
      name: "Slices",
      products: [
        {
          id: 1,
          title: "Slice de pizza",
          price: 0.49,
          images: [
            "/pizza-loca/Slices/Slice1.jpg",
            "/pizza-loca/Slices/Slice2.jpg",
          ],
          description:
            "Es comúnmente servida como una pieza individual, ideal para comer con las manos. La corteza crujiente, la base de salsa de tomate, el queso derretido y los ingredientes variados ofrecen un bocado equilibrado y sabroso.",
        },
      ],
    },
    {
      id: 1,
      name: "Pepperoni",
      products: [
        {
          id: 1,
          title: "Pepperoni",
          price: 2.99,
          images: [
            "/pizza-loca/Pepperoni/Pizza2.jpg",
            "/pizza-loca/Pepperoni/Pizza1.jpg"
            
          ],
          description:
            "Conocida por su sabor picante y sabroso. Está cubierta con salsa de tomate, queso mozzarella y rodajas de pepperoni, un tipo de salami curado que se vuelve crujiente al hornearse.",
        },
      ],
    },
    {
      id: 2,
      name: "Margarita",
      products: [
        {
          id: 1,
          title: "Margarita",
          price: 2.99,
          images: [
            "/pizza-loca/Margarita/Margarita1.jpg",
            "/pizza-loca/Margarita/Margarita2.jpg",
          ],
          description:
            "Clásica italiana que se caracteriza por su sencillez y frescura. Está cubierta con salsa de tomate, mozzarella y hojas frescas de albahaca, representando los colores de la bandera italiana.",
        },
      ],
    },
    {
      id: 3,
      name: "Cuatro Quesos",
      products: [
        {
          id: 1,
          title: "Cuatro Quesos",
          price: 0.99,
          images: [
            "/pizza-loca/4Quesos/4Chesse1.jpg",
            "/pizza-loca/4Quesos/4Chesse2.jpg",
          ],
          description:
            "Combinación de sabores intensos y cremosos, hecha con una mezcla de cuatro tipos diferentes de quesos. Generalmente incluye mozzarella, gorgonzola, parmesano y queso de cabra o provolone.",
        },
      ],
    },
    {
      id: 4,
      name: "Bebidas",
      products: [
        {
          id: 1,
          title: "Refrescos",
          price: 0.99,
          images: [
            "/pizza-loca/Bebidas/Refresco1.jpg",
            "/pizza-loca/Bebidas/Refresco2.jpg",
          ],
          description:
            "Su efervescencia y dulzura los convierten en un acompañamiento perfecto para pizzas, equilibrando la intensidad de los ingredientes y refrescando el paladar entre cada bocado.",
        },
      ],
    },
    {
      id: 5,
      name: "Combos",
      products: [
        {
          id: 1,
          title: "Combo de pizza",
          price: 3.99,
          images: [
          "/pizza-loca/Combos/combo1.jpg",
          "/pizza-loca/Combos/combo2.jpg",
        ],

          description:
            "Una variedad de sabores que pueden incluir pizzas clásicas como Margarita, Pepperoni, y Cuatro Quesos, acompañadas de refrescantes gaseosas, creando una combinación que satisface todos los gustos y es perfecta para disfrutar en grupo.",
        },
      ],
    },

  ],
  paydates: {
    bank: "Venezuela",
    code: "0102",
    cedula: "29772298",
    phone: "04125026472",
  },
  contactData: [
    {
      name: "Instagram @PizzaLoca",
      link: "https://www.instagram.com/",
      icon: FaInstagram,
    },
    {
      name: "WhatsApp PizzaLoca",
      link: "https://wa.me/4125026472",
      icon: FaWhatsapp,
    },
  ],
  deliveryOptions: [
    { name: "Caña de Azucar", fee: 0 },
    { name: "El Limon", fee: 2 },
    { name: "San Vicente", fee: 3 },
  ],
};

export default data;
