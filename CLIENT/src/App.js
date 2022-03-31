import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Artists from './pages/Artists';
import About from './pages/About'
import Albums from './pages/Albums'
import AlbumDetails from './pages/AlbumDetails';
import ArtistAlbums from './pages/ArtistAlbums'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Discography Discovery</h1>
        <span></span>
       <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Artists/>} />
          <Route path='/albums' element={<Albums/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/albums/details/:albumId' element={<AlbumDetails/>}/>
          <Route path='/artist/:id/albums' element={<ArtistAlbums/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;