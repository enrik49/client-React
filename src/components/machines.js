import Images from './images';


import DeleteMachine from './buttons/deleteMachine';
import ModalMachine from './modals/modalMachine';

const Machines = ({ machines }) => {
  const style_div = {
    border:"1px solid black",
    margin:"2%"
  }
  const leftSide = {
    display:"inline-table",
    width:"70%"
  }
  const rightSide = {
    display:"inline-table",
    width:"30%"
  }

  return (
      <div>
        {machines.map((machine) => (
          <div key={machine.id} style={style_div}>
            <div style={leftSide}>
              <h5>Brand: {machine.brand}</h5>
              <p>Model: {machine.model}</p>
              <p>Manufacturer: {machine.manufacturer}</p>
              <p>Price: {machine.manufacturer}</p>
              <p>Images:</p>
              <Images images={machine.images}  machine_id={machine.id}/>
            </div>
            <div style={rightSide}>
              <ModalMachine machine={machine}/>
              <DeleteMachine machine={machine}/>
            </div>
          </div>
        ))}
      </div>
    )
  };

  export default Machines