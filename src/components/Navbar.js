import navbarStyle from '../style/navbar.module.css';

const Navbar = () => (
  <div className={navbarStyle.navbar}>
    <h1>Math Magician</h1>
    <a href="/">Home</a>
    <a href="/Calculator">Calculator</a>
    <a href="/Quotes">Quotes</a>
  </div>
);

export default Navbar;
