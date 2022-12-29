import {useState} from 'react'

import {Modal, Button} from 'react-bootstrap'

import './index.css'

const qualificationArray = [{id:1,value: "CA"},{id:2,value: "Bcom"},{id:3,value: "CS"},{id:4,value: "CMA"},{id:5,value: "Other"}]

const levelsArray = [{id:1,value: 'ACCA Level I'},{id:2,value: 'ACCA Level II'},{id:3,value: 'ACCA Level III'}]



const ACCAJourney = () => {
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
               alert("Provide qualification")
        } else if (level === "") {
            alert("Provide Level")
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
        <div className='aj-container'>
                <div className='aj-card-1'>
                    <h1 className='ba-head aj-head'>Kick off your ACCA Prep journey with IndigoLearn</h1>
                    <div className='ba-img-cont'>
                        <img src='https://il-app.s3.ap-south-1.amazonaws.com/images/acca_first_panel.jpg' alt='img' className='ba-img' />
                    </div>
                    <p className='aj-para'>Sign-in and get instant access to our FREE Courses</p>
                    <button className='ba-silver-cont aj-butt'>
                        <p className='silver-para'>SILVER LEARNING PARTNER</p>
                        <div className='ba-silver-acca'><p>ACCA</p></div>
                    </button>
                </div>  
                <div className='ba-card-2 aj-card-2'>
                    <h1 className='ba-card-2-head aj-r-card-2-in-1'>Aspiring to be an ACCA? Get in touch with us!</h1>
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
                <button className='ba-silver-cont aj-butt aj-sc-butt'>
                        <p className='silver-para'>SILVER LEARNING PARTNER</p>
                        <div className='ba-silver-acca'><p>ACCA</p></div>
                    </button>
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

export default ACCAJourney