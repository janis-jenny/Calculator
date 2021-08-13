import homeStyle from '../style/home.module.css';
import magician from '../images/magician.gif';

const Home = () => (
  <div className={homeStyle.home}>
    <h1>Where Math Magic Happens</h1>
    <img src={magician} alt="" />
  </div>
);

export default Home;
