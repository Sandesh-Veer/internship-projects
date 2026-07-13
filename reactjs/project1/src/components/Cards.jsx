import "./Cards.css";

function Cards(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Profile" />
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  );
}

export default Cards;