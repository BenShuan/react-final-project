import { setDocument } from "./firestoreActions";
import { auth } from "../../firebase";

export const updateUserAction = async (initState, formData) => {

  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const userName = formData.get('userName');
  const password = formData.get('password');
  const showOrders = Boolean(formData.get('showOrders'));
  const id = formData.get('id');


  const user = {  firstName, lastName,userName,  showOrders }

  console.log('[Put] User:', user)

  try {

    if (id) {
      await setDocument("users", id, user);
      user.password=password
      auth.updateCurrentUser(user)
    } 
    return {
      success: true,
      message: "User was updated successfully"
    }
  } catch (error) {
    return { success: false, message: error.message }
  }
};