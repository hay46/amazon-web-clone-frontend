import React from 'react'
import './CardInfos.css'
import {CardinformationData} from './CardinformationData.js'
function CardInfos() {
  return (
    <div className="card-information">
      <a href="">
        <span className='card-img'>{CardinformationData.title}</span>
        <img src={CardinformationData.img} alt="" />
        <p className='img-discription'>{CardinformationData.description}</p>
        <p className='showping know'>shopping Know</p>
      </a>
    </div>
  );
}

export default CardInfos