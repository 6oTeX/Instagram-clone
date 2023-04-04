import React from 'react'

function Login() {
  return (
    <React.Fragment>
    <div className='login-container'>
      <img className='login-image' src='https://cdn.discordapp.com/attachments/738235003468513371/1092834361826627698/image.png' alt='login-img'/>
      <div className='login-content'>
        <img className='login-logo' src='https://www.svgrepo.com/show/353903/instagram.svg' alt='login-logo' />
        <form>
          <div className='form-group'>
            <input className='form-login' type='text' placeholder='Phone number, username, or email' />
            <input className='form-login' type='password' placeholder='Password' />
            <button className='form-login form-submit-btn' type='submit'>Log In</button>
            </div>
            </form>
            <span className='or-span'>OR</span>
            
            <button className='login-with-facebook'>
              <img src='https://www.svgrepo.com/show/475647/facebook-color.svg' alt='facebook' width="20px"/>
              <a href='#'>Log in with Facebook</a>
              </button>
              <div className='forgot-password'>
                <a href='#'>Forgot password?</a>
                </div>
                <div className='signup'>
                  <p>Don't have an account? <a href='#'>Sign up</a></p>
                  </div>
                  <p className='get-app'>Get the app.</p>
                  <div className='get-the-app'>
                    <div className='app-store'>
                      <a href='#'>
                      <img src='https://www.svgrepo.com/show/303139/google-play-badge-logo.svg' alt='app-store'/>
                      </a>
                      </div>
                      <div className='google-play'>
                        <a href='#'>
                        <img src='https://cdn.discordapp.com/attachments/738235003468513371/1092840648132022312/microsoft.png' alt='google-play' width="134px"/>
                        </a>
                        </div>
                        </div>
    </div>
    </div>
    <footer>
      <div className='footer-container'>
        <ul className='footer-links'>
          <li><a href='#'>Meta</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Jobs</a></li>
          <li><a href='#'>Help</a></li>
          <li><a href='#'>API</a></li>
          <li><a href='#'>Privacy</a></li>
          <li><a href='#'>Terms</a></li>
          <li><a href='#'>Top Accounts</a></li>
          <li><a href='#'>Hashtags</a></li>
          <li><a href='#'>Locations</a></li>
          <li><a href='#'>Instagram Lite</a></li>
          <li><a href='#'>Contact Uploading & Non-Users</a></li>
          <li><a href='#'>Digital Collectibles Privacy Notice</a></li>
          <li><a href='#'>Meta Verified</a></li>
          </ul>
        <div className='footer-bottom'>
          <p>English (United States)</p>
          <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
          </div>
          </div>
    </footer>
    </React.Fragment>
  )
}

export default Login