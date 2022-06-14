import { Link } from 'gatsby';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "../../styles/main.scss"

// markup
const ArticlePage = ({location, data}) => {
  
  return (
    <main className={`landing-faq-blog`}>
      <title>Onboarding Italia - Iziwork Italia</title>
      <header className="container-faq-fluid">
        <img className="logo-mobile" src="/new-logo-icon.svg" />
        <img className="logo-desktop" src="/new-logo.svg" />
        <nav>
          <Link to='#blog'>FAQ</Link>
          <a target="_blank" href='https://www.iziwork.com/it/' className="button">Go to website</a>
        </nav>
      </header>
      <section id="faq" className="section-header">
        <div className="container-faq">
          <h1>Con iziwork rispondi a tutte le tue <strong>domande</strong> riguardo</h1>
          <h2><strong>Scegli</strong> l’argomento</h2>
        </div>
      </section>
    </main>
  )
}

export default ArticlePage