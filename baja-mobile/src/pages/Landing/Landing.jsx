import React from "react";
import { Link } from 'react-router-dom'
import './Landing.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Landing = () => {
  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        {/* Text content */}
        <div id="paragraph" >
          <h1 id="title">About Us</h1>
          <h5>
            Welcome to Baja Mobile Mechanic, where automotive care comes to you. We're not just a mechanic service; we're your on-the-go solution to automotive maintenance and repair. At Baja Mobile Mechanic, we understand that life doesn't always pause for a trip to the mechanic. That's why we bring our expertise directly to your doorstep, whether you're at home, work, or stuck on the side of the road.
          </h5>
          <h5>
            Our mission is simple: to provide convenient, reliable, and expert automotive care while prioritizing the comfort and convenience of our customers. We believe that getting your car serviced shouldn't disrupt your day or add unnecessary stress to your life. That's why we've streamlined our process to ensure hassle-free service wherever and whenever you need it.
          </h5>
          <Link to="book-appointment" className="fixed-bottom">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing