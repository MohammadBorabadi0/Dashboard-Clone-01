import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ordersData } from "../data/data";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const SliderShow = () => {
  return (
    <div className="w-full h-full">
      <Slide duration={1000} responsive={true}>
        {ordersData.map((order, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${order.image})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SliderShow;
