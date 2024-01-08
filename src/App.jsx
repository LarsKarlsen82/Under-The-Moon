import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main'; 
import ImageArticle from './components/ImageArticle/ImageArticle';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ImageArticle />
    </>
  )
}

export default App
