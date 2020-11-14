const DeleteMachine = ({machine}) => {  
  let deleteMachine = () => {
    fetch('http://localhost:8000/api/machine/'+machine.id,{
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
    })
    .then(()=> {
      window.location.reload();
    })
    .catch((error) => {
      console.error(error)
    })
  }
    return (
      <div>
        <button onClick={deleteMachine}>Delete Machine</button>
      </div>
    )
  };

export default DeleteMachine