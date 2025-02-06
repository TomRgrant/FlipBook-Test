import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import HTMLFlipBook from "react-pageflip";


function App() {

  return (
    
      <section className="about-page">
          
          <div class="book-container">
  
    <HTMLFlipBook
      className="flipbook"
      width={450}
      height={525}
      size="fixed"
      startPage={0}
      drawShadow={true}
      flippingTime={700}
      showCover={false}
      showSwipeHint={true}
      uncutPages={true}
      maxShadowOpacity={0.5}
    >
  
      <div class="page page-left">
          <h1 className="page-title">1</h1>
          <p className="page-text">
          </p>
      </div>
  
      <div class="page page-right">
          <h1 className="page-title">2</h1>
          <p className="page-text">
          </p>
      </div>
  
      <div class="page page-left">
          <h1 className="page-title">3</h1>
          <p className="page-text">
          </p>
      </div>
  
      <div class="page page-right">
          <h1 className="page-title">4</h1>
          <p className="page-text">
          </p>
      </div>
  
    </HTMLFlipBook>
  </div>
  
</section>
  )
}

export default App
