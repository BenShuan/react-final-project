import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'
import { getCollection, getDocument } from '../lib/services/firestoreActions'



const useAuth = () => {

  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
   getSession()
  }, [auth.currentUser])

  const getSession = async () => {

    const token = localStorage.getItem('token')
    if (token) {
      
      const user = await getDocument('users/'+token)
      if (user.data) {
        setCurrentUser(user.data)
      } else {
        localStorage.removeItem('token')
        navigate('/login')
      }
    } else {
      navigate('/login')

    }

  }

  return { currentUser }


}

export default useAuth