import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MenuWithNestedChildren = ({ main_menu_name, main_menu_link, sub_menus_array }) => {
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 991.98);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSubMenuClick = (index, e) => {
        if (isMobile) {
            e.preventDefault();
            e.stopPropagation();
            setOpenSubMenu(openSubMenu === index ? null : index);
        }
    };

    return (
        <>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to={`/${main_menu_link}`} data-bs-toggle="dropdown" aria-expanded="false">
                    {main_menu_name}
                </Link>
                <ul className="dropdown-menu">
                    {
                        sub_menus_array.map((menu, index) => (
                            <li key={index} className={`dropdown-submenu ${menu.sub_menus ? 'has-submenu' : ''}`}>
                                <Link 
                                    className="dropdown-item d-flex justify-content-between align-items-start" 
                                    to={`/${menu.link}`}
                                >
                                    <span className="menu-text">{menu.name}</span>
                                    {menu.sub_menus && (
                                        <button 
                                            type="button"
                                            className="submenu-toggle"
                                            onClick={(e) => handleSubMenuClick(index, e)}
                                        >
                                            {isMobile ? (openSubMenu === index ? '−' : '+') : '>'}
                                        </button>
                                    )}
                                </Link>
                                {menu.sub_menus && (
                                    <ul className={`dropdown-menu submenu ${openSubMenu === index ? 'show' : ''}`}>
                                        {menu.sub_menus.map((subMenu, subIndex) => (
                                            <li key={subIndex}>
                                                <Link className="dropdown-item" to={`/${subMenu.link}`}>
                                                    {subMenu.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))
                    }                    
                </ul>
            </li>
        </>
    )
}

export default MenuWithNestedChildren 