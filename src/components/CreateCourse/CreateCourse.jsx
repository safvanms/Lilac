import React, { useState } from 'react'
import './createCourse.css'
import { AiFillFileText, AiTwotoneSave } from 'react-icons/ai'
import { FaFileContract, FaMoneyBillAlt, FaTrophy } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import BasicInfo from '../BasicInfo/BasicInfo'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'

export default function CreateCourse() {

     const [basicPage,setBasicPage]=useState(true)

  const getBasicPage = () => {
     setBasicPage(true)
  }

  const getAdditionalPage = () => {
     setBasicPage(false)
  }

  return (
    <div className="creating_section">
      <div className="create_container">
        <div className="create_header">
          <div>
            <h1>Course Creation</h1>
            <span className="page_count"> {basicPage?1:2} of 4</span>
          </div>

          <div>

            <div className="save_draft">
              <div>
                <AiTwotoneSave size={16} />
              </div>
              <div>Save as Draft</div>
            </div>

            <span className="course_close_button">
              <GrClose />
            </span>
          </div>
        </div>

        <div className="pages_icon_section">
          <div className="icons_container">
            <div className="icon_cover">
              <div className="icon_bg green_bg" onClick={getBasicPage}>
                <AiFillFileText />
              </div>
              <p className="icon_name green_name">Basic Information</p>
            </div>
            <span className="line"></span>

            <div className="icon_cover" onClick={getAdditionalPage} >
              <div className="icon_bg blue_bg" >
                <FaFileContract />
              </div>
              <p className="icon_name blue_name">Additional Information</p>
            </div>
            <span className="line"></span>

            <div className="icon_cover">
              <div className="icon_bg grey_bg">
                <FaTrophy />
              </div>
              <p className="icon_name">Eligibility and syllabus</p>
            </div>
            <span className="line"></span>

            <div className="icon_cover">
              <div className="icon_bg grey_bg">
                <FaMoneyBillAlt />
              </div>
              <p className="icon_name">Fee & Scholarship</p>
            </div>
          </div>
        </div>

        {/* rendering the form pages here */}

     { basicPage ?  <BasicInfo /> : <AdditionalInfo/>}

      </div>
    </div>
  )
}
