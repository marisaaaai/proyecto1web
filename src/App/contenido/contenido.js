import "./contenido.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import React, { useState } from 'react';
import ReactModal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fhY_0SRY/SharedImage-144615.png?t=fc22815a6e15a6ae3977",
  "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fSZ_0SRY/SharedImage-144616.png?t=8733e66bbe97a8e3aeba",
];

function contenido({valor, valorEnv}){

    const [isActives, setIsActives] = useState(false);
    const [isActivem, setIsActivem] = useState(false);
    const [isActivel, setIsActivel] = useState(false);
    const [isActivexl, setIsActivexl] = useState(false);
    const [isActivexxl, setIsActivexxl] = useState(false);
    const [display, setDisplay] = useState(images[0]);
    const [isOpen, setIsOpen] = useState(false);

    const s = () =>{
        setIsActives(current => !current);
        setIsActivem(false);
        setIsActivel(false);
        setIsActivexl(false);
        setIsActivexxl(false);

    }
    const m = () =>{
        setIsActivem(current => !current);
        setIsActives(false);
        setIsActivel(false);
        setIsActivexl(false);
        setIsActivexxl(false);

    }
    const l = () =>{
        setIsActivel(current => !current);
        setIsActivem(false);
        setIsActives(false);
        setIsActivexl(false);
        setIsActivexxl(false);

    }
    const xl = () =>{
        setIsActivexl(current => !current);
        setIsActivem(false);
        setIsActivel(false);
        setIsActives(false);
        setIsActivexxl(false);

    }
    const xxl = () =>{
        setIsActivexxl(current => !current);
        setIsActivem(false);
        setIsActivel(false);
        setIsActivexl(false);
        setIsActives(false);

    }
    const regresar=()=>{
      setDisplay((display) => images[0]);
    }
    const cambiar=()=>{
      setDisplay((display) => images[1]);
    }
    return(
        <div className="page">
        <div className="imagen">
          <img src={display} onClick={() => setIsOpen(true)}>

          </img>
          <ReactModal
            isOpen={isOpen}
            contentLabel="Example Modal"
            onRequestClose={() => setIsOpen(false)}
            style={{
                overlay: {
                  backfaceVisibility: '90%',
                  backgroundColor:'rgba(52, 52, 52, 0.8)',
                },
                content:{
                  height: '550px',
                  width: "500px",
                  backgroundColor: 'white',
                  left: '50px',
                  position: 'fixed',
                  marginTop: '100px',
                  marginLeft:'250px',
                  zIndex: '999'
                }
              }
            }>
              <Carousel useKeyboardArrows={true} showThumbs={false} showIndicators={false}>
                {images.map((URL, index) => (
                  <div className="slide">
                    <img alt="sample_file" src={URL} key={index} />
                  </div>
                ))}
              </Carousel>
          </ReactModal>
          <div className="thumbnail">
            <img src = {images[1]} onMouseEnter={cambiar} onMouseLeave={regresar}></img>
          </div>
        </div>
        <div className="contenido">
          <h2> Desert Sun Sand Hoodie</h2>
          <ul>
            <li>
              <h2>
                {valor}
              </h2>
              <div className="delivery">
                Delivery from {valorEnv}
              </div>
            </li>
            <li>
              <dl className="size">
                <dt>Select size / option</dt>
                <div><dd className="talla " style={{
                    border: isActives ? '1px solid #000' : '',
                    backgroundColor: isActives ? 'transparent' : '',
                    color: isActives ? '#000' : ''
                    }}
                    onClick={s} variant="primaty">
                  Small
                </dd>
                <dd className="talla" style={{
                    border: isActivem ? '1px solid #000' : '',
                    backgroundColor: isActivem ? 'transparent' : '',
                    color: isActivem ? '#000' : ''
                    }}
                    onClick={m} variant="primaty">
                  Medium
                </dd>
                <dd className="talla" style={{
                    border: isActivel ? '1px solid #000' : '',
                    backgroundColor: isActivel ? 'transparent' : '',
                    color: isActivel ? '#000' : ''
                    }}
                    onClick={l} variant="primaty">
                  Large
                </dd></div>
                <dd className="talla" style={{
                    border: isActivexl ? '1px solid #000' : '',
                    backgroundColor: isActivexl ? 'transparent' : '',
                    color: isActivexl ? '#000' : ''
                    }}
                    onClick={xl} variant="primaty">
                  Extra Large
                </dd>
                <dd className="talla" style={{
                    border: isActivexxl ? '1px solid #000' : '',
                    backgroundColor: isActivexxl ? 'transparent' : '',
                    color: isActivexxl ? '#000' : ''
                    }}
                    onClick={xxl} variant="primaty">
                  Extra Extra LARGE
                </dd>
              </dl>
            </li>
            <li>
              <div className="add">
                Add to basket
              </div>
            </li>
            <li className="stock">in stock</li>
          </ul>
          <div className="code">
            Product Code:
            <p>780833419A</p>
          </div>
          <div className="descrip">
            <p>SAND hoodie featuring the killers logo on the front and Joshua tree photo on the back</p>
          </div>
        </div>
        </div>
    )
}
export default contenido;