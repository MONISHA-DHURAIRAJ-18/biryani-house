import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Desserts() {

  const items = [

    {
      name: "Ice Cream",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
      path: "/icecream"
    },

    {
      name: "Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
      path: "/cake"
    },

    {
      name: "Cup Cake",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600",
      path: "/cupcake"
    },

    {
      name: "Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600",
      path: "/cookies"
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
          🍰 Desserts Menu
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px"
          }}
        >

          {items.map((item, index) => (

            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "160px",
                  height: "160px",
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

              <Link to={item.path}>
                <button
                  style={{
                    marginTop: "15px",
                    padding: "12px 25px",
                    background: "#800000",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  View Varieties
                </button>
              </Link>

            </div>

          ))}

        </div>

      </div>

    </>

  );

}

export default Desserts;