import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { GiChickenLeg, GiGoat, GiShrimp } from "react-icons/gi";
import { FaFish } from "react-icons/fa";


function NonVeg() {


  const items = [

    {
      name:"Chicken",
      icon:<GiChickenLeg size={80} color="#b22222" />,
      path:"/chicken"
    },


    {
      name:"Mutton",
      icon:<GiGoat size={80} color="#800000" />,
      path:"/mutton"
    },


    {
      name:"Fish",
      icon:<FaFish size={80} color="#1e90ff" />,
      path:"/fish"
    },


    {
      name:"Prawn",
      icon:<GiShrimp size={80} color="#ff6347" />,
      path:"/prawn"
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
            marginBottom:"40px"
          }}
        >
          🍗 Non Veg Menu
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
                boxShadow:"0 5px 15px rgba(0,0,0,0.2)",
                transition:"0.3s",
                cursor:"pointer"
              }}

              onMouseEnter={(e)=>{
                e.currentTarget.style.transform="translateY(-10px)";
              }}

              onMouseLeave={(e)=>{
                e.currentTarget.style.transform="translateY(0)";
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
                    padding:"12px 30px",
                    background:"#800000",
                    color:"white",
                    border:"none",
                    borderRadius:"10px",
                    cursor:"pointer",
                    fontSize:"16px",
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


export default NonVeg;