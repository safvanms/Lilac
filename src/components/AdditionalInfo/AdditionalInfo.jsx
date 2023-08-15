import React from 'react'
import './additionalInfo.css'
import ActionButton from '../actionButton/actionButton'
import { IoMdAdd } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export default function AdditionalInfo() {
  return (
    <div className="additional_info_section">
      <h2>Additional Information</h2>

      <div className="first_section">
        <div class="add_form_group">
          <label>Select Admission</label>
          <div>
            <select name="course">
              <option value="">Select admission</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
          </div>
        </div>

        <div class="add_form_group">
          <label>Select Service</label>
          <div>
            <select name="course">
              <option value="">Select service</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
          </div>
        </div>

        <div class="add_form_group">
          <label>Select Course affiliation</label>
          <div>
            <select name="course">
              <option value="">Select course affiliation</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
            <ActionButton background="lightBlue" icon={<IoMdAdd />} />
          </div>
        </div>

        <div class="add_form_group">
          <label>Select Entrance</label>
          <div>
            <select name="course">
              <option value="">Select Entrance</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
            <ActionButton background="lightBlue" icon={<IoMdAdd />} />
          </div>
        </div>

        <div class="add_form_group">
          <label>Select Documents</label>
          <div>
            <select name="course">
              <option value="">Select Documents</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
            <ActionButton background="lightBlue" icon={<IoMdAdd />} />
          </div>
        </div>

        <div class="add_form_group">
          <label>Select Specialization</label>
          <div>
            <select name="course">
              <option value="">Select specialization</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
            <ActionButton background="lightBlue" icon={<IoMdAdd />} />
          </div>
        </div>
      </div>

      <h2 style={{ margin: '10px 0' }}>Intakes</h2>

      <div className="second_form_container">
        <div className="second_section">
          <div className="second_form_left_sec">
            <ActionButton
              background="lightCoral"
              icon={<MdDelete color="darkRed" />}
            />
            <select name="course">
              <option value="">September</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
          </div>
          <div className="second_form_right_sec">
            <div>
              <input type="text" placeholder="1 year" />
              <ActionButton background="lightBlue" icon={<IoMdAdd />} />
              <ActionButton
                background="lightCoral"
                icon={<MdDelete color="darkRed" />}
              />
            </div>
            <div>
              <input type="text" placeholder="2 years" />
              <ActionButton background="lightBlue" icon={<IoMdAdd />} />
              <ActionButton
                background="lightCoral"
                icon={<MdDelete color="darkRed" />}
              />
            </div>
          </div>
        </div>
        <div className="add_row">
          <p>
            <IoMdAdd /> Add Row
          </p>
        </div>
      </div>

      <div className="third_form">
        <div className="third_form_header">
          <h3>Course Tag</h3>
          <div className="add_row">
            <p>
              <IoMdAdd /> New Course Tag
            </p>
          </div>
        </div>
        <div className="third_form_section">
          <div className="third_form_left">
            <label>Tag</label>
            <select name="course">
              <option value="">Select tag</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
          </div>
          <div className="third_form_right">
            <div>
              <label>Description</label>
              <input type="text" placeholder="Enter description" />
            </div>
            <ActionButton
              background="lightCoral"
              icon={<MdDelete color="darkRed" />}
            />
          </div>
        </div>
        <div className="add_row">
          <p>
            <IoMdAdd /> Add Row
          </p>
        </div>
      </div>
      <div className="page_control">
        <div className="prev">
          <BsArrowLeft /> <p>Prev</p>
        </div>
        <div className="next">
          <p>Next</p>
          <BsArrowRight />
        </div>
      </div>
    </div>
  )
}
