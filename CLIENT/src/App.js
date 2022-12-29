import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Artists from './pages/Artists';
import About from './pages/About'
import Albums from './pages/Albums'
import AlbumDetails from './pages/AlbumDetails';
import ArtistAlbums from './pages/ArtistAlbums'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBsDpREz8BZDLkn2DZxpRw6AB9VonPSMg8",
    authDomain: "discover-discography.firebaseapp.com",
    projectId: "discover-discography",
    storageBucket: "discover-discography.appspot.com",
    messagingSenderId: "634876276811",
    appId: "1:634876276811:web:6208ac870a40db761e5dce",
    measurementId: "G-6W3Y699M48"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <div className="App">
      <header className="App-header">
        <div className="site-name">
          <h1>Discover Discography</h1>
        </div>  
          <span></span>
       <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Artists/>} />
          <Route path='/allAlbums' element={<Albums/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/albums/details/:albumId' element={<AlbumDetails/>}/>
          <Route path='/artists/:id/albums' element={<ArtistAlbums/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;