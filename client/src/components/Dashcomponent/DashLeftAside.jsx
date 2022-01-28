import React from "react";
import 'components/Dashcomponent/style.scss';
import { FaEthereum } from "react-icons/fa";
import {RiFileUserLine } from "react-icons/ri";
import { FiLogOut, FiUser, FiZap } from "react-icons/fi";
import { MdHomeMax } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import logo from 'assets/logo.svg'
import { Button } from "components/Button";
import { Marged } from "components/Marged";
import { logout } from "Actions/auth";
import { Link } from "react-router-dom";

export const handleLogout = () => {
  logout()
  window.location.reload()
}
export const DashLeftAside = ({storedUserName, setShowActivity, setShowContact, setShowTransfert, setShowBuyCrypto}) => {
  const backToHomeDash = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
  }
  const setActivity = () => {
    setShowActivity(true)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
  }
  const setContact = () => {
    setShowActivity(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
    setShowContact(true)
  } 
  const setTransfert = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowBuyCrypto(false)
    setShowTransfert(true)
  }
  const setBuyCrypto = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(true)
  }
  
  
  
  return(
      <div id="container-dashboard" height="100vh">
          <div className="left-content" >
           
            <aside className="aside-left-content">
              <div className="h-left-content">
              <img className="logo" src={logo} alt="cube blanc"  onClick={()=> backToHomeDash()}/>
              </div>
              <nav className="nav-dashboard">
                <ul className="ul-sidenav ">
                  <a href="#container-dashboard">
                    <li className="li-sidenav" onClick={()=> backToHomeDash()}>
                      <div className="li-sidenav-icon">
                        <MdHomeMax className="li-icon-img"/>
                      </div>
                        <p className="text-sidenave">Portfeuille</p>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setContact()}>
                        <div className="li-sidenav-icon">
                          <RiFileUserLine className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Contact</p>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setBuyCrypto()}>
                      <div className="li-sidenav-icon">
                        <FaEthereum className="li-icon-img"/>
                      </div>
                      <p className="text-sidenave">Crypto</p>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setTransfert()}>
                      <div className="li-sidenav-icon">
                        <BiTransferAlt className="li-icon-img"/>
                      </div>
                      <p className="text-sidenave">Transfert</p>
                      </li> 
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setActivity()}>
                      <div className="li-sidenav-icon">
                        <FiZap className="li-icon-img"/>
                      </div>
                      <p className="text-sidenave">Activité</p>
                    </li>
                  </a>
                </ul>
                <div className="box-signout-profil">
                      <Link to="/profil" className="link-profil">
                        <div>
                          <Button dash_option bg='#3e52fe'>
                            <FiUser/>
                          </Button>
                        </div>
                      </Link>
                      <Marged bottom='10px'/>
                      <a href="#app">
                        <Button dash_option bg='#161616' onClick={()=> handleLogout()}>
                          <FiLogOut/>
                        </Button>
                      </a>
                    </div>
              </nav>
            </aside>
          </div>
          <Navres
            backToHomeDash={backToHomeDash}
            setBuyCrypto={setBuyCrypto}
            setContact={setContact}
            setTransfert={setTransfert}
            setActivity={setActivity}
            handleLogout={handleLogout}
          />
        </div>
  )
}

export const Navres = ({backToHomeDash, setBuyCrypto, setContact, setActivity, setTransfert, handleLogout}) => {
  return(
    <div id="aside-container">
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setContact()}>
                        <div className="li-sidenav-icon">
                          <RiFileUserLine className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Contact</p>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setBuyCrypto()}>
                      <div className="li-sidenav-icon">
                        <FaEthereum className="li-icon-img"/>
                      </div>
                      <p className="text-sidenave">Crypto</p>
                    </li>
                  </a>
                  <a href="#container-dashboard">
                    <li className="li-sidenav" onClick={()=> backToHomeDash()}>
                      <div className="li-sidenav-icon">
                        <MdHomeMax className="li-icon-img"/>
                      </div>
                        <p className="text-sidenave">Portfeuille</p>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setTransfert()}>
                      <div className="li-sidenav-icon">
                        <BiTransferAlt className="li-icon-img"/>
                      </div>
                      <p className="text-sidenave">Transfert</p>
                      </li> 
                  </a>
      <a href="#app">
          <li className="li-sidenav" onClick={()=> setActivity()}>
              <div className="li-sidenav-icon">
                  <FiZap className="li-icon-img"/>
              </div>
               <p className="text-sidenave">Activité</p>
          </li>
     </a>
    </div>
  )
}