import React, { useEffect, useState } from 'react'
import './basicInfo.css'

export default function BasicInfo() {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    number: '',
    email: '',
    course: '',
  })
  const [data, setData] = useState([])


  // storing and retrieving the data with LocalStorage

  useEffect(() => {
    const storedData = localStorage.getItem('courseData')
    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('courseData', JSON.stringify(data))
  }, [data])

  // form handling

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // img handling

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0]
    const imageUrl = URL.createObjectURL(selectedImage)

    setFormData((prevData) => ({
      ...prevData,
      image: imageUrl,
    }))
  }

  // submitting the form

  const handleSubmit = (event) => {
    event.preventDefault()

    const id = Date.now()
    const userData = {
      ...formData,
      id,
    }
    setData([...data, userData])
    setFormData({
      image: '',
      name: '',
      number: '',
      email: '',
      course: '',
    })
    alert("Data is stored in your localStorage , don't forget to remove it manually !!!!")
  }


  return (
    <div className="basic_info_section">
      <h2>Basic Information</h2>
      <form className="basic_info_form" onSubmit={handleSubmit} >
        <div className="image_container">
          <div className="form_group">
            <label>Choose Profile :</label>
            <div>
              {formData.image && (
                <img
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                  }}
                  src={formData.image}
                  alt="Selected"
                />
              )}
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <div className="inputs">
          <div className="form_group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_group">
            <label>Number:</label>
            <input
              type="tel"
              name="number"
              placeholder="Enter Your Number"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form_group">
            <label>Course:</label>
            <input
              type="text"
              name="course"
              placeholder="Enter Your Course"
              value={formData.course}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="form_submit">
          Submit
        </button>
      </form>
    </div>
  )
}
