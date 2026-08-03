import Navbar from "../components/Navbar";

function Prawn() {

  const varieties = [

    {
      name: "Prawn Biryani",
      image: "https://tse3.mm.bing.net/th/id/OIP.jRCypTD9cj-RD8wtwXCszQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=34"
    },

    {
      name: "Prawn Fry",
      image: "https://img.freepik.com/premium-photo/batterfried-prawns-white-background_827055-1854.jpg"
    },

    {
      name: "Prawn Curry",
      image: "https://img.magnific.com/premium-photo/prawn-curry-white-background_762785-239379.jpg"
    },

    {
      name: "Prawn Masala",
      image: "https://static.vecteezy.com/system/resources/previews/043/122/427/non_2x/chettinad-prawn-masala-served-in-dish-isolated-on-background-top-view-of-desi-indian-food-photo.jpg"
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
          🍤 Prawn Varieties
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

export default Prawn;