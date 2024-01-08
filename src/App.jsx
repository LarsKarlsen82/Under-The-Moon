import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main'; 
import ImageArticle from './components/ImageArticle/ImageArticle';
import MultiImageArticle from './components/MultiImageArticle/MultiImageArticle';
import Footer from './components/Footer/Footer';
import HomeButton  from './components/HomeButton/HomeButton';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ImageArticle />
      <MultiImageArticle />
      <Footer />
      <HomeButton />
    </>
  )
}

export default App
