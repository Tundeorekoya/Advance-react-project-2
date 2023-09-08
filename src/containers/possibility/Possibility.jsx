import React from 'react'
import './possibility.css'
import  PossibilityImage  from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='Possibility'>
      <div className='gpt3__possibility-image'>
        <img  src={PossibilityImage} alt={PossibilityImage}/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started </h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. indulgence wat everything joy alteration build the attachment. Part we years to allow asked of. </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
