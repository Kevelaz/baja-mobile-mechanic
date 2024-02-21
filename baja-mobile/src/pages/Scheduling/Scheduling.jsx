import {useState} from "react";


const Scheduling = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    date:"",
  })

  const handleChange = (e) => {   
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }
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