import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="user">
                <img className="profilepic" src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0" alt="This is the profile picture" />
                <div className="details">
                    <div>username</div>
                    <div>email</div>
                </div>
            </div>
            <div className="navbar-items">
                <li>
                    <i class="fa-solid fa-house-chimney"></i>
                    Home
                </li>
                <li>
                    <i class="fa-solid fa-user"></i>
                    Profile
                </li>
                <li>
                    <i class="fa-solid fa-comments"></i>
                    Feed
                </li>
            </div>
            <div className="invitation"></div>
        </div>
    )
}

export default Navbar