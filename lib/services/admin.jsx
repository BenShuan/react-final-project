import { useRevalidator } from "react-router";
import { AddDocument, getCollection, setDocument } from "./firestoreActions";
import { where } from "firebase/firestore";

export const addCategoryAction = async (initState, formData) => {
  const name = formData.get('name');
  const id = formData.get('id');


  if (!name) {
    return {
      success: false,
      message: "Category name is required"
    }
  }

  try {

    if (id) {
      await setDocument("categories", id, { name });
    } else {

      await AddDocument("categories", { name });
    }

    return {
      success: true,
      message: "Category added successfully"
    }
  } catch (error) {
    return { success: false, message: error.message }
  }
};
export const addProductAction = async (initState, formData) => {

  const title = formData.get('title');
  const category = formData.get('category');
  const description = formData.get('description');
  const price = formData.get('price');
  const imageUrl = formData.get('imageUrl');
  const id = formData.get('id');


  const product = { title, category, price, description, imageUrl }


  try {

    if (id) {
      await setDocument("products", id, product);

    } else {

      await AddDocument("products", product);
    }
    return {
      success: true,
      message: "Category added successfully"
    }
  } catch (error) {
    return { success: false, message: error.message }
  }
};
export const getOrdersOfProductAction = async (productdID) => {

  try {

    const orders = await getCollection("orders",
      where("productsInOrder." + productdID, "!=", "")
    );

    console.log('orders', orders)

    return orders
  } catch (error) {
    console.log('error', error)
    return { success: false, message: error.message }
  }


}

export const calculateTotalSoldAction = async () => {

  try {
    const products = await getCollection("products");

    const orders = await getCollection("orders");

    return {orders,products};
  } catch (error) {
    console.log('error', error)
  }



}

