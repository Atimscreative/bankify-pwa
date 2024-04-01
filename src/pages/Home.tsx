import { Link } from "react-router-dom";
import CreditCard from "../components/CreditCard";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      {/* HEADER */}
      <Navbar />
      {/*  */}
      <div className="font-bold text-green-600">
        <Link to={"/dashboard"}>dashboard</Link>
        <CreditCard />
      </div>
    </>
  );
};

export default Home;
