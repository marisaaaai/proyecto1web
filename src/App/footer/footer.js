import "./footer.css";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoApple } from "react-icons/io";
import { ImSpotify } from "react-icons/im";
import { TfiTwitterAlt, TfiInstagram,TfiYoutube } from "react-icons/tfi";


function footer(){

    return(
        <nav class="containerFoot background">
          {/* <button className="support">
            kjlkjlkjlkj
          </button> */}
          <div class="topbarbaj">
            <ul class="nav-listicons">
              <li><a href="#courses"><MdOutlineFacebook size={25}/> </a></li>
              <li><a href="#tutorials"><TfiTwitterAlt size={25}/></a></li>
              <li><a href="#jobs"><TfiInstagram size={25}/></a></li>
              <li><a href="#jobs"><TfiYoutube size={25}/></a></li>
              <li><a href="#jobs"><IoLogoApple size={25}/></a></li>
              <li><a href="#jobs"><ImSpotify size={25}/></a></li>
            </ul>
          </div>
          <div class="botbarbaj">
            <ul class="nav-list">
              <li><a href="#courses">HELP & SUPPORT</a></li>
              <li><a href="#tutorials">DELIVERY</a></li>
              <li><a href="#jobs">TERMS & CONDITIONS</a></li>
              <li><a href="#jobs">PRIVACY POLICY</a></li>
            </ul>
          </div>
			</nav>
    )
}

export default footer;