import Navbar from "../components/Navbar";

function Cookies() {

  const varieties = [

    {
      name: "Chocolate Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600"
    },

    {
      name: "Butter Cookies",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600"
    },

    {
      name: "Oreo Cookies",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600"
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
          🍪 Cookies Varieties
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

export default Cookies;