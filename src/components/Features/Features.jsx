import { feature } from "../../mockData/mockData";
import "./Features.css";

const Features = () => {
  return (
    <div className="container flex">
      {feature.map((item) => (
      <div className="feature">
        <item.icon className="icon" />
        <h4> {item.title} </h4>
        <p> {item.details} </p>
      </div>
      ))}
    </div>
  );
};

export default Features;



