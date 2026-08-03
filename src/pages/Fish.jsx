import Navbar from "../components/Navbar";

function Fish() {

  const varieties = [

    {
      name: "Fish Biryani",
      image: "https://tse1.mm.bing.net/th/id/OIP.SkUA-3NTNA5V2UMkaYND6gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
      name: "Fish Fry",
      image: "https://ts1.mm.bing.net/th?id=OIP.z7WrQkJqeht_NFUaFfOBPgHaHa&pid=15.1"
    },

    {
      name: "Fish Curry",
      image: "https://static.vecteezy.com/system/resources/previews/060/239/592/non_2x/fish-curry-in-white-bowl-on-transparent-background-png.png"
    },

    {
      name: "Fish Tikka",
      image: "https://ts2.mm.bing.net/th?id=OIP.UiXyRUuadAXpwvXiOmuwUgHaG3&pid=15.1"
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
          🐟 Fish Varieties
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px"
          }}
        >

          {varieties.map((item, index) => (

            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "20px"
                }}
              />

              <h2
                style={{
                  marginTop: "20px",
                  color: "#333"
                }}
              >
                {item.name}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </>

  );

}

export default Fish;