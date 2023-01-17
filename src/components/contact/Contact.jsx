import React, {useEffect} from 'react'
import "./contact.css"
import telIcon from "../assets/src/icons/tel.png"
import emailIcon from "../assets/src/icons/email.png"
import ubiIcon from "../assets/src/icons/ubi.png"
import gsap from 'gsap'
import { Power4 } from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


const Contact = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
    

          const tl = gsap.timeline({
            duration:1,
            ease: Power4.easeOut,
            scrollTrigger:{
                trigger:".container_contact",
                /* pin:true, */
                start:"-600px top",
                end:"-=500",
              }
          })
      
          tl.to( ".line_title_contact",{
            width: "35%",
            duration: .5,
            x: -100,
          })
      
         
          tl.from( ".contactTitle",{
            opacity:0,
            duration: .8,
            y:200,
          })
      
        

    },[])


  return (
    <div className="contact" id='contact'>  

        <div className="container_contact">
            <div className="line_title_contact"></div>
            <h2 className="contactTitle">Contacto</h2>

            <div className="box_contact">

                <div className="cont tel">
                    <img className='iconContact' src={telIcon} alt="icon Telefono" />
                    <p>000-000-000</p>
                </div>

                <div className="cont email">
                    <img className='emailIcon' src={emailIcon} alt="icon Email" />
                    <p>emailExample@gmail.com</p>
                </div>

                <div className="cont ubi">
                    <img className='iconContact' src={ubiIcon} alt="icon Ubicacion" />
                    <p>ubi example</p>
                </div>

            </div>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.359608653605!2d-75.61623098680522!3d6.244287615728209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses-419!2sar!4v1673103712439!5m2!1ses-419!2sar"  referrerPolicy="no-referrer-when-downgrade" loading="lazy" allowFullScreen ></iframe>
            </div>
        </div>

       
    </div>
  )
}

export default Contact