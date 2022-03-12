import "../Styles/Navbar.css";

export default function () {
  return (
    <div class="navbar">
      <nav>
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#product">Products</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="/login">Order</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
