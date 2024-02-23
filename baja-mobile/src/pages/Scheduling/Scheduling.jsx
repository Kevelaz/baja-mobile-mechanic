import {useState} from "react";


const Scheduling = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    date:"",
  })

  // const [showModal, setShowModal] = useState(false)
  // const [description, setDescription] = useState("")


  const handleChange = (e) => {   
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleDropdownChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, selectedOption: value })
  };

  // const handleModalSubmit = () => {
  //   setShowModal(false)
  // }
        // For the handleChange function below, once the backend is built the logic for data being sent to the backend will be filled in 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return(
    <div>
      <h2>Schedule An Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
        </div>
        <div>
          <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
        </div>
        <div>
          <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
        </div>
        <div>
          <label>Issue:</label>
            <select onChange={handleDropdownChange} value={formData.selectedOption}>
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
        <div>
          <label>Desired Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
        </div>
        <button type="submit">Schedule</button>
      </form>
    </div>
  )
}
export default Scheduling