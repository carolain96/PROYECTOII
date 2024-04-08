import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from '../pathMenu/MenuItemsPath';
import '../styles/SideBarMenu.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';


function SideBarMenu({ children }) {

  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("isOpen")) || false
  );
  const [activeItemIndex, setActiveItemIndex] = useState(
    JSON.parse(localStorage.getItem("activeItemIndex")) || 0
  );

  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const handleItemClick = (index) => setActiveItemIndex(index);

  useEffect(() => {
    localStorage.setItem("activeItemIndex", JSON.stringify(activeItemIndex));
  }, [activeItemIndex]);

  useEffect(() => {
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
  }, [isOpen]);


  return (
    <div className='container_sidebar'>
      <div style={isOpen ? { width: "210px"} : { width: "100px", padding: "13px 5px", gap: 5}} className="sidebar">
        <div className="burger" style={{ justifyContent: isOpen ? "" : "center" }}>
        <IoMenu  onClick={toggle} />
        </div>
        <div className="user">
          <div className="user-container" style={{
            border: isOpen ? "2px solid #fff" : "",
            justifyContent: isOpen ? "" : "center",
          }}>
            <div className="userIconContainer">
              <FaRegUserCircle />
            </div>
            <div
                className="userData"
                style={{
                    display: isOpen ? "block" : "none",
                }}
            >
                <p className="text">JUAN JOSE PEDRITO</p>
                <p className="text">Administrador</p>
            </div>
          </div>
        </div>               
        <div className='contenedor-mc'
            style={{ width: isOpen ? "" : "100px", alignItems: isOpen ? "stretch" : "center"}}
        >
          <p className='hsub'>Módulos</p>
            {
              menuItems().map((item, index) => (
                <React.Fragment key={item.name}>
                  {index === 6 && <p className="hsub">Componentes</p>}
                    <SidebarItem
                      item={item}
                      isOpen={isOpen}
                      active={index === activeItemIndex}
                      onClick={() => handleItemClick(index)}
                    />
                </React.Fragment>
              ))
            }                                        
        </div>             
        <div className="footerSideBar"
            style={{justifyContent: isOpen ? "end" : "center",}}
        >
          <div className="logout_container">
            <p className='text' style={{display: isOpen ? "block" : "none",}}>Cerrar Sesión</p>
            <FaRegUserCircle />
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
    )
};

function SidebarItem({ item, isOpen, active, onClick }) {
    const { path, iconWhite, name } = item;
    const isComponent = item.isComponent || false;
  
    return (
      <NavLink
        to={path}
        className={`link-item ${isOpen ? "" : "comprimido"} ${active ? "active" : ""}`}
        onClick={onClick}
        style={{ justifyContent: isOpen ? "" : "center" }}
        key={name}
      >
        <div className={`${isOpen ? isComponent ? "iconCom" : "iconMod" : isComponent ? "iconComComp" : "iconModComp"}`}>
          <IoMenu />
        </div>
        <p className={`${isOpen ? "text" : "textComp"}`}>{name}</p>
      </NavLink>
    );
  }

export default SideBarMenu;