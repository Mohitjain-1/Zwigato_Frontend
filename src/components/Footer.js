import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Zwigato. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/Zwigato">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Zwigato">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/Zwigato">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #BC2F2F;
          color: #fff;
          padding: 10px 0;
          text-align: center;
        }

        .social {
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .social li {
          margin-right: 10px;
        }

        .social a {
          display: inline-block;
          font-size: 20px;
          color: #fff;
          transition: all 0.3s ease;
        }

        .social a:hover {
          color: #f00;
        }
      `}</style>
    </footer>
  );
}
