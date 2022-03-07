import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae
            nisi consectetur quas, exercitationem officiis, impedit sed laborum
            numquam cupiditate perferendis illum? Minima reiciendis amet dicta
            perspiciatis repellat doloribus eligendi!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        {/* image */}
        <img src={main} alt="main-img" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
