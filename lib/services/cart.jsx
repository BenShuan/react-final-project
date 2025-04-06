import { getCollection } from "./firestoreActions"

export const getProductBoughtCount = async (productId) => {

  const users = (await getCollection("users")).data

  const orders = (await getCollection("orders")).data
  


  const bought = orders.reduce((acc,order) => {
    const usersOrder = users.find(u => u.id === order.user.id)
    if (usersOrder.showOrders) {
      return acc+(order.productsInOrder[productId]?.quantity || 0)
    }
    return acc

  }, 0)
  console.log(`[Fetch] ${productId} bought:`, bought)
  return bought
}




