import Navbar from "../components/Navbar";
import { GiRiceCooker, GiChiliPepper } from "react-icons/gi";
import { FaBowlFood, FaLeaf } from "react-icons/fa6";


function Veg() {


  const items = [

    {
      name:"Veg Biryani",
      icon:<GiRiceCooker size={80} color="#228b22" />
    },


    {
      name:"Paneer Butter Masala",
      icon:<FaBowlFood size={80} color="#ffa500" />
    },


    {
      name:"South Indian Meals",
      icon:<FaLeaf size={80} color="#008000" />
    },


    {
      name:"Veg Curry",
      icon:<GiChiliPepper size={80} color="#ff4500" />
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
          🌿 Veg Varieties
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



            </div>


          ))
        }



        </div>


      </div>


    </>

  )

}


export default Veg;