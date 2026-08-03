import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Beverages() {

  const beverages = [

    {
      name: "Coffee",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
      path: "/coffee"
    },

    {
      name: "Fresh Juice",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600",
      path: "/juice"
    },

    {
      name: "Milk Shake",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",
      path: "/milkshake"
    },
    {
  name: "Cool Drinks",
  image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600",
  path: "/cooldrinks"
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
            fontSize:"40px",
            marginBottom:"40px",
            fontWeight:"bold"

          }}

        >

          🥤 Beverages Menu

        </h1>



        <div

          style={{

            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"30px"

          }}

        >

          {

            beverages.map((item,index)=>(

              <div

                key={index}

                style={{

                  background:"#fff",
                  padding:"30px",
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

                <img

                  src={item.image}

                  alt={item.name}

                  style={{

                    width:"160px",
                    height:"160px",
                    objectFit:"cover",
                    borderRadius:"15px"

                  }}

                />

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

                      marginTop:"15px",
                      padding:"12px 25px",
                      background:"#800000",
                      color:"#fff",
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

  );

}

export default Beverages;