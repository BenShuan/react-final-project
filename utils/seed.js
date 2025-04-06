import { AddDocument } from "../lib/services/firestoreActions";

const orders = [
  {
    orderDate: new Date("2025-03-20T02:17:40.000Z"), // 20 March 2025 at 04:17:40 UTC+2 (converted to UTC)
    productsInOrder: {
      "4GZK6Ra9QSDIzyH0kKN7": {
        product: {
          price: 20,
          title: "jakcet",
        },
        quantity: 4,
        totalPrice: 80,
      },
      "quruySh4ppdHbOn9VchQ": {
        product: {
          price: 30,
          title: "jakcet",
        },
        quantity: 5,
        totalPrice: 150, // Corrected from 90 to 150 (30 * 5)
      },
    },
    user: {
      email: "benshuan@gmail.com",
      id: "tth0hZbdnLSoY9acwBZ4GjktWyq1",
      name: "ben",
    },
  },
  {
    orderDate: new Date("2025-04-15T10:30:00.000Z"), // 15 April 2025 at 12:30:00 UTC+2
    productsInOrder: {
      "product1Id": {
        product: {
          price: 15,
          title: "T-shirt",
        },
        quantity: 2,
        totalPrice: 30,
      },
      "product2Id": {
        product: {
          price: 50,
          title: "Jeans",
        },
        quantity: 1,
        totalPrice: 50,
      },
    },
    user: {
      email: "benshuan@gmail.com",
      id: "tth0hZbdnLSoY9acwBZ4GjktWyq1",
      name: "ben",
    },
  },
  {
    orderDate: new Date("2025-05-01T15:45:00.000Z"), // 1 May 2025 at 17:45:00 UTC+2
    productsInOrder: {
      "product3Id": {
        product: {
          price: 10,
          title: "Socks",
        },
        quantity: 10,
        totalPrice: 100,
      },
      "product4Id": {
        product: {
          price: 40,
          title: "Hoodie",
        },
        quantity: 3,
        totalPrice: 120,
      },
       "product5Id": {
        product: {
          price: 25,
          title: "Shorts",
        },
        quantity: 2,
        totalPrice: 50,
      },
    },
    user: {
      email: "benshuan@gmail.com",
      id: "tth0hZbdnLSoY9acwBZ4GjktWyq1",
      name: "ben",
    },
  },
];

console.log(orders);

export const addOrdersToFirebase = async () => {
  for (const order of orders) {
    try {
      const result = await AddDocument("orders", order); // "orders" is your collection name
      if (result.success) {
        console.log("Order added:", result.data.id);
      } else {
        console.error("Error adding order:", result.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }
};
