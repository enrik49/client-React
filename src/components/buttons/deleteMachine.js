const DeleteMachine = ({machine}) => {  
  let deleteMachine = () => {
    /*fetch('http://localhost:8000/api/machine/'+machine.id,{
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
    })
    .then(()=> {
      
    })
    .catch((error) => {
      console.error(error)
    })*/
    this.state.machines.splice(,1);
  }
    return (
      <div>
        <button onClick={deleteMachine}>Delete Machine</button>
      </div>
    )
  };

export default DeleteMachine