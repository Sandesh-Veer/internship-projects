import { createRoot } from "react-dom/client";
import Cards from "./components/Cards";

function Main() {
  return (
    <div className="container">
      <Cards
        image="https://picsum.photos/200?random=1"
        name="Pawan"
        role="Frontend Developer"
      />

      <Cards
        image="https://picsum.photos/200?random=2"
        name="Rahul"
        role="React Developer"
      />

      <Cards
        image="https://picsum.photos/200?random=3"
        name="Sneha"
        role="UI Designer"
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Main />);