import Navbar from "../components/Navbar";
import { GiShrimp, GiRiceCooker } from "react-icons/gi";


function Prawn() {


  const varieties = [

    {
      name:"Prawn Biryani",
      icon:<GiRiceCooker size={80} color="#d2691e" />
    },

    {
      name:"Prawn Fry",
      icon:<GiShrimp size={80} color="#ff6347" />
    },

    {
      name:"Prawn Curry",
      icon:<GiShrimp size={80} color="#800000" />
    },

    {
      name:"Prawn Masala",
      icon:<GiShrimp size={80} color="#ff4500" />
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
          🦐 Prawn Varieties
        </h1>



        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"30px"
          }}
        >


        {
          varieties.map((item,index)=>(


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


export default Prawn;