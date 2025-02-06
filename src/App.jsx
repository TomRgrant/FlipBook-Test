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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores amet, labore dolores nisi optio magnam impedit maxime nihil omnis suscipit necessitatibus? Eum quaerat corrupti at impedit. Aspernatur, nam iusto. labore dolores nisi optio magnam  labore dolores nisi optio magnam labore dolores nisi optio magnam labore dolores nisi optio magnam
          </p>
      </div>
  
      <div class="page page-right page-2">
          <h1 className="page-title">2</h1>
          <p className="page-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ullam. Reiciendis quod adipisci qui sapiente aliquam inventore, aut dolores doloribus facere nulla ex quo, atque voluptate. Tempora ea quasi, facere ex officiis neque dolorum corporis, ipsam dolorem modi numquam, optio debitis ipsum eligendi nesciunt culpa impedit error eaque minima veniam?
          </p>
      </div>
  
      <div class="page page-left page-3">
          <h1 className="page-title">3</h1>
          <p className="page-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus placeat rerum harum consequuntur, ipsam nostrum, quae excepturi, quia repellat ea est mollitia eius soluta aliquid tempora sequi veritatis porro minima similique consectetur at facilis recusandae rem. Qui aperiam est illo fugiat assumenda. Non excepturi, in impedit adipisci laudantium nam rerum.
          </p>
      </div>
  
      <div class="page page-right">
          <h1 className="page-title">4</h1>
          <p className="page-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate quisquam consequuntur, culpa, ut distinctio quidem veritatis mollitia dicta, quod quis nemo pariatur molestias quaerat excepturi? Molestias alias, nesciunt explicabo temporibus reprehenderit fugiat aliquid fugit error mollitia nisi natus at, tenetur obcaecati dolor non minus iste expedita. Voluptatibus, delectus alias?
          </p>
      </div>
  
    </HTMLFlipBook>
  </div>
  
</section>
  )
}

export default App
