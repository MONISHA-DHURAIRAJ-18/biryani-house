import Navbar from "../components/Navbar";
import { GiGoat, GiRiceCooker } from "react-icons/gi";


function Mutton() {


  const varieties = [

    {
      name:"Mutton Biryani",
      icon:<GiRiceCooker size={80} color="#d2691e" />
    },

    {
      name:"Mutton Curry",
      icon:<GiGoat size={80} color="#800000" />
    },

    {
      name:"Mutton Chukka",
      icon:<GiGoat size={80} color="#b22222" />
    },

    {
      name:"Mutton Roast",
      icon:<GiGoat size={80} color="#ff4500" />
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
          🥩 Mutton Varieties
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
                boxShadow:"0 5px 15px rgba(0,0,0,0.2)",
                transition:"0.3s"
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


            </div>


          ))
        }


        </div>


      </div>


    </>

  )

}


export default Mutton;