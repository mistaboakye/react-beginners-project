import { cars } from "./Cars";
import Cars from "./Car";
import "./App.css";

function App() {
  return (
    <div className="carshowroom">
      {cars.map((car) => {
        //   console.log(car);
        // we use the spread operator to call all the items
        return <Cars key={cars.id} {...car}></Cars>;
      })}
    </div>
  );
}

export default App;
