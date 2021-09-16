//example of iterating
// const names = ["john", "mike", "abigail"];
// const newName = names.map((name) => {
//   console.log(name);
//   //we display the h1 to list the param 'name'
//   return <h1>{name}</h1>;
// });
// console.log(newName);

//without spread operators

// const Cars = (props) => {
//   const { carModel, carName, price, img } = props.car;
//   return (
//     <div className="cars">
//       <img src={img} className="images" />
//       <h1 className="text">{carName}</h1>
//       <h3 className="text1">{carModel}</h3>
//       <h4 className="text1">{price}</h4>
//     </div>
//   );
// };
// function App() {
//   return (
//     <div className="carshowroom">
//       {cars.map((car, index) => {
//         return <Cars key={index} car={car}></Cars>;
//       })}
//     </div>
//   );
// }

//with spread operators
const Cars = ({ carModel, carName, price, img, id }) => {
  const clickHandler = () => {
    alert("Thanks for Puchasing of this car, Kindly check your garage");
  };

  return (
    <div className="cars">
      <img src={img} className="images" />
      <h1 className="text">{carName}</h1>
      <h3 className="text1">{carModel}</h3>
      <h4 className="text1">{price}</h4>
      <button type="button" onClick={clickHandler}>
        Click to buy
      </button>
      <button type="button" onDoubleClick={clickHandler}>
        Double Click to buy with free shipment
      </button>
    </div>
  );
};

export default Cars;
