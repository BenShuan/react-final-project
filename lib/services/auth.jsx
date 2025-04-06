import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setDocument } from "./firestoreActions";

export const SignUpAction = async (initState, formData) => {

  try {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const showOrders = Boolean(formData.get('showOrders'));
    const password = formData.get('password');

    console.log('email', email)

    // Sign up with email and password
    const user = await createUserWithEmailAndPassword(auth, email, password);

    const newUser = {
      firstName, lastName, email, showOrders,createdAt: new Date()
    }

    const userRef = await setDocument('users', user.user.uid, newUser);

    console.log('User created successfully!', user.user);
    return {
      success: true,
      message: 'User created successfully!'
    }
    // Redirect to another page or update UI after successful sign-up
  } catch (err) {
    console.error('Error creating user:', err);
    return {
      success: false,
      message: err
    }
  }
}

export const LoginAction = async (initState, formData) => {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully!', user.user);
    localStorage.setItem('token', user.user.uid)
    return {
      success: true,
      message: 'User logged in successfully!'
    }
  } catch (err) {
    console.error('Error logging in user:', err);
    return {
      success: false,
      message: err.message
    }
  }
}
