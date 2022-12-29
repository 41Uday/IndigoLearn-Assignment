import { useState } from 'react'

import {Modal, Button} from 'react-bootstrap'

import {BsEmojiLaughingFill,BsShareFill} from 'react-icons/bs'

import {MdOutlineMenuBook,MdOndemandVideo,MdGroup} from 'react-icons/md'

import './index.css' 

const qualificationArray = [{id:1,value: "CA"},{id:2,value: "Bcom"},{id:3,value: "CS"},{id:4,value: "CMA"},{id:5,value: "Other"}]

const levelsArray = [{id:1,value: 'ACCA Level I'},{id:2,value: 'ACCA Level II'},{id:3,value: 'ACCA Level III'}]

const BecomeACCA = () => {

    const [mobileNumber,setMobileNumber] = useState("")
    const [email,setEmail] = useState("")
    const [qualification,setQualification] = useState('')
    const [level,setLevel] = useState('')
    const [showValue,setShowValue] = useState(false)

    const numberChange = event => {
        setMobileNumber(event.target.value)
    }

    const emailChange = event => {
        setEmail(event.target.value)
    }

    const qualificationChange = event => {
        setQualification(event.target.value)
    }

    const levelChange = event => {
        setLevel(event.target.value)
    }

    const requestButton = () => {
        const res = email.endsWith("@gmail.com")
        if (mobileNumber === "")   {
                alert("fill Mobile Number")
        } else if (res === false) {
                alert('provide valid email')
        } else if (qualification === "") {
               alert("")
        } else if (level === "") {
            alert("")
        } else {
            console.log("succcess")
            setShowValue(true)
        }
    }

    const closeButton = () => {
        setShowValue(false)
    }

    return (
        <>
    <div className='ba-container'>
        <div>
            <h1 className='ba-head'>Become ACCA in 18 months</h1>
            <p className='ba-para'>Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed
                in top MNCs & Big4s. Begin ACCA prep with 1FIN now.
            </p>
            <div className='ba-img-cont'>
                <img src='https://il-app.s3.ap-south-1.amazonaws.com/images/acca_first_panel.jpg' alt='img' className='ba-img' />
            </div>
            
            <div className='ba-inner-card-1'> 
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <BsEmojiLaughingFill className='ba-icon-card' />
                            <p className='ba-last-para-card'>Registered Users</p>
                    </div>
                    <p className='ba-para-count'>248,755</p>
                </div>
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <MdOutlineMenuBook className='ba-icon-card' />
                            <p className='ba-last-para-card'>Courses Enrolled</p>
                    </div>
                    <p className='ba-para-count'>65,159</p>
                </div>
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <MdOndemandVideo className='ba-icon-card' />
                            <p className='ba-last-para-card'>Minutes Watched</p>
                    </div>
                    <p className='ba-para-count'>2,089,433,631</p>
                </div>
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <MdGroup className='ba-icon-card' />
                            <p className='ba-last-para-card'>Faculty</p>
                    </div>
                    <p className='ba-para-count'>8 Experts</p>
                </div>
            </div>
            <div className='ba-button-container'>
                    <button type="button" className='ba-button-1'>Download Brochure</button>
                    <button className='ba-silver-cont'>
                        <p className='silver-para'>SILVER LEARNING PARTNER</p>
                        <div className='ba-silver-acca'><p>ACCA</p></div>
                    </button>
            </div>
        </div>
        <div className='ba-card-2'>
            <h1 className='ba-card-2-head'>Aspiring to be an ACCA? Get in touch with us!</h1>
            <input type='tel' className='ba-card-2-input' placeholder='Phone Number*' onChange={numberChange} />
            <input type='email' className='ba-card-2-input' placeholder='Email ID' onChange={emailChange} />
            <select className='ba-dropdown-1 ba-dropdown-1-ex' onChange={qualificationChange}>
                <option value='' disabled selected hidden>Current Qualification</option>
                {qualificationArray.map(e => (
                    <option key={e.id} value={e.value}>{e.value}</option>
                ))}
            </select>
            <select className='ba-dropdown-1' onChange={levelChange}>
                <option value='' disabled selected hidden>Interested in</option>
                {levelsArray.map(e => (
                    <option key={e.id} value={e.value}>{e.value}</option>
                ))}
            </select>
            <button type="button" className='request-button' onClick={requestButton}>Request Call Back</button>
        </div>
        <div className='ba-inner-card-1 ba-sc'> 
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <BsEmojiLaughingFill className='ba-icon-card' />
                            <p className='ba-last-para-card'>Registered Users</p>
                    </div>
                    <p className='ba-para-count'>248,755</p>
                </div>
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <MdOutlineMenuBook className='ba-icon-card' />
                            <p className='ba-last-para-card'>Courses Enrolled</p>
                    </div>
                    <p className='ba-para-count'>65,159</p>
                </div>
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <MdOndemandVideo className='ba-icon-card' />
                            <p className='ba-last-para-card'>Minutes Watched</p>
                    </div>
                    <p className='ba-para-count'>2,089,433,631</p>
                </div>
                <div className='ba-card-1-in-1'>
                    <div className='ba-card-one-1-in-2'>
                            <MdGroup className='ba-icon-card' />
                            <p className='ba-last-para-card'>Faculty</p>
                    </div>
                    <p className='ba-para-count'>8 Experts</p>
                </div>
            </div>
            <div className='ba-button-container ba-sc-butt'>
                    <button type="button" className='ba-button-1'>Download Brochure</button>
                    <button className='ba-silver-cont'>
                        <p className='silver-para'>SILVER LEARNING PARTNER</p>
                        <div className='ba-silver-acca'><p>ACCA</p></div>
                    </button>
            </div>
            <div className='share-cont'>
                    <BsShareFill className='share-icon' />
                    <p className='ba-para-share'>Share</p>
            </div>
    </div>

    <Modal show={showValue}>
            <Modal.Header>
                Call Back Status
            </Modal.Header>
            <Modal.Body>
                <p className='success-para'>Success</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={closeButton}>Close</Button>
            </Modal.Footer>
        </Modal>

    </>
)
}

export default BecomeACCA