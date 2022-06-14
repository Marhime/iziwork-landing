import { Link, navigate } from 'gatsby';
import { graphql } from 'gatsby';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "../styles/main.scss"


// markup
const IndexPage = ({location, data}) => {
  const [topic, setTopic] = useState(1)
  const [color, setColor] = useState('blue')

  const topics = useRef(null)
  const mediaSection = useRef(null)

  const content = data.wordpressPage.acf

  const handleChangeTopic = (topic) => {
    setTopic(topic)
    window.history.replaceState(null, document.title, `?topic=${topic}`);
    window.scrollTo({top: mediaSection.current.offsetTop, behavior: 'smooth'})
    console.log(mediaSection)
  }

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
      <title>Home Page</title>
      <header className="container-faq-fluid">
        <img className="logo-mobile" src="/new-logo-icon.svg" />
        <img className="logo-desktop" src="/new-logo.svg" />
        <nav>
          <Link to='#blog'>Blog</Link>
          <a onClick={handleChangeTopic} className="button">Go to website</a>
        </nav>
      </header>
      <section id="faq" className="section-header">
        <div className="container-faq">
          <h1 dangerouslySetInnerHTML={{__html: content.title}} />
          <h2 dangerouslySetInnerHTML={{__html: content.subtitle}} />
          <div ref={topics} className="topics">
            {content.blue_section && 
              <div data-topic={1} onClick={() => handleChangeTopic(1)} className={`topics__item topics__item--blue ${topic == 1 ? 'active' : ''}`}>
                <img src="/blue-icon.svg"/>
                <div className="topics__item-content">
                  <p className="topics__item-title">{content.blue_section.title && content.blue_section.title}</p>
                  <p className="topics__item-subtitle">{content.blue_section.subtitle && content.blue_section.subtitle}</p>
                </div>
              </div>
            }
            {content.yellow_section && 
              <div data-topic={2} onClick={() => handleChangeTopic(2)} className={`topics__item topics__item--yellow ${topic == 2 ? 'active' : ''}`}>
                <img src="/yellow-ico.png"/>
                <div className="topics__item-content">
                  <p className="topics__item-title">{content.yellow_section.title && content.yellow_section.title}</p>
                  <p className="topics__item-subtitle">{content.yellow_section.title && content.yellow_section.title}</p>
                </div>
              </div>
            }
            {content.green_section && 
              <div data-topic={3} onClick={() => handleChangeTopic(3)} className={`topics__item topics__item--green ${topic == 3 ? 'active' : ''}`}>
                <img src="/green-ico.png"/>
                <div className="topics__item-content">
                  <p className="topics__item-title">{content.green_section.title && content.green_section.title}</p>
                  <p className="topics__item-subtitle">{content.green_section.title && content.green_section.title}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <section ref={mediaSection}>
        {topic == 1 && (
          <article className="section-media">
          <header className="container-faq">
            <h2 dangerouslySetInnerHTML={{__html: content.blue_section.media_section_title}} />
          </header>
          <div className="container-faq-fluid">
            <div className="media">
              <div className="media__video">
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${content.blue_section.videos.videoID}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
              <div className="media-utils">
                <div className="media-utils__item">
                  <p className="sigle-title">
                    <img  src="/sigle.svg"/>
                    {content.blue_section.pdf_section_title}
                  </p>
                  <div className="pdf-section">
                    <div className="pdf-section__item"><a download href={content.blue_section.pdf.file} className="pdf-section__item-button">{content.blue_section.pdf.title} <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">{content.blue_section.pdf.size}</p></div>
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
          <h2 dangerouslySetInnerHTML={{__html: content.yellow_section.media_section_title}} />
        </div>
        <div className="container-faq-fluid">
          <div className="media">
            <div className="media__video">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/klgjrUDRV0g`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoplay
                title="Embedded youtube"
              />
            </div>
            <div className="media-utils">
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  {content.yellow_section.pdf_section_title}
                </p>
                <div className="pdf-section">
                  <div className="pdf-section__item"><a href="#" className="pdf-section__item-button">Titolo PDF 1 <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">1.2 MB</p></div>
                  <div className="pdf-section__item"><a href="#" className="pdf-section__item-button">Titolo PDF 1 <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">1.2 MB</p></div>
                </div>
              </div>
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  IMPORTANT LINKS
                </p>
                <div className="pdf-section">
                  <a className="pdf-section__item-link">Clickable link</a>
                  <a className="pdf-section__item-link">Clickable link</a>
                  <a className="pdf-section__item-link">Clickable link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
      {topic == 3 && (
        <section className="section-media">
        <div className="container-faq">
          <h2 dangerouslySetInnerHTML={{__html: content.green_section.media_section_title}} />
        </div>
        <div className="container-faq-fluid">
          <div className="media">
            <div className="media__video">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/klgjrUDRV0g`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoplay
                title="Embedded youtube"
              />
            </div>
            <div className="media-utils">
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  TUTORIALS IN PDF FORMAT
                </p>
                <div className="pdf-section">
                  <div className="pdf-section__item"><a href="#" className="pdf-section__item-button">Titolo PDF 1 <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">1.2 MB</p></div>
                </div>
              </div>
              <div className="media-utils__item">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  IMPORTANT LINKS
                </p>
                <div className="pdf-section">
                  <a className="pdf-section__item-link">Clickable link</a>
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
                TUTORIALS IN PDF FORMAT
              </p>
              <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
              <p className="date">21 GENNAIO 2022</p>
            </div>
          </article>
          <div className="other-articles">
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  TUTORIALS IN PDF FORMAT
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title"><img  src="/sigle.svg"/>
                  TUTORIALS IN PDF FORMAT
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  TUTORIALS IN PDF FORMAT
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
              </div>
            </article>
            <article className="normal-article">
              <img className="article-image" src="/image.jpg"/>
              <div className="article-content">
                <p className="sigle-title">
                  <img  src="/sigle.svg"/>
                  TUTORIALS IN PDF FORMAT
                </p>
                <p className="title">Boom di dimissioni nella fascia 25-35 anni</p>
                <p className="date">21 GENNAIO 2022</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query LandingPage {
    wordpressPage(id: {eq: "2ff50b83-33a9-59c8-a742-1fd683e6edf5"}) {
      id
      acf {
        title
        subtitle
        blue_section {
          title
          subtitle
          color
          media_section_title
          pdf_section_title
          image {
            source_url
          }
          links {
            title
            url
          }
          videos {
            video_id
          }
          pdf {
            file
            size
            title
          }
        }
        yellow_section {
          title
          subtitle
          color
          media_section_title
          pdf_section_title
          videos {
            video_id
          }
          pdf {
            title
            size
            file {
              url {
                source_url
              }
            }
          }
        }
        green_section {
          title
          subtitle
          color
          media_section_title
          pdf_section_title
          links_section_title
          image {
            source_url
          }
          links {
            url
            title
          }
          pdf {
            title
            size
          }
          videos {
            video_id
          }
        }
      }
    }
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Presse"}}}}) {
      edges {
        node {
          categories {
            name
          }
        }
      }
    }
  }
`;
