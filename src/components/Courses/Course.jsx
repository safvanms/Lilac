import React, { useEffect, useState } from 'react'
import './course.css'
import { useNavigate } from 'react-router-dom'
import { FaGraduationCap, FaPhoneAlt, FaPencilAlt } from 'react-icons/fa'
import { IoMdMailOpen } from 'react-icons/io'

export default function Course() {
  const [storedUserData, setStoredUserData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const storedData = localStorage.getItem('courseData')
    if (storedData) {
      setStoredUserData(JSON.parse(storedData))
    }
  }, [])

  const addCourse = () => {
    navigate('/create-course')
  }

  return (
    <div className="course_section">
      <div className="course_container">
        <div className="course_header">
          <h2>Courses</h2>
          <div onClick={addCourse}>Create Course</div>
        </div>

          <div className="courses_card_container">
        {storedUserData.length !== 0 ?storedUserData.map((item) => (
            <div className="course_card" key={item.id}>
              <div className="card_header">
                <img
                  src={
                    !item.image || item.image === undefined
                      ? 'https://picsum.photos/200/200'
                      : item.image
                  }
                  alt="user"
                />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    <p style={{ whiteSpace: 'nowrap' }}>{item.name}</p>
                  </div>
                  <div style={{ color: 'grey' }}>ID:{item.id}</div>
                </div>

                {item.id % 2 === 0 ? (
                  <div className="edit_course_option">
                    <FaPencilAlt />
                  </div>
                ) : (
                  <div className="new_course_option">
                    <p>New</p>
                  </div>
                )}
              </div>
              <div className="card_items">
                <div>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span>{item.number}</span>
                </div>

                <div>
                  <span>
                    <IoMdMailOpen size={15} />
                  </span>
                  <span>{item.email}</span>
                </div>

                <div>
                  <span>
                    <FaGraduationCap size={14} />
                  </span>
                  <span>{item.course}</span>
                </div>
              </div>

              <div className="card_footer">
                <div className="card_left_footer">
                  {item.id % 2 === 0 ? (
                    <p>Add Your Rest Documents</p>
                  ) : (
                    <p>Applied</p>
                  )}
                </div>

                {item.id % 2 === 0 ? (
                  <div className="card_right_footer">
                    <img src="https://picsum.photos/300/300" alt="" />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            )): "Create new Course"}
          </div>
      </div>
    </div>
  )
}
