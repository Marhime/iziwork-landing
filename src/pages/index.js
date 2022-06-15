import { Link } from 'gatsby';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "../styles/main.scss"

// markup
const IndexPage = ({location, data}) => {
  const [topic, setTopic] = useState(1)
  const [color, setColor] = useState('blue')

  const topics = useRef(null)
  const mediaSection = useRef(null)

  // const content = data.wordpressPage.acf

  const handleChangeTopic = (topic) => {
    setTopic(topic)
    window.history.replaceState(null, document.title, `?topic=${topic}`);
    window.scrollTo({top: mediaSection.current.offsetTop, behavior: 'smooth'})
  }

  useEffect(() => {
    const searchTopic = location.search.split('=')[1]
    if(searchTopic)
      window.scrollTo({top: mediaSection.current.offsetTop, behavior: 'smooth'})
  }, [])

  useEffect(() => {
    const searchTopic = location.search.split('=')[1]
    if(searchTopic)
      setTopic(searchTopic)
  }, [location.search])

  useLayoutEffect(() => {
    if(topic == 1) {
      return setColor('blue')
    }
    if(topic == 2) {
      return setColor('yellow')
    }
    if(topic == 3) {
      return setColor('green')
    }
  }, [topic])
  
  return (
    <main className={`landing-faq ${color}`}>
      <title>Onboarding - Iziwork Italia</title>
      <header className="container-faq-fluid">
        <img className="logo-mobile" src="/new-logo-icon.svg" />
        <img className="logo-desktop" src="/new-logo.svg" />
        <nav>
          <Link to='#blog'>Blog</Link>
          <a target="_blank" href='https://www.iziwork.com/it/' className="button">Go to website</a>
        </nav>
      </header>
      <section id="faq" className="section-header">
        <div className="container-faq">
          <h1>Con iziwork rispondi a tutte le tue <strong>domande</strong> riguardo</h1>
          <h2><strong>Scegli</strong> l’argomento</h2>
          <div ref={topics} className="topics">

              <div data-topic={1} onClick={() => handleChangeTopic(1)} className={`topics__item topics__item--blue ${topic == 1 ? 'active' : ''}`}>
                <img src="/blue-icon.svg"/>
                <div className="topics__item-content">
                  <p className="topics__item-title">Il lavoro in somministrazione</p>
                  <p className="topics__item-subtitle">Il rapporto di lavoro in somministrazione e la struttura del contratto</p>
                </div>
              </div>
              
              <div data-topic={2} onClick={() => handleChangeTopic(2)} className={`topics__item topics__item--yellow ${topic == 2 ? 'active' : ''}`}>
                <img src="/yellow-ico.png"/>
                <div className="topics__item-content">
                  <p className="topics__item-title">La busta paga</p>
                  <p className="topics__item-subtitle">Le sezioni e le voci che puoi trovare all’interno e come leggerle</p>
                </div>
              </div>

              <div data-topic={3} onClick={() => handleChangeTopic(3)} className={`topics__item topics__item--green ${topic == 3 ? 'active' : ''}`}>
                <img src="/green-ico.png"/>
                <div className="topics__item-content">
                  <p className="topics__item-title">Modulo di onboarding & IBAN</p>
                  <p className="topics__item-subtitle">Tutto ciò che ti serve sapere sulla compilazione del modulo di onboarding e sul codice IBAN</p>
                </div>
              </div>

          </div>
        </div>
      </section>

      <section ref={mediaSection}>
        {topic == 1 && (
          <article className="section-media">
          <header className="container-faq">
            <h2>Come funziona il <strong>lavoro in somministrazione?</strong></h2>
          </header>
          <div className="container-faq-fluid">
            <div className="media">
              <div>
                <div className="media__video">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/kQLwIQCjoIE`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <p className='media__text'>*Premi sulle impostazioni del video per selezionare i sottotitoli nella tua lingua</p>
              </div>
              <div className="media-utils">
                <div className="media-utils__item">
                  <p className="sigle-title">
                    <img  src="/sigle.svg"/>
                    Scopri la struttura del contratto
                  </p>
                  <div className="pdf-section">
                    <div className="pdf-section__item"><a target="_blank" href='/La-struttura-del-contratto.pdf' className="pdf-section__item-button">La struttura del contratto <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">2 Mo</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        )}
      {topic == 2 && (
        <section className="section-media">
        <div className="container-faq">
          <h2>Scopri la <strong>busta paga</strong></h2>
        </div>
        <div className="container-faq-fluid">
          <div className="media">
            <div>
              <div className="media__video">
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/1T8_2xM1wcw`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  autoplay
                  title="Embedded youtube"
                />
              </div>
              <p className='media__text'>*Premi sulle impostazioni del video per selezionare i sottotitoli nella tua lingua</p>
            </div>
            <div className="media-utils">
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Scarica un esempio della struttura della busta paga
                </p>
                <div className="pdf-section">
                  <div className="pdf-section__item"><a target="_blank" href="/Busta-Paga-Struttura.pdf" className="pdf-section__item-button">Esempio busta paga <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">618 Ko</p></div>
                </div>
              </div>
              {/* <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  IMPORTANT LINKS
                </p>
                <div className="pdf-section">
                  <a className="pdf-section__item-link">Clickable link</a>
                  <a className="pdf-section__item-link">Clickable link</a>
                  <a className="pdf-section__item-link">Clickable link</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      )}
      {topic == 3 && (
        <section className="section-media">
        <div className="container-faq">
          <h2>Scopri il <strong>modulo di onboarding</strong></h2>
        </div>
        <div className="container-faq-fluid">
          <div className="media">
            <div>
              <div className="media__video">
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/9rU9zqAxmso`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  autoplay
                  title="Embedded youtube"
                />
              </div>
              <p className='media__text'>*Premi sulle impostazioni del video per selezionare i sottotitoli nella tua lingua</p>
            </div>
            <div className="media-utils">
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Scarica il documento per approfondire
                </p>
                <div className="pdf-section">
                  <div className="pdf-section__item"><a target="_blank" href="/Modulo-di-onboarding.pdf" className="pdf-section__item-button">Esempio del modulo di onboarding <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">2 Mo</p></div>
                </div>
              </div>
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Clicca e compila il modulo di onboarding
                </p>
                <div className="pdf-section">
                  <a href='https://iziwork-votreavis.typeform.com/to/ZakxIZX9#email=xxxxx&tel=xxxxx&id=xxxxx&company=xxxxx&shiftid=xxxxx' target='_blank' className="pdf-section__item-button">Compila ora <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.58862 5.63897L6.96777 3.5126C8.17131 1.65698 10.6512 1.12837 12.5069 2.33191V2.33191C14.3625 3.53545 14.8911 6.01538 13.6875 7.871L12.3084 9.99737" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <path d="M10.427 12.9022L9.04785 15.0285C7.84431 16.8842 5.36438 17.4128 3.50876 16.2092V16.2092C1.65315 15.0057 1.12454 12.5258 2.32808 10.6701L3.70723 8.54377" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <line x1="6.76768" y1="11.17" x2="9.23777" y2="7.36158" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="media">
            <div>
              <div className="media__video">
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/JP74SITlKB4`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  autoplay
                  title="Embedded youtube"
                />
              </div>
              <p className='media__text'>*Premi sulle impostazioni del video per selezionare i sottotitoli nella tua lingua</p>
            </div>
            <div className="media-utils">
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Clicca e compila il modulo di onboarding
                </p>
                <div className="pdf-section">
                  <a href='https://iziwork-votreavis.typeform.com/to/ZakxIZX9#email=xxxxx&tel=xxxxx&id=xxxxx&company=xxxxx&shiftid=xxxxx' target='_blank' className="pdf-section__item-button">Compila ora <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.58862 5.63897L6.96777 3.5126C8.17131 1.65698 10.6512 1.12837 12.5069 2.33191V2.33191C14.3625 3.53545 14.8911 6.01538 13.6875 7.871L12.3084 9.99737" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <path d="M10.427 12.9022L9.04785 15.0285C7.84431 16.8842 5.36438 17.4128 3.50876 16.2092V16.2092C1.65315 15.0057 1.12454 12.5258 2.32808 10.6701L3.70723 8.54377" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <line x1="6.76768" y1="11.17" x2="9.23777" y2="7.36158" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
      </section>
      
      <section id="blog" className="section-blog">
        <h2>Il <strong>blog</strong></h2>
        <div className="container-faq-fluid">

          <article className="first-article">
            <img className="article-image" src="/image.jpg"/>
            <div className="article-content">
              <p className="sigle-title">
                <img  src="/sigle.svg"/>
                Onboarding Iziwork
              </p>
              <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
              <p className="date">21 GENNAIO 2022</p>
              <a target="_blank" href='https://www.iziwork.com/it/blog/occupazione-ripresa-2021' className='button'>Read more</a>
            </div>
          </article>
          <div className="other-articles">
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
                <a target="_blank" href='https://www.iziwork.com/it/blog/occupazione-ripresa-2021' className='button'>Read more</a>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title"><img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
                <a target="_blank" href='https://www.iziwork.com/it/blog/occupazione-ripresa-2021' className='button'>Read more</a>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
                <a target="_blank" href='https://www.iziwork.com/it/blog/occupazione-ripresa-2021' className='button'>Read more</a>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
                <a target="_blank" href='https://www.iziwork.com/it/blog/occupazione-ripresa-2021' className='button'>Read more</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query LandingPage {
//     wordpressPage(id: {eq: "2ff50b83-33a9-59c8-a742-1fd683e6edf5"}) {
//       id
//       acf {
//         title
//         subtitle
//         blue_section {
//           title
//           subtitle
//           color
//           media_section_title
//           pdf_section_title
//           image {
//             source_url
//           }
//           links {
//             title
//             url
//           }
//           videos {
//             video_id
//           }
//           pdf {
//             file
//             size
//             title
//           }
//         }
//         yellow_section {
//           title
//           subtitle
//           color
//           media_section_title
//           pdf_section_title
//           videos {
//             video_id
//           }
//           pdf {
//             title
//             size
//             file {
//               url {
//                 source_url
//               }
//             }
//           }
//         }
//         green_section {
//           title
//           subtitle
//           color
//           media_section_title
//           pdf_section_title
//           links_section_title
//           image {
//             source_url
//           }
//           links {
//             url
//             title
//           }
//           pdf {
//             title
//             size
//           }
//           videos {
//             video_id
//           }
//         }
//       }
//     }
//     allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Presse"}}}}) {
//       edges {
//         node {
//           categories {
//             name
//           }
//         }
//       }
//     }
//   }
// `;
