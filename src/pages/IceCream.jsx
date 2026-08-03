import Navbar from "../components/Navbar";
import { GiIceCreamCone } from "react-icons/gi";


function IceCream() {


  const items = [

    "Vanilla Ice Cream",
    "Chocolate Ice Cream",
    "Strawberry Ice Cream"

  ];


  return (

    <>

      <Navbar />


      <div style={{
        minHeight:"100vh",
        background:"#fff7ef",
        padding:"40px"
      }}>


        <h1 style={{
          textAlign:"center",
          color:"#800000",
          marginBottom:"40px"
        }}>
          🍦 Ice Cream Varieties
        </h1>



        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"30px"
        }}>


        {
          items.map((item,index)=>(

            <div key={index}
              style={{
                background:"white",
                padding:"35px",
                borderRadius:"20px",
                textAlign:"center",
                boxShadow:"0 5px 15px rgba(0,0,0,0.2)"
              }}
            >

              <GiIceCreamCone size={75} color="gold" />


              <h2 style={{
                marginTop:"20px",
                color:"#333"
              }}>
                {item}
              </h2>


            </div>

          ))
        }


        </div>


      </div>

    </>

  )

}


export default IceCream;