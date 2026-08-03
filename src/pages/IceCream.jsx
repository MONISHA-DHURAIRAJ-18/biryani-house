import Navbar from "../components/Navbar";

function IceCream() {

  const varieties = [

    {
      name: "Vanilla Ice Cream",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600"
    },

    {
      name: "Chocolate Ice Cream",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600"
    },

    {
      name: "Strawberry Ice Cream",
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600"
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
          🍨 Ice Cream Varieties
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

export default IceCream;