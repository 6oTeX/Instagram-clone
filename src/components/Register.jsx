import React from "react";
import facebook_logo from "./assets/facebook-logo.svg";

function Register() {
  return (
    <React.Fragment>
      <div className="register-container">
        <div className="register-content">
          <div className="register-header">
            <img
              className="register-logo"
              src="https://cdn.discordapp.com/attachments/738235003468513371/1093088140538941470/1280px-Instagram_logo.png"
              alt="register-logo"
            />
          </div>
          <h2 className="header-2">
            Sign up to see photos and videos from your friends.
          </h2>
          <button className="register-with-facebook">
            <img src={facebook_logo} alt="facebook" width="20px" />
            <a href="#">Log in with Facebook</a>
          </button>
          <span className="or-span">OR</span>
          <form>
            <div className="form-group">
              <input
                className="form-login"
                type="text"
                placeholder="Mobile Number or Email"
              />
              <input
                className="form-login"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="form-login"
                type="text"
                placeholder="Username"
              />
              <input
                className="form-login"
                type="password"
                placeholder="Password"
              />
              <div>
                <p className="register-info">
                  People who use our service may have uploaded your contact
                  information to Instagram. <span>Learn more</span>
                </p>
                <p className="register-info">
                  By signing up, you agree to our Terms . Learn how we collect,
                  use and share your data in our Privacy Policy and how we use
                  cookies and similar technology in our{" "}
                  <span>Cookies Policy</span> .
                </p>
              </div>
              <button className="form-register form-submit-btn" type="submit">
                Next
              </button>
            </div>
          </form>
          <div className="signup">
            <p>
              Have an account? <a href="#">Login in</a>
            </p>
          </div>
          <p className="get-app">Get the app.</p>
          <div className="get-the-app">
            <div className="app-store">
              <a href="#">
                <img
                  src="https://cdn.discordapp.com/attachments/738235003468513371/1093080101920440320/get-it-on-google-play-badge-1.png"
                  alt="app-store"
                  width="134px"
                />
              </a>
            </div>
            <div className="google-play">
              <a href="#">
                <img
                  src="https://cdn.discordapp.com/attachments/738235003468513371/1092840648132022312/microsoft.png"
                  alt="google-play"
                  width="134px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <ul className="footer-links">
            <li>
              <a href="#">Meta</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Top Accounts</a>
            </li>
            <li>
              <a href="#">Hashtags</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Instagram Lite</a>
            </li>
            <li>
              <a href="#">Contact Uploading & Non-Users</a>
            </li>
            <li>
              <a href="#">Digital Collectibles Privacy Notice</a>
            </li>
            <li>
              <a href="#">Meta Verified</a>
            </li>
          </ul>
          <div className="footer-bottom">
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Russian">Russian</option>
              <option value="Turkish">Turkish</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="Chinese">Chinese</option>
            </select>
            <p>© 2023 Instagram from Meta</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Register;
