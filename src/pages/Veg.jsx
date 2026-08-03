import Navbar from "../components/Navbar";


function Veg() {


  const varieties = [

    {
      name:"Veg Biryani",
      image:"https://static.vecteezy.com/system/resources/previews/047/523/600/non_2x/delicious-vegetable-biryani-in-a-bowl-photo-png.png"
    },


    {
      name:"Paneer Butter Masala",
      image:"https://ts3.mm.bing.net/th?id=OIP._oQn-u3e88nIFeGNqWy7bQHaHa&pid=15.1"
    },


    {
      name:"South Indian Meals",
      image:"https://static.vecteezy.com/system/resources/previews/030/658/826/large_2x/indian-food-with-white-background-high-quality-ultra-free-photo.jpg"
    },


    {
      name:"Veg Curry",
      image:"https://img.freepik.com/premium-photo/spicy-tofu-coconut-curry-isolated-white-background_787273-85608.jpg"
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



            </div>


          ))

        }



        </div>



      </div>


    </>

  );

}


export default Veg;