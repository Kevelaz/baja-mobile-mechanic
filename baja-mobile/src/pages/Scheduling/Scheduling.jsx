import {useState} from "react";
import axios from 'axios'


const Scheduling = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    customer_problem:"",
    appointment:"",
  })

  const handleChange = (e) => {   
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleDropdownChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, customer_problem: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/submit', formData)
      .then(response => {
          console.log("Appointment scheduled successfully", response.data);
          setFormData({
            name:"",
            email:"",
            phone:"",
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
          <h2 className="text-center mb-4">Schedule An Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input 
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Issue:</label>
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
            <div className="form-group">
              <label>Desired Date:</label>
              <input
                type="date"
                className="form-control"
                name="appointment"
                value={formData.appointment}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Schedule</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Scheduling