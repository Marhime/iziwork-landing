import React from "react"

export default function Topic({data, handleChangeTopic, topic, dataTopic}) {
  console.log(data)
  return (
    <>
      <div onClick={() => handleChangeTopic(dataTopic, data.title)} className={`topics__item topics__item--${data.color} ${topic == dataTopic ? 'active' : ''}`}>
        <img src={data.featuredpost}/>
        <div className="topics__item-content">
          <p className="topics__item-title">{data.title}</p>
          <p className="topics__item-subtitle">{data.subtitle}</p>
        </div>
      </div>
    </>
    )
}
