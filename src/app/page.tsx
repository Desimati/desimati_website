import About from "./Component/About";
import ClientReview from "./Component/ClientReview";
import Home from "./Component/Home";
import OurTeam from "./Component/OurTeam";
import Ourworks from "./Component/Ourworks";

export default function Homepage() {
  return (
    <div>
      <Home />
      <About />
      <Ourworks />
      <OurTeam />
      <ClientReview />
    </div>
  );
}