import Navbar from "../components/Navbar";
import { FaGlassWater } from "react-icons/fa6";


function Juice() {


  const items = [

    {
      name:"Orange Juice",
      icon:<FaGlassWater size={75} color="#ff8c00" />
    },

    {
      name:"Mango Juice",
      icon:<FaGlassWater size={75} color="#ffa500" />
    },

    {
      name:"Lemon Juice",
      icon:<FaGlassWater size={75} color="#ffd700" />
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
          🍹 Juice Varieties
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


            </div>


          ))
        }


        </div>


      </div>


    </>

  )

}


export default Juice;