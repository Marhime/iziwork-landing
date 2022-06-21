import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "../styles/main.scss"
import VideoSection from '../components/videos-section/VideoSectionBlue';
import Topic from '../components/topics/Topic';
import VideoSectionBlue from '../components/videos-section/VideoSectionBlue';
import VideoSectionYellow from '../components/videos-section/VideoSectionYellow';
import VideoSectionGreen from '../components/videos-section/VideoSectionGreen';

// markup
const IndexPage = ({location, data}) => {
  const [topic, setTopic] = useState(1)
  const [color, setColor] = useState('blue')

  const topics = useRef(null)
  const mediaSection = useRef(null)
  
  // const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  
  const handleChangeTopic = (topic, topicName) => {
    setTopic(topic)
    // window.gtag('event', 'action', {'event_category': 'Change topic', 'event_label': 'Click topic', 'value': `${topicName}`});
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
          <a target="_blank" href='https://www.iziwork.com/it/' className="button">Vai al sito</a>
        </nav>
      </header>
      <section id="faq" className="section-header">
        <div className="container-faq">
          {/* <h1 dangerouslySetInnerHTML={{__html: content.homeTitle}} />
          <h2 dangerouslySetInnerHTML={{__html: content.homeSubtitle}} /> */}
          <div ref={topics} className="topics">
            {/* <Topic dataTopic={1} data={content.blueSection} handleChangeTopic={handleChangeTopic} topic={topic} />
            <Topic dataTopic={2} data={content.yellowSection} handleChangeTopic={handleChangeTopic} topic={topic} />
            <Topic dataTopic={3} data={content.greenSection} handleChangeTopic={handleChangeTopic} topic={topic} /> */}
          </div>
        </div>
      </section>

      <section ref={mediaSection}>
        {/* {topic == 1 && (
          <VideoSectionBlue data={content.blueSection}/>
        )}
        {topic == 2 && (
          <VideoSectionYellow data={content.yellowSection}/>
        )}
        {topic == 3 && (
          <VideoSectionGreen data={content.greenSection}/>
        )} */}
      </section>
      
      <section id="blog" className="section-blog">
        {/* <h2 dangerouslySetInnerHTML={{__html: contentHeader.titleBlogSection}} /> */}
        <div className="container-faq-fluid">

          <article className="first-article">
            <img className="article-image" src="/article-dealflower.jpeg"/>
            <div className="article-content">
              <p className="sigle-title">
                <img  src="/sigle.svg"/>
                Onboarding Iziwork
              </p>
              <p className="title">Iziwork, l’evoluzione dell’agenzia per il lavoro passa da una “super app”</p>
              <p className="date">9 Maggio 2022</p>
              <a target="_blank" href='https://dealflower.it/iziwork-starup-italia-business-lavoro-somministrazione-tecnologia/' className='button'>Read more</a>
            </div>
          </article>
          <div className="other-articles">
            <article className="normal-article">
              <img className="article-image" src="/iziwork-gq.webp"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">Le 5 migliori app per trovare lavoro in Italia</p>
                <p className="date">7 aprile 2022</p>
                <a target="_blank" href='https://www.gqitalia.it/tech/article/5-migliori-app-trovare-lavoro-italia' className='button'>Read more</a>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/L-importanza-della-formazione.jpeg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">L’importanza della formazione per il proprio futuro professionale</p>
                <p className="date">01 marzo 2022</p>
                <a target="_blank" href='https://www.iziwork.com/it/blog/formazione-professionale' className='button'>Read more</a>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/Boom-di-dimissioni.jpeg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
                <a target="_blank" href='https://www.iziwork.com/it/blog/dimissioni-giovani' className='button'>Read more</a>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/Occupazione-in-ripresa.png"/>
              <div className="article-content">
                <p className="sigle-title"><img  src="/sigle.svg"/>
                  Onboarding Iziwork
                </p>
                <p className="title">Occupazione in ripresa nel 2021, ma non per le donne</p>
                <p className="date">20 GENNAIO 2022</p>
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
//     allFile {
//       edges {
//         node {
//           sourceInstanceName
//           childMarkdownRemark {
//             frontmatter {
//               homeTitle
//               homeSubtitle
//               titleBlogSection
//               blueSection {
//                 blueSectionVideo {
//                   blueSectionVideoPdfSectionTitle
//                   blueSectionVideoPdfs {
//                     title
//                     size
//                     file
//                   }
//                   name
//                 }
//                 videoSectionTitle
//                 title
//                 subtitle
//                 featuredpost
//                 color
//               }
//               yellowSection {
//                 color
//                 featuredpost
//                 subtitle
//                 title
//                 videoSectionTitle
//                 yellowSectionVideo {
//                   yellowSectionVideoLinks {
//                     linksTitle
//                   }
//                   yellowSectionVideoPdfs {
//                     title
//                     file
//                     size
//                   }
//                   yellowSectionVideoVideoID
//                   yellowSectionVideoPdfSectionTitle
//                   linkSectionTitle
//                 }
//               }
//               greenSection {
//                 color
//                 title
//                 subtitle
//                 videoSectionTitle
//                 greenSectionVideo {
//                   name
//                   greenSectionVideoVideoID
//                   greenSectionVideoPdfSectionTitle
//                   linkSectionTitle
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

// `;
