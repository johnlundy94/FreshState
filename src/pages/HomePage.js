import "../components/Navbar";
import "../Styles/HomePage.css";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Fresh State Kombucha Cocktail</h1>
        <br />
        <h2>High Quality Ingredients And Exciting Flavors!</h2>
      </div>
      <br />
      <div>
        <h3 id="about">About Us</h3>
        <div className="AboutUs">
          <p>
            After years of being in the kombucha industry, we have seen our
            friends, community, and ourselves making our weekend and evening
            cocktails with kombucha. Why not just give everyone the ability to
            enjoy these handcrafted kombucha cocktails at their own convenience.
            No time to mix up a cocktail? We got you. Want to take your favorite
            kombucha cocktail outdoors without hauling all the ingredients and
            tools to make it? We got you. Looking for a ready to drink cocktail
            that's low in sugar with no artificial ingredients? We got you! With
            flavors like TIki Style Guava Rum and a Grapefruit Vodka, you can
            pour these refreshing cocktails over ice with split between friends
            or drink straight from the can!
          </p>
        </div>
        <h3 id="product" className="products">
          Products
        </h3>
        <div className="Products">
          <ImageSlider slides={SliderData} />
        </div>
      </div>
    </>
  );
}
