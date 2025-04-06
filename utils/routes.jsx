import { createBrowserRouter, redirect } from "react-router";

import SignUpPage from "../src/Pages/SignUpPage";
import AdminLayout from "../src/layouts/AdminLayout";
import { getCollection, getDocument } from "../lib/services/firestoreActions";
import CategoriesPage from "../src/Pages/admin/CategoriesPage";
import ProductsPage from "../src/Pages/admin/ProductsPage";
import StatisticsPage from "../src/Pages/admin/StatisticsPage";
import CustomerLayout from "../src/layouts/CustomerLayout";
import { auth } from "../firebase";
import CustomersPage from "../src/Pages/admin/CustomersPage";
import AccountPage from "../src/Pages/customer/AccountPage";
import { where } from "firebase/firestore";
import MyOrdersPage from "../src/Pages/customer/MyOrdersPage";
import UserProductsPage from "../src/Pages/customer/UserProductsPage";
import LoginPage from "../src/Pages/LoginPage";


export const adminRoutes = [
  {
    index: true,
    path: "/admin",
    id: 'Categories',
    element: <CategoriesPage />,
    loader: async ({ request, params }) => {
      return (await getCollection('categories')).data
    },

  },
  {
    path: '/admin/products',
    id: 'Products ',
    element: <ProductsPage />,
    loader: async ({ request, params }) => {
      return (await getCollection('products')).data
    },
  },
  {
    path: '/admin/costumers',
    id: 'Costumers',
    element: <CustomersPage />,
    loader: async ({ request, params }) => {
      const users = (await getCollection('users')).data
      const orders = (await getCollection('orders')).data
      return { users, orders }
    },
  },
  {
    path: '/admin/statistics',
    id: 'Statistics',
    element: <StatisticsPage />,
    loader: async ({ request, params }) => {
      try {
        const products = await getCollection("products");

        const orders = await getCollection("orders");

        return { orders, products };
      } catch (error) {
        console.log('error', error)
        return { success: false, message: error.message }
      }
    },
  },
  {
    path: '/admin/logout',
    id: 'Log out ',
    loader: async ({ request, params }) => {
      localStorage.removeItem('token')
      return auth.signOut()
    },



  },

]

export const customerRoutes = [
  {
    path: "/",
    id: 'Products',
    element: <UserProductsPage />,
    loader: async ({ request, params }) => {
      const getToken = localStorage.getItem('token')
      const user = await getDocument('users/' + getToken)
      console.log('[Fetch] user', user)
      if (user.data.isAdmin) {
        return redirect('/admin')
      }
      return (await getCollection('products')).data
    },

  },
  {
    path: '/orders',
    id: 'My Orders',
    element: <MyOrdersPage />,
    loader: async ({ request, params }) => {
      const user = await getDocument('users/' + localStorage.getItem('token'))
      return (await getCollection('orders', where('user.id', '==', user.data.id))).data
    },
  },
  {
    path: '/profile',
    id: 'My Account',
    element: <AccountPage />
  },
  {
    path: '/logout',
    id: 'Log out',
    loader: async ({ request, params }) => {
      localStorage.removeItem('token')
      return auth.signOut()
    },



  },

]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomerLayout />,
    children: customerRoutes

  },
  {
    // it renders this element
    path: "/login",
    element: <LoginPage />,




    // loader: async ({ request, params }) => {
    //   return fetch(
    //     `/fake/api/teams/${params.teamId}.json`,
    //     { signal: request.signal }
    //   );
    // },

    // // performing this mutation when data is submitted to it
    // action: async ({ request }) => {
    //   return updateFakeTeam(await request.formData());
    // },

    // errorElement: <ErrorBoundary />,
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: adminRoutes
  },

]);

