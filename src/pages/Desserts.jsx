import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { GiIceCreamCone } from "react-icons/gi";
import { FaCakeCandles, FaCookie } from "react-icons/fa6";


function Desserts() {


  const items = [

    {
      name:"Ice Cream",
      icon:<GiIceCreamCone size={75} color="#ff69b4" />,
      path:"/icecream"
    },


    {
      name:"Cake",
      icon:<FaCakeCandles size={75} color="#d2691e" />,
      path:"/cake"
    },


    {
      name:"Cup Cake",
      icon:<FaCakeCandles size={75} color="#ff8c00" />,
      path:"/cupcake"
    },


    {
      name:"Cookies",
      icon:<FaCookie size={75} color="#8b4513" />,
      path:"/cookies"
    }

  ];



  return (

    <>

      <Navbar />


      <div
        style={{
          minHeight:"100vh",
          background:"#fff7ef",
          padding:"40px"
        }}
      >


        <h1
          style={{
            textAlign:"center",
            color:"#800000",
            marginBottom:"40px",
            fontSize:"40px",
            fontWeight:"bold"
          }}
        >

          🍨 Desserts Menu

        </h1>



        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"30px"
          }}
        >



        {
          items.map((item,index)=>(


            <div

              key={index}

              style={{
                background:"white",
                padding:"35px",
                borderRadius:"20px",
                textAlign:"center",
                boxShadow:"0 5px 15px rgba(0,0,0,0.2)"
              }}

            >


              {item.icon}


              <h2
                style={{
                  marginTop:"20px",
                  color:"#333"
                }}
              >

                {item.name}

              </h2>



              <Link to={item.path}>

                <button

                  style={{
                    marginTop:"20px",
                    padding:"12px 25px",
                    background:"#800000",
                    color:"white",
                    border:"none",
                    borderRadius:"10px",
                    cursor:"pointer",
                    fontWeight:"bold"
                  }}

                >

                  View Varieties

                </button>

              </Link>


            </div>


          ))
        }



        </div>


      </div>


    </>

  )

}


export default Desserts;