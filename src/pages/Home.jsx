import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {

  const categories = [

    {
      name:"Non Veg",
      image:"https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600",
      path:"/nonveg"
    },

    {
      name:"Veg",
      image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      path:"/veg"
    },

    {
      name:"Beverages",
      image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
      path:"/beverages"
    },

    {
      name:"Desserts",
      image:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600",
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
          "linear-gradient(rgba(33,33,33,0.85),rgba(33,33,33,0.9)),url('/food-bg.jpg')",

          backgroundSize:"cover",

          backgroundPosition:"center",

          padding:"50px"

        }}

      >



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

            color:"gold",

            marginTop:"30px",

            fontSize:"35px"

          }}

        >

          Explore Our Menu

        </h2>






        <div

          style={{

            display:"grid",

            gridTemplateColumns:
            "repeat(auto-fit,minmax(230px,1fr))",

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


                  background:
                  "rgba(255,255,255,0.12)",


                  backdropFilter:
                  "blur(10px)",


                  padding:"30px",


                  borderRadius:"20px",


                  textAlign:"center",


                  border:
                  "1px solid rgba(255,255,255,0.3)",


                  transition:"0.3s",


                  cursor:"pointer"


                }}



                onMouseEnter={(e)=>{


                  e.currentTarget.style.transform=
                  "translateY(-12px)";


                  e.currentTarget.style.boxShadow=
                  "0 10px 25px rgba(255,215,0,0.5)";


                }}



                onMouseLeave={(e)=>{


                  e.currentTarget.style.transform=
                  "translateY(0)";


                  e.currentTarget.style.boxShadow=
                  "none";


                }}


              >




                <img

                  src={item.image}

                  alt={item.name}

                  loading="lazy"

                  decoding="async"


                  style={{


                    width:"180px",


                    height:"180px",


                    objectFit:"cover",


                    borderRadius:"20px",


                    border:
                    "3px solid gold",


                    boxShadow:
                    "0 6px 18px rgba(0,0,0,0.5)"


                  }}

                />





                <h2

                  style={{


                    color:"white",


                    marginTop:"20px",


                    fontSize:"28px",


                    fontWeight:"bold"


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

  );

}


export default Home;