import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container SWteal rounded pb-5">
      <h1 className="">Welcome to SpiderWeb</h1>
      <div className="fs-2">
        <p>
          SpiderWeb is your guide to Idaho's Spiders. <br />
          Check out the&nbsp;
          <Link className="SWpurpletxt" to="/spiders">
            spiders
          </Link>
          , <br />
          learn some more{" "}
          <Link className="SWpurpletxt" to="/about">
            about us
          </Link>
          , <br />
          or{" "}
          <Link to="/give" className="SWpurpletxt">
            support us
          </Link>
          .
        </p>
        <img
          className="img-fluid rounded "
          alt="Large spider web in a small bush"
        />
      </div>
      <p>
        <small className="">Image by Andrii Lobur from Pexels.com</small>
      </p>
    </div>
  );
};

export default Home;
