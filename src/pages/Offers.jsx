import Navbar from "../components/Navbar";
import { FaGift } from "react-icons/fa6";


function Offers() {


  const offers = [

    {
      title:"Weekend Special",
      text:"Enjoy special discounts on delicious biryani and meals."
    },

    {
      title:"Family Combo",
      text:"Perfect combo meals for family and friends."
    },

    {
      title:"Festival Offer",
      text:"Celebrate festivals with our special food packages."
    },

    {
      title:"Special Deals",
      text:"Amazing offers with authentic flavours."
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
            fontWeight:"bold",
            marginBottom:"40px"
          }}

        >

          🎁 Special Offers

        </h1>




        <div

          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"30px"
          }}

        >



        {
          offers.map((item,index)=>(


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


              <FaGift size={60} color="gold" />


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
                  fontSize:"17px"
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


export default Offers;