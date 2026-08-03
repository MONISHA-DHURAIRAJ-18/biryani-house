import Navbar from "../components/Navbar";

function CoolDrinks() {

  const varieties = [

    {
      name: "Coca Cola",
      image: "https://static.vecteezy.com/system/resources/previews/030/657/687/non_2x/coca-cola-light-with-white-background-high-quality-free-photo.jpg"
    },

    {
      name: "Pepsi",
      image: "https://tse2.mm.bing.net/th/id/OIP.G9BsMRRchq6hFo8HPNz0PQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
      name: "Sprite",
      image: "https://tse4.mm.bing.net/th/id/OIP.uKRwziJEx9hnq417ITGDEAHaHE?r=0&w=860&h=821&rs=1&pid=ImgDetMain&o=7&rm=3"
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
          🥤 Cool Drinks Varieties
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
                padding: "35px",
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
                style={{
                  width: "160px",
                  height: "160px",
                  objectFit: "contain"
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

export default CoolDrinks;