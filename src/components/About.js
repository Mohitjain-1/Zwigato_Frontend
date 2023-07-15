import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

export default function About() {
  return (
    <>
      <NavBar />
      <div className="container" style={{ marginTop: "50px" }}>
        <h1>About Zwigato</h1>
        <hr/>
        <p>
          Welcome to Zwigato, the premier food delivery service in Your City/Region. We're passionate about delivering delicious, high-quality
          meals straight to your door, and we're committed to providing
          exceptional service every step of the way.
        </p>
        <br />
        <p>
          Our team of talented chefs and culinary experts work tirelessly to
          craft meals that are not only delicious, but also healthy and
          nutritious. We source our ingredients from local farms and markets
          whenever possible, so you can feel good about supporting your community
          while enjoying a delicious meal.
        </p>
        <br />
        <p>
          At Zwigato, we believe that food should be convenient, affordable, and
          above all, delicious. That's why we offer a wide range of menu options
          to suit every taste and dietary preference. Whether you're in the mood
          for a hearty pasta dish, a fresh salad, or a vegan entree, we've got
          you covered.
        </p>
        <br />
        <p>
          Ordering from Zwigato is easy and hassle-free. Simply browse our menu,
          choose your items, and place your order. Our team will take care of the
          rest, delivering your meal to your doorstep in a timely and
          professional manner.
        </p>
        <br />
        <p>
          Thank you for choosing Zwigato for your food delivery needs. We look
          forward to serving you!
        </p>
      </div>
      <Footer />
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }
        
        h1 {
          font-size: 36px;
          font-weight: bold;
          text-align: center;
        }
        
        p {
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
        
          p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
