import "./header.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


import React, { Fragment, useEffect, useState } from 'react';


function header(currency){
    console.log(currency)
    const handleCardClick = (index) => {
        currency= index;
        console.log(currency)
    };

    const [checked, setChecked] = useState(false);
    const [currencyValue, setCurencyValue] = useState(currency);

    const currencies = [
        { name: '£GBP', value: 'GBP' },
        { name: '$USD', value: 'USD' },
        { name: '€EUR', value: 'EUR' },
    ];
   

    return(

        <nav class="container background">
            <div class="topbar">
                <div className="currency">
                <ButtonGroup>
                    {currencies.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={currencyValue === radio.value}
                        onChange={(e) => setCurencyValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
                
                    
                    {/* <Fragment>
                        {
                            currency === "EUR"&&(
                                <h3 class="typeofcurrencySelected" onClick={handleCardClick("EUR")}>
                                    €EUR
                                </h3>

                            )
                        }
                        {
                            currency != "EUR"&&(
                                <h3 class="typeofcurrency" onClick={handleCardClick("EUR")}>
                                    €EUR
                                </h3>
                            )
                        }
                    </Fragment> */}

                </div>
                <div className="logo">
                    <h1>
                        THE KILLERS
                    </h1>

                </div>
                <div className="account">
                    <div>
                        user
                    </div>
                    <div>
                        bolsa
                    </div>

                </div>
            </div>
            
                    {/* <div class="leftnav">
                        hpkpojpj
                    </div>


                    <div class="centernav">
                    hpkpojpj
                    </div>

                    <div class="rightnav">
                    hpkpojpj
                    </div>

                <nav class="navbar">
                <li class="nav-list">
                    <li><a href="#MUSIC">MUSIC</a></li>
                    <li><a href="#MERCH">MERCH</a></li>
                    <li><a href="#NEWSLETTER">NEWSLETTER</a></li>
                </li>
                </nav> */}

				
		</nav>
    )
}

export default header