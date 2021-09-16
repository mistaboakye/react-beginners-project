//best place to import a an image
import Benz from "./images/Benz.jpg";
import BMW from "./images/BMW.jpg";
import Jaguar from "./images/jaguar.jpg";
import "./App.css";

const benz = {
  carName: "Mercedes",
  carModel: "2014",
  img: Benz,
  price: "$15,000",
};
const bmw = {
  carName: "BMW",
  carModel: "2016",
  img: BMW,
  price: "$25,000",
};
const jaguar = {
  carName: "Jaguar",
  carModel: "2019",
  img: Jaguar,
  price: "$25,000",
};
//destructuring props
//children props is everything rendered in between
//the opening and closing tags of a particular component
//it accepts the prop name 'children' and not any other name
//if u have destructed your props just add 'children'
//to your props as seen below
const Cars = ({ carModel, carName, price, img, children }) => {
  return (
    <div className="cars">
      <img src={img} className="images" />
      <h1 className="text">{carName}</h1>
      <h4 className="text1">{carModel}</h4>
      <p className="text1">{price}</p>
      <p>{children}</p>
    </div>
  );
};

function App() {
  return (
    <div className="carshowroom">
      <Cars
        img={benz.img}
        carName={benz.carName}
        carModel={benz.carModel}
        price={benz.price}
      >
        <p>
          DaVinci Resolve for Linux is a free download and does not require a
          license dongle or an activation. DaVinci Resolve Studio for Linux
          supports both the Mac/Windows dongle as well as the Advanced Panel
          dongle (previously known as the Linux dongle).
        </p>
      </Cars>
      <Cars
        img={bmw.img}
        carName={bmw.carName}
        carModel={bmw.carModel}
        price={bmw.price}
      />
      <Cars
        img={jaguar.img}
        carName={jaguar.carName}
        carModel={jaguar.carModel}
        price={jaguar.price}
      />
      <Cars
        img={benz.img}
        carName={benz.carName}
        carModel={benz.carModel}
        price={benz.price}
      />
      <Cars
        img={bmw.img}
        carName={bmw.carName}
        carModel={bmw.carModel}
        price={bmw.price}
      />
      <Cars
        img={jaguar.img}
        carName={jaguar.carName}
        carModel={jaguar.carModel}
        price={jaguar.price}
      />
    </div>
  );
}

export default App;
