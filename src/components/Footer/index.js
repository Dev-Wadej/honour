// import Seo from "../shared/Seo";
// import Navbar from "../components/Navbar"
// import {Nav,Container,Navbar} from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer_section">
        <div className="imapct_section">
          <img src="../assets/Honourable.svg" alt="logo" />

          <p>
            {" "}
          We Stand Out.{" "}
          </p>
          <a href="https://instagram.com/honourable.fm?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr">
            {" "}
            <svg
              width="42"
              height="42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.934" cy="20.934" r="20.934" fill="#090429" />
              <path
                d="M25.281 11.457h-8.693a5.137 5.137 0 0 0-5.131 5.131v8.693c0 2.83 2.302 5.131 5.131 5.131h8.693c2.83 0 5.131-2.302 5.131-5.13v-8.694a5.137 5.137 0 0 0-5.13-5.131Zm-4.346 14.66a5.189 5.189 0 0 1-5.183-5.182 5.189 5.189 0 0 1 5.183-5.183 5.189 5.189 0 0 1 5.183 5.183 5.189 5.189 0 0 1-5.183 5.183Zm5.306-9.143a1.533 1.533 0 0 1-1.531-1.531c0-.845.687-1.532 1.531-1.532.845 0 1.532.687 1.532 1.532 0 .844-.687 1.531-1.532 1.531Z"
                fill="#fff"
              />
              <path
                d="M20.934 16.862a4.076 4.076 0 0 0-4.072 4.072 4.076 4.076 0 0 0 4.072 4.072 4.076 4.076 0 0 0 4.072-4.072 4.076 4.076 0 0 0-4.072-4.072ZM26.241 15.023a.42.42 0 1 0 .001.841.42.42 0 0 0 0-.841Z"
                fill="#fff"
              />
            </svg>
          </a>
          <a href="https://x.com/honourable_fm?s=21&t=S-O44Zu9S7vsJMVrUN6xWA">
            <svg
              width="42"
              height="42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.934" cy="20.934" r="20.934" fill="#090429" />
              <path
                d="M31.63 14.431a9.141 9.141 0 0 1-2.527.692A4.361 4.361 0 0 0 31.03 12.7c-.86.51-1.8.87-2.781 1.063a4.386 4.386 0 0 0-7.588 2.995c-.001.336.035.671.107 1a12.415 12.415 0 0 1-9.04-4.588 4.386 4.386 0 0 0 1.348 5.862 4.333 4.333 0 0 1-1.983-.537v.048a4.406 4.406 0 0 0 3.513 4.314 4.374 4.374 0 0 1-1.149.144 3.874 3.874 0 0 1-.83-.075 4.427 4.427 0 0 0 4.098 3.055 8.814 8.814 0 0 1-5.438 1.867 8.216 8.216 0 0 1-1.05-.06 12.347 12.347 0 0 0 6.729 1.968A12.398 12.398 0 0 0 29.432 16.71a8.75 8.75 0 0 0 2.198-2.278Z"
                fill="#fff"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/HonourableFM?mibextid=LQQJ4d">
            <svg
              width="42"
              height="42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.934" cy="20.934" r="20.934" fill="#090429" />
              <path
                d="m26.628 9.58-2.962-.004c-3.328 0-5.479 2.207-5.479 5.622v2.592H15.21a.466.466 0 0 0-.466.466v3.756c0 .257.209.465.466.465h2.978v9.477c0 .257.209.466.466.466h3.886a.466.466 0 0 0 .466-.466v-9.477h3.483a.466.466 0 0 0 .465-.465l.002-3.756a.467.467 0 0 0-.466-.466h-3.484v-2.197c0-1.056.252-1.592 1.628-1.592L26.628 14a.466.466 0 0 0 .466-.466v-3.487a.466.466 0 0 0-.466-.466Z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>

        <div className="part_section">
        <h5>About</h5>
        <a style={{color:"black"}} href="/about"><p>About Us</p>  </a>    
        <a style={{color:"black"}} href="/news">    <p>Blog</p></a>
        <a style={{color:"black"}} href="https://waystre.am/live/honourablefm">  <p>Listen Live</p></a>
          {/* <p>Medium</p> */}
          {/* <p>Respect mother earth</p> */}
        </div>

        <div className="part_section">
          <h5>More</h5>
          <a style={{color:"black"}} href="/">  <p>Meet the team</p></a> 
          <a style={{color:"black"}} href="/">   <p>Our daily shecdule</p></a> 

          {/* <p>Respect mother earth</p> */}
        </div>

        <div className="part_section">
          <h5>Keep in touch</h5>

          <p>Listen to episodes on your fav platform:</p>

          <p> Send us an email @Honourablefm@gmail.com</p>
        </div>
      </div>
      {/* <div className="copy"> Copyright@2023 Black thread media All right reserved </div> */}

      {/* <div className="button_section">
        <button> Login</button>
        <button> Signup</button>


      </div> */}
    </>
  );
}

export default Footer;
