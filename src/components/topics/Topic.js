import React from "react"

export default function Topic({title, subtitle, featuredpost, color, handleChangeTopic, topic, dataTopic}) {
  return (
    <>
      <div onClick={() => handleChangeTopic(dataTopic, title)} className={`topics__item topics__item--${color} ${topic == dataTopic ? 'active' : ''}`}>
        <img src={featuredpost}/>
        <div className="topics__item-content">
          <p className="topics__item-title">{title}</p>
          <p className="topics__item-subtitle">{subtitle}</p>
        </div>
      </div>
    </>
    )
}
