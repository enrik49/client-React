const DeleteImage = ({image}) => {  
      let deleteImage = () => {
        fetch('http://localhost:8000/api/image/'+image.id,{
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
          <button onClick={deleteImage}>Delete Image</button>
        </div>
      )
    };
  
export default DeleteImage