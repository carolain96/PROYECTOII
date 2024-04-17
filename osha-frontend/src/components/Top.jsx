import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import i18n from '../config/i18next.config';


function Top(){

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className="px-4 py-3 flex flex-row gap-4 bg-primary items-center">
      
      {/* Social Share */}
      <div className="">
        <div className="flex gap-1">
          <span className="bg-green p-1 rounded-lg border border-white">
            <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp">
              <FaWhatsapp color="white" />
            </a>
          </span>
          <span className="bg-telegram p-1 rounded-lg border border-white">
            <a href="https://t.me/Oshainstitute" target="_blank" title="Telegram">
              <FaTelegramPlane color="white" />
            </a>
          </span>
          <span className="bg-facebook p-1 rounded-lg border border-white">
            <a href="https://www.facebook.com/OSHAINSTITUTE" target="_blank" title="Facebook">
              <FaFacebookF color="white" />
            </a>
          </span>
          <span className="bg-linkedin p-1 rounded-lg border border-white">
            <a href="https://www.linkedin.com/company/occupationalsafetyhealthadministration" target="_blank" title="LinkedIn">
              <FaLinkedin color="white" />
            </a>
          </span>
          <span className="bg-twitter p-1 rounded-lg border border-white">
            <a href="https://twitter.com/Oshainst?t=PJGZ6VMgSFrA1Vo0bVGoIQ&amp;s=09" target="_blank" title="Twitter">
              <FaTwitter color="white" />
            </a>
          </span>
          <span className="bg-instagram p-1 rounded-lg border border-white">
            <a href="https://instagram.com/osha.institute?igshid=MTIzZWQxMDU=" target="_blank" title="Instagram">
              <FaInstagram color="white" />
            </a>
          </span>
        </div>
      </div>
      
      {/* Contacto */}
      <div className="w-2/4">
        <ul>
          <li>            
            <a href="" className="flex flex-row gap-1 items-center text-sm">
              <HiOutlineMail color='white' />
              <span className="text-white">info@osha.es</span>
            </a>
          </li>
        </ul>          
      </div>
      
      {/* Aula virtual */}
      <div className="w-1/4">
        <span className="flex">
          <Link to="/login" className="flex flex-row gap-2 py-1 px-3 rounded-lg border border-white justify-center items-center ">
            <PiStudentFill color='white'/>
            <span className="text-white text-sm">Aula virtual</span>
          </Link>
        </span>
      </div>     
      
      {/* Lenguaje */}
      <div class="">
        <button class="flex flex-row gap-2 items-center" type="button">
          <GrLanguage color="white"/>
          <span className="text-white text-sm">Lenguaje</span>
        </button>
        <ul class="">
          <li id="es">
            <a href="#" className="flex flex-row gap-1 items-center">
                <i><img className="w-4"
                    alt="United States"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
                </i>Español
              </a>
          </li>
          <li id="en" className="">
              <a href="#" className="flex flex-row gap-1 items-center">
                <i><img className="w-4"
                  alt="United States"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
                </i>English</a>
          </li>
        </ul>
      </div>
      <div className="w-1/4 flex justify-end">
        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <ul>
          <li>
            <a href="" className="flex flex-row gap-1 items-center text-sm">
              <GrLanguage color="white"/>
              <span className="text-white">Lenguaje</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Top