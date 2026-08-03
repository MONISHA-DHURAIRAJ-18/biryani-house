import Navbar from "../components/Navbar";
import { GiMilkCarton } from "react-icons/gi";


function MilkShake() {


  const items = [

    {
      name:"Chocolate Milk Shake",
      icon:<GiMilkCarton size={75} color="#8b4513" />
    },

    {
      name:"Vanilla Milk Shake",
      icon:<GiMilkCarton size={75} color="#fffacd" />
    },

    {
      name:"Strawberry Milk Shake",
      icon:<GiMilkCarton size={75} color="#ff69b4" />
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
          🥤 Milk Shake Varieties
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


export default MilkShake;