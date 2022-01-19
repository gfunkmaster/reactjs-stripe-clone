import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
 
  return <section className='hero' onMouseOver={closeSubmenu}>
   <div className="hero-center">
     <article className="hero-info">
       <h1>Payments Infrastrcutre for the internet </h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vero, beatae. Error nesciunt molestiae quam asperiores optio beatae repellendus odit perferendis voluptatum? Quasi eligendi dolor deleniti dicta necessitatibus dolorum corporis illum exercitationem fugiat, quidem amet voluptatibus totam omnis distinctio odit cumque voluptatum eius iure laudantium repellendus repudiandae. 
           Voluptas rem vel quidem!</p>
        <button className='btn'> Start now</button>

     </article>
     <article className="hero-images">
       <img src={phoneImg} alt="phone"  className='phone-img'/>
     </article>
   </div>
    </section>
}

export default Hero
 