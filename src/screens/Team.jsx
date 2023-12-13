import Footer from "../components/Footer";
import Navbar from "../components/Navbar"





function Team(){


  

    return(

        <>

        <Navbar/>
         

         

            <div className="form-section">
                <h1>Get in touch </h1>
                <p>Send Your message</p>
                <hr />
                <img src="./assets/scribs.svg" alt="scribbles" className="scrib" />
                <form action="">
                    <div>
                        
                        <input type="text" placeholder="Name" />

                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                  
                        <input type="number" placeholder="Phone" />

                        
                        <input type="text" placeholder="Subject" />
                    </div>

                    <textarea placeholder="Message"></textarea>
                </form>

                <button className="contact-button">Send</button>

            </div>


         <Footer/>
    
                  
                    

  
          
        </>
    );
}

export default Team;