import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ServicesTitle = () => {

  useEffect(() => {

    const titleService_effect = () => {
      

      gsap.registerPlugin(ScrollTrigger);

      if (window.innerWidth > 900) {

          const tl_service = gsap.timeline({scrollTrigger:{  trigger:".containerTitle_service",  pin:true,  start:"-10px top",  end:"+=800"}})
          tl_service.from(".p_text_service",{  opacity:0,  duration:1.5,})

          tl_service.to(".p_text_service",{  opacity:1,  stagger: .007,  y: -10,  duration:1.5,})
      
          const tl_title = gsap.timeline({  scrollTrigger:{    trigger:".container_titulo_line_service",    start:"-10px top",  }})
          
          tl_title.from( ".service_title",{ duration: .7, x: -26, opacity:.9, stagger: .08})

          tl_title.to( ".service_title",{  duration: .4,  color:"rgb(125, 186, 255)",  stagger: .1})

          tl_title.to( ".service_title",{  duration: .5,  color:"rgb(255, 255, 255)",  stagger: .1})

          tl_title.to( ".p_text_about",{  duration: .6,  opacity:1,  y: -10,  stagger: .006})

      }else{
        
          const tl_service = gsap.timeline({  scrollTrigger:{ trigger:".containerTitle_service",  start:"-10px top",  end:"+=800"  }})

          tl_service.to(".p_text_service",{  opacity:1,  stagger: .007,  y: -10,  duration:1.5,})}



          const tl_titleBox = gsap.timeline({  scrollTrigger:{    trigger:".container_titulo_line_service",  start:"-140px top",  }})

          tl_titleBox.from( ".container_titulo_line_service",{  duration: .4,  opacity:0 })


          const tl_title = gsap.timeline({  scrollTrigger:{    trigger:".container_titulo_line_service",  start:"-10px top",  }})

          
          tl_title.to( ".service_title",{  duration: .4,  color:"rgb(125, 186, 255)",  stagger: .1})

          tl_title.to( ".service_title",{  duration: .5,  color:"rgb(255, 255, 255)",  stagger: .1})

          tl_title.to( ".p_text_about",{  duration: .6,  opacity:1,  y: -10,  stagger: .006})
      }

    titleService_effect()

    return () => {
      titleService_effect()
    }

  },[])


  const text_services = {
    "cadena" : "Que" ,
    "cadena1" : "Ofrecemos ?"
  }

  

  const arrayPalabras = (texto) => {
    const cadena = []

    for(let i = 0 ; i < texto.length ; i++){

      if( texto[i] == " "){
        cadena.push( <span> &nbsp;</span> )
      }
      else{
        cadena.push(texto[i])
      }
    }

    return cadena
  }

  let cadena1 = arrayPalabras(text_services.cadena)
  let cadena2 = arrayPalabras(text_services.cadena1)



  return (
    <div className="containerTitle_service">

      <div className="container_titulo_line_service">
          <div className="line_title_service"></div>
          <div className="box_title_service">
            <div className="que">
              {
                cadena1.map((index, key) => {
                  return <p key={key} className='service_title'>{index} </p>
                })
              }
            </div>
            <div className="ofrecemos">
              {
                cadena2.map((index, key) => {
                  return <p key={key} className='service_title'>{index} </p>
                })
              }
            </div>
        </div>
      </div>

      <div className="text_service">
          <div className="box_text_service">
        
              <p className='p_text_service'>
                En nuestra academia de f??tbol ofrecemos diversi??n y compa??erismo mientras los ni??os aprenden t??cnicas de juego y desarrollan un compromiso con el deporte. Ofrecemos charlas personalizadas con ni??os y padres para mejorar el aprendizaje y adaptaci??n al f??tbol, as?? como metodolog??as de entrenamiento especializadas. Adem??s, contamos con visitas anuales de personalidades del f??tbol para inspirar a los j??venes y brindar una experiencia ??nica. Nuestro objetivo es mejorar el desempe??o de los j??venes en aspectos t??cticos, f??sicos y mentales relacionados con el juego del f??tbol.
              </p>

          </div>
      </div>
  </div>
  )
}

export default ServicesTitle