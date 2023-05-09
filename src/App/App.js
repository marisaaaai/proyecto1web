import "./app.css"
import "./header/header.css"

import { TfiBag} from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import Footer from "./footer/footer";
import Contenido from "./contenido/contenido";





import React, { Fragment, useEffect, useState } from 'react';




function App() {
	


    const [currencyValue, setCurencyValue] = useState("USD");
    const [isActiveG, setIsActiveG] = useState(false);
    const [isActiveU, setIsActiveU] = useState(false);
    const [isActiveE, setIsActiveE] = useState(false);
    const [valor, setValor] = useState("$91.00");
    const [valorEnv, setValorEnv] = useState("$33.03");




    const GBP = () =>{
      setCurencyValue((currencyValue) => "GBP");
      setValor((valor) => "£70.00");
      const valorr = "£70.00"; 
      setValorEnv((valorEnv) => "£21.29");
      setIsActiveG(current => !current);
      setIsActiveU(false);
      setIsActiveE(false);
    }

    const USD = () =>{
      setCurencyValue((currencyValue) => "USD");
      setValor((valor) => "$91.00");
      setValorEnv((valorEnv) => "$33.03");
      setIsActiveU(current => !current);
      setIsActiveG(false);
      setIsActiveE(false);
    }

    const EUR = () =>{
      setCurencyValue((currencyValue) => "EUR");
      setValor((valor) => "€84.00");
      setValorEnv((valorEnv) => "€25.12");
      setIsActiveE(current => !current);
      setIsActiveU(false);
      setIsActiveG(false);
    }

    const s = () =>{
      setIsActives(current => !current);
    }

    console.log(currencyValue)

  return (
		<div style={{ backgroundImage: `url(https://dvfnvgxhycwzf.cloudfront.net/media/ShopDesignSplit4-shopStylesheet/value/.fly5ryQY/ShopDesignSplit4-shopStylesheet-34936.jpg?t=7d355eb650c1ea051ae7)` }}>
      <nav class="container background">
        <div class="topbar">
          <div className="currency">
            <h3 className= "typeofcurrency" style={{
              border: isActiveG ? '1px solid #fff' : '',
              }} 
              onClick={GBP} variant="primary">
              £GBP
            </h3>
            <h3 className= "typeofcurrency" style={{
              border: isActiveU ? '1px solid #fff' : '',
              }}
            onClick={USD} variant="primaty">
              $USD
            </h3>
            <h3 className= "typeofcurrency" style={{
              border: isActiveE ? '1px solid #fff' : '',
              }}
              onClick={EUR} variant="primaty">
                €EUR
            </h3>
            </div>
              <div className="logo">
                <img src="https://dvfnvgxhycwzf.cloudfront.net/media/ShopDesignSplit4/logo/.fIEm39qX/ShopDesign-5502/Killers.png?t=29273d096315fe1cf496"></img>
              </div>
              <div className="account">
                <div className="icon">
                  <TfiUser size={35}/>
                </div>
              <div className="icon">
                  <TfiBag size={35} />
              </div>
            </div>
          </div>
        <div class="botbar">
          <ul class="nav-list">
            <li><a href="#courses">MUSIC</a></li>
            <li><a href="#tutorials">MERCH</a></li>
            <li><a href="#jobs">NEWSLETTER</a></li>
          </ul>
        </div>
      </nav>
      <Contenido 
        valor = {valor}
        valorEnv={valorEnv}
      />
      <div><Footer /></div>
		</div>
	)
}

export default App
