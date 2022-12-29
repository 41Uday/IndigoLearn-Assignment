import {AiOutlineCheck} from 'react-icons/ai'

import './index.css'

const Eligibility = () => (
    <div>
        <h1 className='wcu-head'>ACCA - Eligibility</h1>
        <div className='el-para-card'>
            <p className='el-para-1'></p>
        </div>
        <div className='el-container'>
            <h1 className='el-head'>To appear for the ACCA course examination a candidate should have</h1>
            <div className='el-card-2'>
                <AiOutlineCheck className='check-icon-2' />
                <p className='el-last-para'>Qualified the 10+2 exams</p>
            </div>
            <div className='el-card-2-1'>
                <AiOutlineCheck className='check-icon' />
                <p className='el-last-para'>An aggregate of 65% in Mathematics / Accounts and English and a minimumof 50% in other subjects</p>
            </div>
            <div className='el-card-2-1'>
                <AiOutlineCheck className='check-icon' />
                <p className='el-last-para'>Others can stil register for the ACCA course with Foundation in Accountancy (FIA)</p>
            </div>
        </div>
    </div>
)

export default Eligibility