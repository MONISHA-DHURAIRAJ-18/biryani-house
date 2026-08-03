import Navbar from "../components/Navbar";

function MilkShake() {

  const varieties = [

    {
      name: "Chocolate Milk Shake",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600"
    },

    {
      name: "Vanilla Milk Shake",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600"
    },

    {
      name: "Strawberry Milk Shake",
      image: "https://ts3.mm.bing.net/th?id=OIP.USIhmZtDMCqj5jXFfQ6SVAHaLR&pid=15.1"
    }

  ];

  return (

    <>

      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#fff7ef",
          padding: "40px"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#800000",
            marginBottom: "40px",
            fontSize: "40px",
            fontWeight: "bold"
          }}
        >
          🥤 Milk Shake Varieties
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px"
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

                <img

                  src={item.image}

                  alt={item.name}

                  style={{

                    width:"170px",
                    height:"170px",
                    objectFit:"cover",
                    borderRadius:"15px"

                  }}

                />

                <h2

                  style={{

                    marginTop:"20px",
                    color:"#333",
                    fontSize:"24px",
                    fontWeight:"bold"

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

export default MilkShake;