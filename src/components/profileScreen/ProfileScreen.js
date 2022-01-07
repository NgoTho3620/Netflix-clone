import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Nav from '../homeScreen/Nav'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <p>Renewal date: 04/03/2022</p>
                            <div className="profileScreen__subscribe">
                                <div className="subscribe_des">
                                    <h4>Netflix Basic</h4>
                                    <p>720p</p>
                                </div>
                                <div className="subscribe_btn">Subscribe</div>
                            </div>
                            <div className="profileScreen__subscribe">
                                <div className="subscribe_des">
                                    <h4>Netflix Standard</h4>
                                    <p>1080p</p>
                                </div>
                                <div className="subscribe_btn">Subscribe</div>
                            </div>
                            <div className="profileScreen__subscribe">
                                <div className="subscribe_des">
                                    <h4>Netflix Premium</h4>
                                    <p>4K+HDR</p>
                                </div>
                                <div className="subscribe_btn">Subscribe</div>
                            </div>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
