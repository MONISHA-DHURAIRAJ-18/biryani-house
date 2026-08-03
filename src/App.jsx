import { Routes, Route } from "react-router-dom";


// Main Pages
import Home from "./pages/Home";
import Veg from "./pages/Veg";
import NonVeg from "./pages/NonVeg";
import Beverages from "./pages/Beverages";
import Desserts from "./pages/Desserts";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";


// Non Veg Pages
import Chicken from "./pages/Chicken";
import Mutton from "./pages/Mutton";
import Fish from "./pages/Fish";
import Prawn from "./pages/Prawn";


// Beverage Pages
import Coffee from "./pages/Coffee";
import Juice from "./pages/Juice";
import MilkShake from "./pages/MilkShake";
import CoolDrinks from "./pages/CoolDrinks";


// Dessert Pages
import IceCream from "./pages/IceCream";
import Cake from "./pages/Cake";
import CupCake from "./pages/CupCake";
import Cookies from "./pages/Cookies";



function App() {


  return (

    <div

      style={{
        minHeight:"100vh",
        fontFamily:"Arial, sans-serif",
        background:"#fff7ef"
      }}

    >


      <Routes>



        {/* Main Pages */}


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/veg"
          element={<Veg />}
        />


        <Route
          path="/nonveg"
          element={<NonVeg />}
        />


        <Route
          path="/beverages"
          element={<Beverages />}
        />


        <Route
          path="/desserts"
          element={<Desserts />}
        />


        <Route
          path="/about"
          element={<About />}
        />


        <Route
          path="/offers"
          element={<Offers />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />





        {/* Non Veg Varieties */}


        <Route
          path="/chicken"
          element={<Chicken />}
        />


        <Route
          path="/mutton"
          element={<Mutton />}
        />


        <Route
          path="/fish"
          element={<Fish />}
        />


        <Route
          path="/prawn"
          element={<Prawn />}
        />






        {/* Beverage Varieties */}


        <Route
          path="/coffee"
          element={<Coffee />}
        />


        <Route
          path="/juice"
          element={<Juice />}
        />


        <Route
          path="/milkshake"
          element={<MilkShake />}
        />


        <Route
          path="/cooldrinks"
          element={<CoolDrinks />}
        />






        {/* Dessert Varieties */}


        <Route
          path="/icecream"
          element={<IceCream />}
        />


        <Route
          path="/cake"
          element={<Cake />}
        />


        <Route
          path="/cupcake"
          element={<CupCake />}
        />


        <Route
          path="/cookies"
          element={<Cookies />}
        />



      </Routes>



    </div>

  );

}


export default App;