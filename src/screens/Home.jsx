import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabmenu from "../components/Tabmenu";
import useBlogData from "../services/useBlogData";
import { monthInWords } from "../utils/utils";
// import Accordion from 'react-bootstrap/Accordion';

function Home() {
  const blogData = useBlogData();
  const navigate = useNavigate();
  
  

  console.log(blogData);

  return (
    <>
      <div className="main">
        <Navbar />

        <header>
          <div className="hero-section">
            <div className="hero-text">
              <h1>Honourable FM</h1>
              <p>.... We stand Out</p>

              <div />
            </div>
            <img src="./assets/hero.svg" alt="hero img" />
          </div>

          <div className="motto">
            <div className="motto-card">
              <svg
                width="25"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2 18.98H7.8c-.42 0-.89-.33-1.03-.73L2.63 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l3.66-2.61c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.15.38-.62.71-1.04.71ZM7 22h11M10 14h5"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <br /> WE ENTERTAIN
            </div>
            <div className="motto-card">
              <svg
                width="25"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.75 21.55c-.7.59-1.83.59-2.51 0L9.66 20.2c-.3-.25-.87-.46-1.27-.46h-1.7c-1.06 0-1.93-.87-1.93-1.93v-1.7c0-.4-.21-.96-.46-1.26l-1.35-1.58c-.59-.7-.59-1.83 0-2.51L4.3 9.18c.25-.3.46-.86.46-1.26v-1.7c0-1.06.87-1.93 1.93-1.93h1.7c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.26.46h1.75c1.06 0 1.93.87 1.93 1.93v1.71c0 .39.2.96.45 1.25l1.35 1.59c.58.69.58 1.81 0 2.5l-1.35 1.59c-.25.3-.45.86-.45 1.25v1.69c0 1.06-.87 1.93-1.93 1.93H16.6c-.4 0-.96.21-1.26.46l-1.59 1.36ZM12.5 15.87v-4.83"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.505 8h-.009"
                  stroke="#292D32"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <br /> WE INFORM
            </div>
            <div className="motto-card">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.79 10.47v7.32A4.21 4.21 0 0 1 13.58 22H6.21C3.89 22 2 20.11 2 17.79v-7.32a4.21 4.21 0 0 1 4.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21ZM5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0 1 22 13.16ZM2 12h15.51"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <br /> WE EDUCATE
            </div>
          </div>

          <section>

          <h1 className="hee"> Listen Live</h1>


          <div style={{textAlign:'center'}} class="iframe-container">


<iframe
         src='https://waystre.am/embed/honourablefm'
         style={{border: "0px #ffffff none", borderRadius: "8px", height: "570px", width: "400px"}}
         name="myiFrame"
         title="myiFrame"
         scrolling="no"
         frameborder="1"
         marginheight="0px"
         marginwidth="10px"
         allowfullscreen></iframe>
      
      

      
      </div>
            <h1 className="hee"> Our Daily Schedule</h1>
            <div className="integration-section">
              <Tabmenu />
            </div>

            <div className="offer-section">
              <h1>Meet The Team</h1>

              <div className="offer-card-section">

              <div className="teams-card">
                  <img src="./assets/img 31.svg" alt="get" />

                  <h5>Afolabi Jolaoluwa Jabulani</h5>
                  <p> Chief Executive Officer/Founder</p>
                </div>

                <div className="teams-card">
                  <img src="./assets/img 7.svg" alt="get" />
                  <h5>Tobi matthew</h5>
                  <p> PR Lead</p>
                </div>

                <div className="teams-card">
                  <img src="./assets/img 4.svg" alt="get" />
                  <h5>Yusuf Sikiru T </h5>
                  <p> Acting News Editor </p>
                </div>
                <div className="teams-card">
                  <img src="./assets/img 5.svg" alt="get" />

                  <h5>Similoluwa Shoremi</h5>
                  <p>Supervisor Off Air Venture</p>
                </div>

                <div className="teams-card">
                  <img src="./assets/img 21.svg" alt="get" />

                  <h5> 

                  Abraham Adigun
                  </h5>
                  <p>

Studio Manager

                  </p>
                </div>
           
              
              </div>
            </div>

            <div className="phone-section">
              <h1>Our Blog</h1>
              <div className="phone-card-section">
                {blogData?.slice(0,3)?.map((data) => {
                    const date = new Date(data?._createdAt);
                    const renderedDate = `
                    ${monthInWords[date.getMonth()]}
                    ${date.getDate()},
                    ${date.getFullYear()}
                    `;
                  return (
                    <div
                    onClick={() => {
                      navigate(`/blog/${data?.slug?.current}`);
                    }}
                    key={data?.slug?.current}
                    className="phone-card"
                  >
                    {" "}
                    <div className="">
                      <img src={data?.mainImage?.asset.url} alt="poddy" />
                      <p> {data?.slug?.current}</p>
                      <h4>{data?.title}</h4>
                      <p>{data?.body?.[0]?.children?.[0]?.text} ...</p>
                      <span />
                      <span />

                      <span> {renderedDate}</span>
                    </div>
                  </div>
                  )
                }
                 
                )}
              </div>
            </div>
          </section>

          <hr />

          <Footer />
        </header>
      </div>
    </>
  );
}

export default Home;
