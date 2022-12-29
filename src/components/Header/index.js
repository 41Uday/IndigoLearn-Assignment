import {VscThreeBars} from 'react-icons/vsc'

import {HiUserCircle} from 'react-icons/hi'

import {IoMdCart} from 'react-icons/io'

import './index.css'

const Header = () => (
    <nav className='header-container'>
        <div className='header-card-1'>
            <VscThreeBars className='threebar-icon' />
            <h1 className='header-head'>IndigoLearn</h1>
        </div>
        <div className='header-card-1'>
            <ul className='header-list'>
                <li className='header-list-item'>BUY COURSES</li>
                <li className='header-list-item'>BUY BOOKS</li>
                <li className='header-list-item'>PROGRAMS</li>
                <li className='header-list-item'>FREE RESOURCES</li>
            </ul>
        </div>
        <div className='header-card-3'>
            <HiUserCircle className='user-icon' />
            <p className='header-text'>Log In/Sign Up</p>
        </div>
        <div className='header-small-screen-container'>
            <div className='header-small-card-1'>
                <VscThreeBars className='threebar-icon' />
                <h1 className='header-head'>IndigoLearn</h1>
            </div>
            
        </div>
        <IoMdCart className='cart-icon' />
    </nav>
)

export default Header