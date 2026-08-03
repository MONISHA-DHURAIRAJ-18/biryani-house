import Navbar from "../components/Navbar";
import { FaUtensils, FaStar, FaHeart } from "react-icons/fa6";


function About() {


  const features = [

    {
      icon:<FaUtensils size={55} color="gold" />,
      title:"Fresh Food",
      text:"Fresh ingredients use panni tasty and delicious food prepare pannuvom."
    },


    {
      icon:<FaStar size={55} color="gold" />,
      title:"Quality Taste",
      text:"Authentic biryani and traditional flavours oda unforgettable taste."
    },


    {
      icon:<FaHeart size={55} color="gold" />,
      title:"Customer Love",
      text:"Customer satisfaction enga main priority. Ungal happiness dhaan engal success."
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



        {/* About Section */}


        <div

          style={{
            textAlign:"center",
            padding:"40px",
            background:"rgba(255,255,255,0.1)",
            borderRadius:"20px",
            backdropFilter:"blur(10px)"
          }}

        >


          <h1

            style={{
              color:"gold",
              fontSize:"45px",
              fontWeight:"bold"
            }}

          >

            About Biryani House 🍽️

          </h1>



          <p

            style={{
              color:"white",
              fontSize:"20px",
              lineHeight:"1.8",
              marginTop:"25px"
            }}

          >

            Biryani House is a restaurant serving delicious Indian cuisine
            with authentic flavours. We provide fresh biryani,
            veg dishes, non veg specials, beverages and desserts.

          </p>


        </div>






        {/* Why Choose Us */}


        <h1

          style={{
            textAlign:"center",
            color:"gold",
            marginTop:"50px",
            fontSize:"40px",
            fontWeight:"bold"
          }}

        >

          Why Choose Us?

        </h1>





        <div

          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"30px",
            marginTop:"35px"
          }}

        >



        {
          features.map((item,index)=>(


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
                  marginTop:"20px",
                  fontWeight:"bold"
                }}

              >

                {item.title}

              </h2>




              <p

                style={{
                  color:"white",
                  marginTop:"15px",
                  fontSize:"17px",
                  lineHeight:"1.6"
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


export default About;