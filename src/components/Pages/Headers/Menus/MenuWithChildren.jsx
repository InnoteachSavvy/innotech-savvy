import React from 'react'
import { Link } from 'react-router-dom'

const MenuWithChildren = ({ main_menu_name, main_menu_link, sub_menus_array }) => {

    return (
        <>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to={`/${main_menu_link}`} data-bs-toggle="dropdown" aria-expanded="false">
                    {main_menu_name}
                </Link>
                <ul className="dropdown-menu">
                    {
                        sub_menus_array.map((menu) => (
                            <>
                                <li><Link className="dropdown-item" to={`/${menu.link}`}>{menu.name}</Link></li>
                            </>
                        ))

                    }                    
                </ul>
            </li>
        </>
    )
}

export default MenuWithChildren
