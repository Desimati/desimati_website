import About from "./Component/About";
import Home from "./Component/Home";
import Ourworks from "./Component/Ourworks";

export default function Homepage() {
  return (
    <div>
      <Home />
      <About />
      <Ourworks />
    </div>
  );
}