import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { GiChickenLeg, GiIceCreamCone } from "react-icons/gi";
import { FaLeaf, FaGlassWater } from "react-icons/fa6";


function Home() {


  const categories = [

    {
      name:"Non Veg",
      icon:<GiChickenLeg size={75} color="gold" />,
      path:"/nonveg"
    },

    {
      name:"Veg",
      icon:<FaLeaf size={75} color="gold" />,
      path:"/veg"
    },

    {
      name:"Beverages",
      icon:<FaGlassWater size={75} color="gold" />,
      path:"/beverages"
    },

    {
      name:"Desserts",
      icon:<GiIceCreamCone size={75} color="gold" />,
      path:"/desserts"
    }

  ];



  return (

    <>

    <Navbar />


    <div

      style={{
        minHeight:"100vh",
        background:
        "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)), url('/food-bg.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        padding:"50px"
      }}

    >



      {/* Hero Section */}


      <div

        style={{
          textAlign:"center",
          padding:"40px"
        }}

      >


        <h1

          style={{
            fontSize:"55px",
            color:"gold",
            fontWeight:"bold",
            letterSpacing:"2px"
          }}

        >
          Welcome To Biryani House 🍽️
        </h1>



        <p

          style={{
            color:"white",
            fontSize:"22px",
            marginTop:"20px",
            fontStyle:"italic"
          }}

        >
          "Where Every Grain Tells A Story,
          Every Bite Creates A Memory"
        </p>



        <p

          style={{
            color:"white",
            fontSize:"18px",
            marginTop:"15px"
          }}

        >
          Experience authentic flavours,
          traditional recipes and unforgettable taste.
        </p>


      </div>





      <h2

        style={{
          textAlign:"center",
          color:"white",
          marginTop:"30px",
          fontSize:"35px"
        }}

      >

        Explore Our Menu

      </h2>





      <div

        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",
          gap:"30px",
          marginTop:"40px"
        }}

      >



      {
        categories.map((item,index)=>(


          <Link

            key={index}

            to={item.path}

            style={{
              textDecoration:"none"
            }}

          >



            <div

              style={{

                background:"rgba(255,255,255,0.12)",
                backdropFilter:"blur(10px)",
                padding:"40px",
                borderRadius:"20px",
                textAlign:"center",
                border:"1px solid rgba(255,255,255,0.3)",
                transition:"0.3s",
                cursor:"pointer"

              }}



              onMouseEnter={(e)=>{
                e.currentTarget.style.transform="translateY(-12px)";
              }}



              onMouseLeave={(e)=>{
                e.currentTarget.style.transform="translateY(0)";
              }}


            >


              {item.icon}



              <h2

                style={{
                  color:"white",
                  marginTop:"20px",
                  fontSize:"28px"
                }}

              >

                {item.name}

              </h2>



            </div>



          </Link>


        ))
      }



      </div>




    </div>


    </>

  )

}


export default Home;