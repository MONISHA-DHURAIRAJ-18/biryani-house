import Navbar from "../components/Navbar";

function Mutton() {

  const varieties = [

    {
      name: "Mutton Biryani",
      image: "https://img.magnific.com/premium-photo/delicious-mutton-biryani-isolated-white-background_787273-21931.jpg"
    },

    {
      name: "Mutton Curry",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
    },

    {
      name: "Mutton Chukka",
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600"
    },

    {
      name: "Mutton Roast",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600"
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
          🥩 Mutton Varieties
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

                  loading="eager"
                  decoding="async"
                  fetchPriority="high"

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

export default Mutton;