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
import Blog from '../components/Blog';

// markup
const IndexPage = ({location, data}) => {
  const [topic, setTopic] = useState(1)
  const [color, setColor] = useState('blue')

  const topics = useRef(null)
  const mediaSection = useRef(null)
  const content = data.allMarkdownRemark.edges[0].node.frontmatter
  const blueSection = data.allMarkdownRemark.edges[0].node.frontmatter.blueSection
  const yellowSection = data.allMarkdownRemark.edges[0].node.frontmatter.yellowSection
  const greenSection = data.allMarkdownRemark.edges[0].node.frontmatter.greenSection
  
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
          <h1 dangerouslySetInnerHTML={{__html: content.homeTitle}} />
          <h2 dangerouslySetInnerHTML={{__html: content.homeSubtitle}} />
          <div ref={topics} className="topics">
            <Topic title={blueSection.blueSectionTitle} subtitle={blueSection.blueSectionSubtitle} featuredpost={blueSection.blueSectionFeaturedpost} color={blueSection.blueSectionColor} dataTopic={1} data={content.blueSection} handleChangeTopic={handleChangeTopic} topic={topic} />
            <Topic title={yellowSection.yellowSectionTitle} subtitle={yellowSection.yellowSectionSubtitle} featuredpost={yellowSection.yellowSectionFeaturedpost} color={yellowSection.yellowSectionColor} data={content.yellowSection} dataTopic={2} handleChangeTopic={handleChangeTopic} topic={topic} />
            <Topic dataTopic={3} title={greenSection.greenSectionTitle} subtitle={greenSection.greenSectionSubtitle} featuredpost={greenSection.greenSectionFeaturedpost} color={greenSection.greenSectionColor} data={content.greenSection}  handleChangeTopic={handleChangeTopic} topic={topic} />
          </div>
        </div>
      </section>

      <section ref={mediaSection}>
        {topic == 1 && (
          <VideoSectionBlue data={blueSection}/>
        )}
        {topic == 2 && (
          <VideoSectionYellow data={yellowSection}/>
        )}
        {topic == 3 && (
          <VideoSectionGreen data={greenSection}/>
        )}
      </section>
      
      <section id="blog" className="section-blog">
        <h2 dangerouslySetInnerHTML={{__html: content.titleBlogSection}} />
        <Blog />
      </section>
    </main>
  )
}

export default IndexPage


export const pageQuery = graphql` 
  query Landing {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            blueSection {
              blueSectionVideo {
                blueSectionVideoPdfs {
                  blueSectionVideoPdfsTitle
                  blueSectionVideoPdfsSize
                  blueSectionVideoPdfsFile
                }
                blueSectionVideoPdfSectionTitle
                blueSectionVideoName
                blueSectionVideoVideoID
              }
              blueSectionTitle
              blueSectionSubtitle
              blueSectionFeaturedpost
              blueSectionColor
              blueSectionVideoSectionTitle
            }
            greenSection {
              greenSectionColor
              greenSectionFeaturedpost
              greenSectionSubtitle
              greenSectionTitle
              greenSectionVideo {
                greenSectionLinkSectionTitle
                greenSectionVideoLinks {
                  greenSectionLinksTitle
                  greenSectionLinksUrl
                }
                greenSectionVideoPdfSectionTitle
                greenSectionVideoName
                greenSectionVideoPdfs {
                  greenSectionVideoPdfsSize
                  greenSectionVideoPdfsFile
                  greenSectionVideoPdfsTitle
                }
                greenSectionVideoVideoID
              }
              greenSectionVideoSectionTitle
            }
            homeSubtitle
            homeTitle
            title
            titleBlogSection
            yellowSection {
              yellowSectionColor
              yellowSectionTitle
              yellowSectionSubtitle
              yellowSectionFeaturedpost
              yellowSectionVideo {
                yellowSectionVideoPdfSectionTitle
                yellowSectionVideoName
                yellowSectionVideoPdfs {
                  yellowSectionVideoPdfsFile
                  yellowSectionVideoPdfsSize
                  yellowSectionVideoPdfsTitle
                }
                yellowSectionVideoVideoID
              }
              yellowSectionVideo2 {
                yellowSectionLinkSectionTitle
                yellowSectionVideo2Links {
                  yellowSection2LinksTitle
                  yellowSection2LinksUrl
                }
                yellowSectionVideo2Name
                yellowSectionVideo2PdfSectionTitle
                yellowSectionVideo2VideoID
              }
              yellowSectionVideoSectionTitle
            }
          }
        }
      }
    }
  }

`;
