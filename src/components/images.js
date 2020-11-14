import AddImage from './addImage';

const Images = ({ images }) => {
    const style_div = {
        border:"1px solid black",
        margin:"2%",
        width:"25%",
        display:"inline-block"
    }
    let addButton;

    return (
        <div>
            {images.map((image) => (
                <div key={image.id} style={style_div}>
                    <p>Type: {image.type}</p>
                    <p>Url: {image.url}</p>
                </div>
            ))}
            <AddImage />
        </div>
    )
  };

  export default Images