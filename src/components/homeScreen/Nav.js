import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import NavList from './NavList'

function Nav() {
    const [show, handleShow] = useState(false)
    const [showList, setShowList] = useState(false)

    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    const handleShowList = () => {
        if (showList) {
            setShowList(false)
        } else {
            setShowList(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    onClick={() => navigate('/')}
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <i onClick={handleShowList}className='bx bxs-chevron-down nav__icon'></i>

                {showList && <NavList />}

                <ul className="nav__list" >
                    <li
                        onClick={() => navigate('/')}
                        className="nav__item"
                    >
                        Home
                    </li>
                    <li className="nav__item">TV Shows</li>
                    <li className="nav__item">Movies</li>
                    <li className="nav__item">New & Popular</li>
                    <li className="nav__item">My List</li>
                </ul>
                <img
                    onClick={() => navigate('/profile')}
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav
