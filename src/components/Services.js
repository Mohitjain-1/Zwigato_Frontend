import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

export default function Services() {
  return (
    <>
  
      <NavBar />
      
      
      <div className="container services-container">
      <div className="container" style={{ marginTop: "30px" }}>
        <h1 className="services-title">Our Services</h1>
        <hr/>
        </div>
        <p className="services-description">We offer a wide range of services to make your dining experience with us as enjoyable and convenient as possible:</p>

        <div className="services-section">
          <h2 className="services-subtitle">Delivery</h2>
          <p className="services-text">Our primary service is delivery. We offer fast, reliable delivery of delicious, high-quality meals straight to your door.</p>
        </div>

        <div className="services-section">
          <h2 className="services-subtitle">Catering</h2>
          <p className="services-text">Whether you're hosting a party, corporate event, or family gathering, our catering services can provide delicious, healthy meals for any occasion.</p>
        </div>

        <div className="services-section">
          <h2 className="services-subtitle">Meal Prep</h2>
          <p className="services-text">Our meal prep service is perfect for busy individuals or families who want to eat healthy, but don't have the time to cook. We offer weekly meal prep services that provide you with nutritious, delicious meals for the entire week.</p>
        </div>

        <div className="services-section">
          <h2 className="services-subtitle">Custom Menus</h2>
          <p className="services-text">We understand that everyone's tastes and dietary needs are different. That's why we offer custom menu options to suit your individual preferences. Whether you're vegetarian, vegan, gluten-free, or have other dietary restrictions, we can create a menu that works for you.</p>
        </div>

        <div className="services-section">
          <h2 className="services-subtitle">Special Events</h2>
          <p className="services-text">Looking for a unique dining experience? We offer special event services, including pop-up dinners, themed menus, and more.</p>
        </div>

        <div className="services-section">
          <h2 className="services-subtitle">Gift Cards</h2>
          <p className="services-text">Give the gift of delicious food with our gift card options. Perfect for birthdays, holidays, or any special occasion.</p>
        </div>

      </div>
      
      <style jsx>{`
  .services-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .services-section {
    width: 100%;
    margin-bottom: 40px;
  }

  .services-subtitle {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .services-text {
    font-size: 16px;
    line-height: 1.5;
    color: #777777;
  }
  
  .services-card {
    width: calc(33.33% - 20px);
    margin-bottom: 40px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .services-card:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  .services-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }

  .services-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
  }

  .services-description {
    font-size: 20px;
    line-height: 1.5;
    color: #777777;
    margin-bottom: 40px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .services-card {
      width: calc(50% - 20px);
    }
  }

  @media screen and (max-width: 480px) {
    .services-title {
      font-size: 28px;
    }

    .services-description {
      font-size: 16px;
    }

    .services-card {
      width: 100%;
    }
  }
`}</style>
      <div className="container">
        <Footer />
      </div>
    </>
  )
}
