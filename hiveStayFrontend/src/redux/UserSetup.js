import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/Auth/AuthSlice';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode correctly

const UserSetup = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
    const token = Cookies.get('accessToken');

    try {
      if (token) {
        const decodedToken = jwtDecode(token);
        const user = decodedToken;
        dispatch(setUser(user));
      } else {
        console.error('Access token not found in cookies');
      }
    } catch (error) {
      console.error('Error decoding token:', error.message);
    }
    
  },[dispatch])

  return null;
};

export default UserSetup;
