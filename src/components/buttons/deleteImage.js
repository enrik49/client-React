const DeleteImage = ({image}) => {  
      let deleteImage = () => {
        fetch('http://localhost:8000/api/image/'+image.id,{
          method: 'DELETE',
          headers: {'Content-Type':'application/json'},
        })
        .then(()=> {
          
        })
        .catch((error) => {
          console.error(error)
        })

      }
      return (
        <div>
          <button onClick={deleteImage}>Delete Image</button>
        </div>
      )
    };
  
export default DeleteImage