import navbarStyle from '../style/navbar.module.css';

const Navbar = () => (
  <div className={navbarStyle.navbar}>
    <h1>Math Magicians</h1>
    <a href="/home">Home</a>
    <a href="/">Calculator</a>
    <a href="/quote">Quotes</a>
  </div>
);

export default Navbar;
