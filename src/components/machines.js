
import Images from './images';

const Machines = ({ machines }) => {
  const style_div = {
    border:"1px solid black",
    margin:"2%"
  }

    return (
      <div>
        {machines.map((machine) => (
          <div className="card" key={machine.id}>
            <div className="card-body" style={style_div}>
              <h5>Brand: {machine.brand}</h5>
              <p>Model: {machine.model}</p>
              <p>Manufacturer: {machine.manufacturer}</p>
              <p>Price: {machine.manufacturer}</p>
              <p>Images:</p>
              <Images images={machine.images}/>
            </div>
          </div>
        ))}
      </div>
    )
  };

  export default Machines