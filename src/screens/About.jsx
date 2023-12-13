import Footer from "../components/Footer";
import Navbar from "../components/Navbar";







function About(){


  

    return(

        <>
     <Navbar/>

         <header>
            <div className="about">
                <div className="">
                    <h1>About Us <br /> <b> Honourable FM </b></h1>
                     <p> Honourable FM is your go-to source for trending news and engaging conversations. From political news to entertainment, we’re here to elevate your auditory experience. Tune in for a blend of music across genres and thought-provoking discussions, making every of your moment a journey worth taking..</p>
                <div>
                <button>BECOME A SPONSOR </button> 
                <a href="https://youtube.com/@honourablefm?si=eFivIFxarScFh9be">   <button> SUSCRIBE</button> </a>
            </div>
                 </div>
                     <img className="vector01" src="./assets/vector.svg" alt="hero img"/>
                     <img className="vector02" src="./assets/vector1.svg" alt="hero img"/>

               
                </div>
         </header>

         <section>
                <div className="listen-section">
                    <div className="listen-car">
                        <h1> <b>76</b>K</h1>
                        <p>Community Listeners</p>

                    </div>

                    <div className="listen-car">
                        <h1> <b>16</b>K</h1>
                        <p>Daily Listeners</p>

                    </div>
                  
                </div>
              
                <div className="service-text"> <h1>What our listeners say</h1> <p>Their experience throughout every platform</p>
                
                <img src="./assets/img112.svg" alt="poddy" />

                <h3> About and History</h3>

                </div>


                <div className="service-section">
                    <div>
                        <p>
                        Honourable fm- We are the complete spectrum in news update, entertainment and Music. We stand out

To make a real difference by connecting and developing people, interest and sharing trusted, and indispensable source of information, stories, event and playing fantastic music. Exploring, informing, educating and entertaining so that we learn, grow and thrive together.
                        </p>
                    </div>

                    {/* <div>
                        <p>
                        Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam elementum pulvinar.
                        Elementum eu facilisis sed odio morbi quis commodo.
                        Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.
                        </p>
                    </div> */}
                </div>

            
         </section>
     

    
                  
                    

  
          <Footer/>
        </>
    );
}

export default About;