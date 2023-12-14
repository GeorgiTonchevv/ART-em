import './Create2.css';
import React, { useState, useEffect, } from "react";
import { useNavigate } from 'react-router-dom';
import { storage } from "./firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Create() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const navigate = useNavigate();

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            })
        })
    };
    return (
        <div className="App2">
            <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />

            <button onClick={uploadImage}>Upload Image</button>
            <button onClick={() => navigate('/')}>Return home</button>
        </div>
    )
}
export default Create;