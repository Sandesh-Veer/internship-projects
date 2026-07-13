import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card
        image="https://i.pravatar.cc/200?img=1"
        name="Pawan"
        role="<p>I am Pawan, a passionate Frontend Developer who enjoys creating modern, responsive, and user-friendly websites. I love learning new technologies, improving my coding skills, and building creative web applications. My goal is to become a skilled full-stack developer and contribute to innovative software projects in the future.</p>"
      />

      <Card
        image="https://i.pravatar.cc/200?img=2"
        name="Rahul"
        role="<p>I am Rahul, a dedicated React Developer with a strong foundation in JavaScript and modern web technologies. I am passionate about building scalable and maintainable applications, and I strive to write clean, efficient code. My experience includes working with various frontend libraries and frameworks, and I am always eager to learn and adapt to new tools and methodologies.</p>"
      />

      <Card
        image="https://i.pravatar.cc/200?img=3"
        name="Sneha"
        role="<p>I am Sneha, a creative UI/UX Designer with a keen eye for detail and a passion for creating intuitive user experiences. I specialize in designing beautiful, functional interfaces that enhance user satisfaction and engagement. My approach combines aesthetic sensibility with technical proficiency to deliver impactful design solutions.</p>"
      />
    </div>
  );
}

export default App;