// import React from 'react'
// import NavBar from './NavBar'

// function Messages() {
//   return (
//     <div className='mt-5'>
//       <NavBar />
//       <h1 className="text-center">Welcome to message page!</h1>

//     </div>
//   )
// }

// export default Messages

// src/App.js
import React, { useState, useEffect } from 'react';

const Messages = () => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const savedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(savedImages);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    const newImage = { image, text };
    const updatedImages = [...images, newImage];

    // Save the new image and text data to localStorage
    localStorage.setItem('images', JSON.stringify(updatedImages));
    setImages(updatedImages);

    // Reset input fields
    setImage('');
    setText('');
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <textarea placeholder="Enter text" value={text} onChange={handleTextChange} />
      <button onClick={handleSave}>Save</button>

     
    </div>
  );
};

export default Messages;

