import Navbar from "../components/Navbar";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";


function Contact() {


  const details = [

    {
      icon:<FaPhone size={45} color="gold" />,
      title:"Phone",
      text:"+91 98765 43210"
    },


    {
      icon:<FaEnvelope size={45} color="gold" />,
      title:"Email",
      text:"biryaniHouse@gmail.com"
    },


    {
      icon:<FaLocationDot size={45} color="gold" />,
      title:"Location",
      text:"Chennai, Tamil Nadu"
    }

  ];



  return (

    <>

      <Navbar />



      <div

        style={{
          minHeight:"100vh",
          background:
          "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.85))",
          padding:"50px"
        }}

      >



        <h1

          style={{
            textAlign:"center",
            color:"gold",
            fontSize:"45px",
            fontWeight:"bold"
          }}

        >

          Contact Us 📞

        </h1>




        <p

          style={{
            textAlign:"center",
            color:"white",
            fontSize:"20px",
            marginTop:"20px"
          }}

        >

          We are always happy to serve you with delicious food.

        </p>





        <div

          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"30px",
            marginTop:"40px"
          }}

        >



        {
          details.map((item,index)=>(


            <div

              key={index}

              style={{

                background:"rgba(255,255,255,0.12)",
                padding:"35px",
                borderRadius:"20px",
                textAlign:"center",
                border:"1px solid rgba(255,255,255,0.3)",
                backdropFilter:"blur(10px)"

              }}

            >


              {item.icon}


              <h2

                style={{
                  color:"white",
                  marginTop:"20px"
                }}

              >

                {item.title}

              </h2>



              <p

                style={{
                  color:"white",
                  marginTop:"15px",
                  fontSize:"18px"
                }}

              >

                {item.text}

              </p>



            </div>


          ))
        }



        </div>


      </div>


    </>

  )

}


export default Contact;