import React from 'react'
import './CardInfos.css'
import {CardinformationData} from './CardinformationData.js'
function CardInfos(data) {
  return (
    <div className="card-information">
      <a href="">
        <span className="card-img">{data.title}</span>
        <img src={data.img} alt="" />
        <p className="img-discription">{data.description}</p>
        <p className="showping know">shopping Know</p>
      </a>
    </div>
  );
}

export default CardInfos