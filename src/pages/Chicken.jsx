import Navbar from "../components/Navbar";


function Chicken() {


  const varieties = [

    {
      name:"Chicken Biryani",
      image:"https://png.pngtree.com/png-clipart/20250120/original/pngtree-ai-generated-chicken-biryani-png-image_19962305.png"
    },


    {
      name:"Chicken 65",
      image:"https://images.timesnownews.com/photo/msid-118713813/118713813.jpg"
    },


    {
    name:"Chicken Tikka",
    image:"https://img.freepik.com/premium-photo/chicken-tikka-isolated-white-background_659788-10170.jpg"
    },

    {
      name:"Butter Chicken",
      image:"https://img.freepik.com/premium-photo/butter-chicken-isolated-white-background-top-view_247037-455.jpg?w=740"
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

          🍗 Chicken Varieties

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


export default Chicken;