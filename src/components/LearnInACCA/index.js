import {BsCircleFill} from 'react-icons/bs'

import './index.css'

const LearnInACCA = () => (
    <div>
        <h1 className='wcu-head'>What will you Learn in ACCA?</h1>
        <div className='el-para-card'>
            <p className='el-para-1'></p>
        </div>
        <div className='la-container'>
            <div className='la-card-1'>
                <div className='la-inner-card-1'>
                    <h1 className='la-head-1'>Knowledge Level</h1>
                </div>
                <ul className='la-list-cont'>
                        <li>
                            <div className='li-item-cont'>
                                <BsCircleFill className='circle-icon' />
                                <p className='item-1-cont-para'>Business and Technology(BT)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont'>
                                <BsCircleFill className='circle-icon' />
                                <p className='item-1-cont-para'>Management Accounting (MA)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont'>
                                <BsCircleFill className='circle-icon' />
                                <p className='item-1-cont-para'>Financial Accounting (FA)</p>
                            </div>
                        </li>
                </ul>
                <div className='la-last-cont'>
                        <p className='la-last-para-1'>3 papers</p>
                </div>
            </div>
            <div className='la-card-1 la-2'>
                <div className='la-inner-card-1'>
                    <h1 className='la-head-1'>Skill Level</h1>
                </div>
                <ul className='la-list-cont'>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Corporate and Business Law (LW)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Performance Management (PM)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Taxation(TX)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Financial Reporting (FR)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Audit and Assurance (AA)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Financial Management (FM)</p>
                            </div>
                        </li>
                </ul>
                <div className='la-last-cont la-last-cont-2'>
                        <p className='la-last-para-1'>6 papers</p>
                </div>
            </div>
            <div className='la-card-1 la-3'>
                <div className='la-inner-card-1'>
                    <h1 className='la-head-1'>Professional Level</h1>
                </div>
                <h1 className='la-head-2'>Compulsory</h1>
                <ul className='la-list-cont'>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>SBL - Strategic Business Leader</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>SBR - Strategic Business Reporting</p>
                            </div>
                        </li>
                </ul>
                <h1 className='la-head-2 la-head-3'>Two out of the following</h1>
                <ul className='la-list-cont'>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Advanced Financial Management (AFM)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Advanced Performance Management (APM)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Advanced Taxation (ATX)</p>
                            </div>
                        </li>
                        <li>
                            <div className='li-item-cont li-item-2'>
                                <BsCircleFill className='circle-icon' />
                                <p>Advanced Audit and Assurance (AAA)</p>
                            </div>
                        </li>
                        
                </ul>
                <div className='la-last-cont la-last-cont-3'>
                        <p className='la-last-para-1'>4 papers</p>
                </div>
            </div>
        </div>
    </div>
)

export default LearnInACCA