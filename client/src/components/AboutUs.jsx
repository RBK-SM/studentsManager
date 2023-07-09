import React from 'react'

function AboutUs() {
  return (
    <div>
      <div className='container'>
      <img className="overview" src='overview.png'/>
      <p>RBK is an immersive career accelerator delivering high-value meta skills in 3-5 months. 96% of RBK grads are hired within 6 months of graduation.</p>
      </div>

      <div className='icons'>
       <img className='image' src='industry.png'/>
       <img className='image' src='location.png'/>
      {/* </div>
       <div className='icons'></div> */}
       <img className='image' src='number.png'/>
       <img className='image' src='email.png'/>
      </div>
      
    </div>
  )
}

export default AboutUs
