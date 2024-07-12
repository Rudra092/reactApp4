/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="#">
                  About Us
                </a>
              </li>
              <li>
                <a>
                  Blog
                </a>
              </li>
              <li>
                <a>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
<a>© 2024 Gemini Consulting & Services. All rights reserved.</a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
