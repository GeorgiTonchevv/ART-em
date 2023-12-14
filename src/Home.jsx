import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { storage } from "./firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [countReact, setCountReact] = useState(0)
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/")
  let count = 0;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {

        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    })
  }, []);

  const navigate = useNavigate();
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message);
    }
  };
  

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><button onClick={() => navigate('/create')}>Create</button></li>
        {auth.currentUser ?
          <div><li>
            <li>{auth.currentUser.email}</li>
            <button onClick={() => signOut()}>Sign out</button>
          </li></div>
          :
          <div>
            <li><button onClick={() => navigate('/login')}>Go to Login</button></li>
            <li><button onClick={() => navigate('/register')}>Go to Register</button></li>
          </div>}
          {imageList.map((url) => {
                return <img src={url} />;
            })}
      </ul>
    </nav>
  );
};