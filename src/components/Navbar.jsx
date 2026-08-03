import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import { useState } from "react";


function Navbar() {


  const [open,setOpen] = useState(false);



  return (

    <nav
      style={{
        background:"#800000",
        padding:"18px 50px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}
    >


      {/* Logo */}

      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          color:"gold",
          fontSize:"28px",
          fontWeight:"bold"
        }}
      >

        <FaUtensils />

        <span>
          Biryani House
        </span>

      </div>





      {/* Menu Links */}


      <ul
        style={{
          display:"flex",
          gap:"35px",
          listStyle:"none",
          alignItems:"center",
          margin:0
        }}
      >


        <li>
          <Link
            to="/"
            style={linkStyle}
          >
            Home
          </Link>
        </li>





        <li
          style={{
            position:"relative"
          }}

          onMouseEnter={()=>setOpen(true)}

          onMouseLeave={()=>setOpen(false)}
        >


          <span
            style={linkStyle}
          >
            Menu ▼
          </span>




          {
            open &&

            <ul

              style={{
                position:"absolute",
                top:"35px",
                left:"0",
                background:"white",
                width:"220px",
                padding:"10px 0",
                borderRadius:"10px",
                boxShadow:"0 5px 20px rgba(0,0,0,0.3)",
                listStyle:"none",
                zIndex:10
              }}

            >


              <DropItem 
                text="🌿 Veg"
                path="/veg"
              />


              <DropItem 
                text="🍗 Non Veg"
                path="/nonveg"
              />


              <DropItem 
                text="🥤 Beverages"
                path="/beverages"
              />


              <DropItem 
                text="🍨 Desserts"
                path="/desserts"
              />


            </ul>

          }


        </li>





        <li>
          <Link
            to="/offers"
            style={linkStyle}
          >
            Offers
          </Link>
        </li>





        <li>
          <Link
            to="/about"
            style={linkStyle}
          >
            About
          </Link>
        </li>





        <li>
          <Link
            to="/contact"
            style={linkStyle}
          >
            Contact
          </Link>
        </li>



      </ul>



    </nav>

  )

}





function DropItem({text,path}){


  return(

    <li>

      <Link

        to={path}

        style={{
          display:"block",
          padding:"15px",
          color:"#800000",
          textDecoration:"none",
          fontWeight:"bold"
        }}

      >

        {text}

      </Link>

    </li>

  )

}





const linkStyle = {

  color:"white",
  textDecoration:"none",
  fontSize:"18px",
  fontWeight:"bold",
  cursor:"pointer"

};



export default Navbar;