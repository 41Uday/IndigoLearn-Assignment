import {MdOutlineMenuBook,MdAlarmOn,MdLaptop} from 'react-icons/md'

import {BsCalendarCheck} from 'react-icons/bs'

import './index.css'

const WhyChooseUs = () => (
    <div>
        <h1 className='wcu-head'>Why Choose Us?</h1>
        <div className='el-para-card'>
            <p className='el-para-1'></p>
        </div>
        <div className='wcu-card-1'>
                <div className='wcu-card-1-in-1'>
                    <img src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1672138207/ca_concept_yuombb.png" className='wcu-bulb-img' alt="bulb_image" />
                    <h1 className='wcu-card-head-1'>Expert Faculty</h1>
                    <p className='scu-para-1'>Our Faculty are subject matter expertise with practical experience. They beleive in #studentFirst principle</p>
                </div>
                <div className='wcu-card-1-in-1'>
                    <img src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1672149455/ca_top_faculties_kevxqb.png" className='wcu-bulb-img' alt="bulb_image" />
                    <h1 className='wcu-card-head-1'>Complete Success Package</h1>
                    <p className='scu-para-1'>Leading Exam Prep Destination with Video classes. Lice sessions, Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests, Webinars.</p>
                </div>
                <div className='wcu-card-1-in-1'>
                    <img src="https://www.indigolearn.com/media/images/ca_unlimited_views.png" className='wcu-bulb-img' alt="bulb_image" />
                    <h1 className='wcu-card-head-1'>Placements</h1>
                    <p className='scu-para-1'>Our Faculty are subject matter expertise with practical experience. They beleive in #studentFirst principle</p>
                </div>
        </div>
        <div className='wcu-card-2'>
                <div className='wcu-card-2-in-1'>
                        <p className='wcu-last-para-1'>Levels</p>
                        <div className='wcu-card-2-in-1-1' >
                            <MdOutlineMenuBook className='wcu-icon' />
                            <p className='wcu-last-para-2'>Three (13 papers)</p>
                        </div>
                </div>
                <div className='wcu-card-2-in-1'>
                        <p className='wcu-last-para-1'>Duration</p>
                        <div className='wcu-card-2-in-1-1' >
                            <MdAlarmOn className='wcu-icon' />
                            <p className='wcu-last-para-2'>6-30 months</p>
                        </div>
                </div>
                <div className='wcu-card-2-in-1'>
                        <p className='wcu-last-para-1'>Exams</p>
                        <div className='wcu-card-2-in-1-1' >
                            <MdLaptop className='wcu-icon' />
                            <p className='wcu-last-para-2'>Quarterly(Online)</p>
                        </div>
                </div>
                <div className='wcu-card-2-in-1'>
                        <p className='wcu-last-para-1'>Excemptions</p>
                        <div className='wcu-card-2-in-1-1' >
                            <BsCalendarCheck className='wcu-icon' />
                            <p className='wcu-last-para-2'>Upto 9 papers</p>
                        </div>
                </div>
        </div>
    </div>
)

export default WhyChooseUs