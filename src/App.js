import React from 'react';

import ArticlePreview from './components/ArticlePreview';

import './App.css'

const DUMMY_DATA = {
  headline: "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  preview: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
  author: "Michelle Appleton",
  date: "28 Jun 2020",
}

function App() {
  return (
    <ArticlePreview headline={DUMMY_DATA.headline} preview={DUMMY_DATA.preview} author={DUMMY_DATA.author} date={DUMMY_DATA.date} />
  );
}

export default App;
