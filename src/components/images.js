import DeleteImage from './buttons/deleteImage';
import ModalImage from './modals/modalImage';

const Images = ({ images, machine_id }) => {
    const style_div = {
        border:"1px solid black",
        margin:"2%",
        width:"25%",
        display:"inline-block"
    }

    return (
        <div>
            {images.map((image) => (
                <div key={image.id} style={style_div}>
                    <p>Type: {image.type}</p>
                    <p>Url: {image.url}</p>
                    <DeleteImage image={image}/>
                </div>
            ))}
            <ModalImage machine_id={machine_id} />
        </div>
    )
  };

  export default Images