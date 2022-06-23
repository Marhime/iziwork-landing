import React from 'react'

function VideoSectionBlue({data}) {
    const greenSectionVideo = data.greenSectionVideo
    
    return (
        <article className="section-media">
            <header className="container-faq">
                <h2 dangerouslySetInnerHTML={{__html: data.greenSectionVideoSectionTitle}}/>
            </header>
            <div className="container-faq-fluid">
                <div className="media">
                    <div>
                        <div className="media__video">
                            <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${greenSectionVideo.greenSectionVideoVideoID}`}
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
                            {greenSectionVideo.greenSectionVideoPdfSectionTitle}
                            </p>
                            <div className="pdf-section">
                                {greenSectionVideo.greenSectionVideoPdfs.map((pdf) => (
                                    <div className="pdf-section__item">
                                        <a target="_blank" 
                                        href={pdf.greenSectionVideoPdfsFile} 
                                        className="pdf-section__item-button"
                                        
                                    >{pdf.greenSectionVideoPdfsTitle} <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4137 1.5C8.4137 0.947715 7.96598 0.5 7.4137 0.5C6.86141 0.5 6.4137 0.947715 6.4137 1.5L8.4137 1.5ZM6.70659 17.2071C7.09711 17.5976 7.73028 17.5976 8.1208 17.2071L14.4848 10.8431C14.8753 10.4526 14.8753 9.81946 14.4848 9.42893C14.0942 9.03841 13.4611 9.03841 13.0706 9.42893L7.4137 15.0858L1.75684 9.42893C1.36632 9.03841 0.733152 9.03841 0.342628 9.42893C-0.0478962 9.81946 -0.0478962 10.4526 0.342628 10.8431L6.70659 17.2071ZM6.4137 1.5L6.4137 16.5L8.4137 16.5L8.4137 1.5L6.4137 1.5Z" fill="white"/></svg></a><p className="pdf-section__item-size">2 Mb</p></div>
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