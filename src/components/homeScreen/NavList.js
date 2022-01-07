import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavList.css'

function NavList() {
    const navigate = useNavigate()

    return (
        <div className="navList">
            <ul className="navListMobile" >
                    <li
                        onClick={() => navigate('/')}
                        className="navListMobile__item"
                    >
                        Home
                    </li>
                    <li className="navListMobile__item">TV Shows</li>
                    <li className="navListMobile__item">Movies</li>
                    <li className="navListMobile__item">New & Popular</li>
                    <li className="navListMobile__item">My List</li>
                </ul>
        </div>
    )
}

export default NavList
