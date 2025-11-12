import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/UrbaniaTwelvePlusOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import new1 from "../assets/new1.webp";
import new2 from "../assets/new2.webp";
import new3 from "../assets/new3.webp";
import new4 from "../assets/new4.webp";
import seater1 from "../assets/12seater.jpeg";
import seater2 from "../assets/12seater1.jpeg";
import seater3 from "../assets/12seater2.jpeg";

const UrbaniaTwelvePlusOne = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [seater1, seater2, seater3, new1, new2, new3, new4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="urbania-detail">
      <div className="urbania-detail-container">
        <header className="detail-header">
          <h1>Force Urbania 12+1 Seater Luxury Van Rental</h1>
          <p>
           Experience unmatched luxury and space with our Force Urbania 12+1 seater van rental in Bangalore. 
           Perfect for corporate travel, family vacations, and outstation journeys, this van blends comfort, safety, and style to deliver an unforgettable travel experience.
          </p>
        </header>

        <div className="detail-content">
          <div className="rental-info">
           <div className="rental-packages" id="rental-packages">
  <h2>Rental Packages:</h2>

  <p className="packages-intro">
   We provide flexible and affordable Urbania van rentals in Bangalore for short trips, corporate events, weddings, and long-distance and outstation journeys. You can choose from hourly or daily packages, offering clear pricing and professional drivers for comfortable group travel.
  </p>
   </div>

  <table className="packages-table" aria-describedby="rental-packages">
    <tbody>
      <tr>
        <td>8hrs 80Kms</td>
        <td>₹7,000</td>
      </tr>
      <tr>
        <td>12hrs 100Kms</td>
        <td>₹10,000</td>
      </tr>
      <tr>
        <td>Out Station / Kms</td>
        <td>₹40</td>
      </tr>
      <tr>
        <td>Driver Bata</td>
        <td>₹700</td>
      </tr>
      <tr>
        <td>After Hrs Driver Bata</td>
        <td>₹700</td>
      </tr>
      <tr>
        <td>Extra Per Kms</td>
        <td>₹40</td>
      </tr>
      <tr>
        <td>Extra Per Hours</td>
        <td>₹400</td>
      </tr>
    </tbody>
  </table>

  <p className="packages-note"><em>* Driver bata, toll, and parking charges are extra. GST additional as applicable.</em></p>

  {/* Call to action */}
  <div className="packages-cta">
    <button className="btn-primary">Book Now</button>
    <a href="tel:8951666166" className="btn-outline">Call: 8951666166</a>
  </div>
</div>

            <div className="vehicle-image-slider">
              <button className="slider-btn prev" onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="vehicle-image">
                <img 
                  src={images[currentImage]} 
                  alt={`Force Urbania 12+1 Seater View ${currentImage + 1}`} 
                />
                <div className="slider-dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentImage ? 'active' : ''}`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>
              <button className="slider-btn next" onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <section className="features-section">
            <h2>Features & Amenities</h2>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-couch"></i>
                <h3>Premium Seating</h3>
                <p>
                  Luxurious comfort with ergonomic seats and ample space for all
                  passengers.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-snowflake"></i>
                <h3>Climate Control</h3>
                <p>
                  Powerful AC system with individual vents for optimal
                  temperature control.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-plug"></i>
                <h3>Charging Points</h3>
                <p>
                  Multiple USB ports to keep your devices charged during the
                  journey.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Safety Features</h3>
                <p>
                  Advanced safety systems, including ABS, airbags, and parking
                  sensors.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-suitcase"></i>
                <h3>Luggage Space</h3>
                <p>Generous storage capacity for all your travel needs.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-music"></i>
                <h3>Entertainment</h3>
                <p>Modern audio system for an enjoyable journey experience.</p>
              </div>
            </div>
          </section>

          <section className="destinations-section">
            <h2>Popular Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Corporate Travel</h3>
                <p>
                  Ideal for business trips, employee transport, and corporate
                  events. Professional service with punctuality guaranteed.
                </p>
              </div>
              <div className="service-item">
                <h3>Outstation Travel</h3>
                <p>
                  Perfect for group trips to popular destinations around
                  Bangalore. Comfortable long-distance travel with experienced
                  drivers.
                </p>
              </div>
            </div>
          </section>

          <section className="transparent-pricing-section">
            <h2 className="pricing-title">Transparent Pricing</h2>
            <p className="pricing-subtitle">
             We believe in clear, upfront pricing for every Force Urbania van rentals. 
             No hidden costs—just reliable service and transparent rates for a worry-free experience.
            </p>

            <div className="pricing-box">
              <div className="pricing-column">
                <h3>What's Included:</h3>
                <ul>
                  <li>
                    <span className="check">✔</span> Vehicle charges as per the
                    selected package
                  </li>
                  <li>
                    <span className="check">✔</span> Professional driver with
                    extensive local knowledge
                  </li>
                  <li>
                    <span className="check">✔</span> Fuel costs for the agreed
                    distance
                  </li>
                  <li>
                    <span className="check">✔</span> Driver allowance for
                    outstation trips
                  </li>
                </ul>
              </div>
              <div className="pricing-column">
                <h3>What's Excluded:</h3>
                <ul>
                  <li>
                    <span className="cross">✘</span> Toll charges (to be paid as
                    per actual)
                  </li>
                  <li>
                    <span className="cross">✘</span> Parking fees (to be paid as
                    per actual)
                  </li>
                  <li>
                    <span className="cross">✘</span> Additional charges for
                    extra hours/kilometers
                  </li>
                  <li>
                    <span className="cross">✘</span> Interstate permits (if
                    applicable)
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UrbaniaTwelvePlusOne;
