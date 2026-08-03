import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function NonVeg() {


  const items = [

    {
      name:"Chicken",
      image:"https://a-z-animals.com/media/2022/12/shutterstock_1645981366-2048x1363.jpg",
      path:"/chicken"
    },


    {
      name:"Mutton",
      image:"https://png.pngtree.com/thumb_back/fw800/background/20230424/pngtree-black-goat-wallpaper-high-definition-image_2510945.jpg",
      path:"/mutton"
    },


    {
      name:"Fish",
      image:"https://docksidehhi.com/wp-content/uploads/2023/09/9-different-ways-to-cook-fish.jpg",
      path:"/fish"
    },


    {
      name:"Prawn",
      image:"https://tse3.mm.bing.net/th/id/OIP.zgyxCCPqBztdnjmInWDzBQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
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
            marginBottom:"40px",
            fontSize:"40px",
            fontWeight:"bold"
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

                  width:"140px",
                  height:"140px",
                  objectFit:"cover",
                  borderRadius:"50%"

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

  );

}


export default NonVeg;