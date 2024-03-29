import {useState} from "react";
import axios from 'axios'
import './Scheduling.css'

const Scheduling = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone_number:"",
    customer_problem:"",
    appointment:"",
  })
// This function sends the data to the backend and clears input fields //
  const handleChange = (e) => {   
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }
// This function handles the dropdown menu and its selected option //
  const handleDropdownChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, customer_problem: value })
  };
// This function handles the data being sent to the backend //
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_SERVER}/submit`, formData)
      .then(response => {
          console.log("Appointment scheduled successfully", response.data);
          setFormData({
            name:"",
            email:"",
            phone_number:"",
            customer_problem:"",
            appointment:"",
      });
  })
    .catch(error => {
    console.error("Unable to make appointment", error);
    });
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 id="title-of-schedule" className="text-center mb-4">Schedule An Appointment</h2>
          <form id="sched-form" onSubmit={handleSubmit}>
            <div className="form-group">
          {/* This input field is for the customers name */}
              <label className="text-white">Name:</label>
                <input 
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
            </div>
            {/* This input field is for the customer email */}
            <div className="form-group">
              <label className="text-white">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
            </div>
            {/* This field is for the customers phone number */}
            <div className="form-group">
              <label className="text-white">Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
            </div>
      {/* This input field for customers issue and the dropdown menu */}
            <div className="form-group">
              <label className="text-white">Issue:</label>
                <select 
                  className="form-control"
                  onChange={handleDropdownChange}
                  value={formData.customer_problem}
                  name="customer_problem"
                  required
                >
                  <option value="" >Select an Issue</option>
                  <option value="Oil Change">Oil Change</option>
                  <option value="Air Filter Replacement">Air Filter Replacement</option>
                  <option value="Battery Replacement">Battery Replacement</option>
                  <option value="Brake Issues">Brake Issues</option>
                  <option value="Front & Rear Suspensions">Front & Rear Suspensions</option>
                  <option value="Tune-ups">Tune-ups</option>
                  <option value="Tire Rotations">Tire Rotations</option>
                  <option value="Check Fluids">Check Fluids</option>
                  <option value="Check Engine Light Diagnostics">Check Engine Light Diagnostics</option>
                  <option value="Radiators">Radiators</option>
                  <option value="Other">Other</option>
                </select>
            </div>
      {/* This is the schedule day feature, includes scheduling feature */}
            <div className="form-group">
              <label className="text-white">Desired Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="appointment"
                  value={formData.appointment}
                  onChange={handleChange}
                  required
                />
            </div>
            {/* This div is for the button that submits the form */}
            <div id="sched-btn" className="form-group text-center">
              <button type="submit" id="submit-button" className="btn btn-primary">Schedule</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Scheduling