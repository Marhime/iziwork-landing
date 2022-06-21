import React from 'react'

function VideoSectionBlue({data}) {
    const yellowSectionVideo = data.yellowSectionVideo
    const yellowSectionVideo2 = data.yellowSectionVideo2
    console.log(yellowSectionVideo)
    return (
        <article className="section-media">
            <header className="container-faq">
                <h2 dangerouslySetInnerHTML={{__html: data.yellowSectionVideoSectionTitle}}/>
            </header>
            <div className="container-faq-fluid">
                <div className="media">
                    <div>
                        <div className="media__video">
                            <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${yellowSectionVideo.yellowSectionVideoVideoID}`}
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
                            {yellowSectionVideo.yellowSectionVideoPdfSectionTitle}
                            </p>
                            <div className="pdf-section">
                                {yellowSectionVideo.yellowSectionVideoPdfs.map((pdf) => (
                                    <div className="pdf-section__item">
                                        <a target="_blank" 
                                        href={pdf.yellowSectionVideoPdfsFile} 
                                        className="pdf-section__item-button"
                                        
                                    >{pdf.yellowSectionVideoPdfsTitle} <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">{pdf.yellowSectionVideoPdfsSize}</p></div>
                                ))}
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
                            src={`https://www.youtube.com/embed/${yellowSectionVideo2.yellowSectionVideo2VideoID}`}
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
                            {yellowSectionVideo2.yellowSectionLinkSectionTitle}
                            </p>
                            <div className="pdf-section">
                                {yellowSectionVideo2.yellowSectionVideo2Links.map((link) => (
                                    <div className="pdf-section__item">
                                        <a href={link.yellowSection2LinksUrl} target="_blank" class="pdf-section__item-button">{link.yellowSection2LinksTitle} <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.58862 5.63897L6.96777 3.5126C8.17131 1.65698 10.6512 1.12837 12.5069 2.33191V2.33191C14.3625 3.53545 14.8911 6.01538 13.6875 7.871L12.3084 9.99737" stroke="white" stroke-width="2" stroke-linecap="round"></path><path d="M10.427 12.9022L9.04785 15.0285C7.84431 16.8842 5.36438 17.4128 3.50876 16.2092V16.2092C1.65315 15.0057 1.12454 12.5258 2.32808 10.6701L3.70723 8.54377" stroke="white" stroke-width="2" stroke-linecap="round"></path><line x1="6.76768" y1="11.17" x2="9.23777" y2="7.36158" stroke="white" stroke-width="2" stroke-linecap="round"></line></svg></a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default VideoSectionBlue