import ImageShow from "./ImageShow";
import './ImageList.css'

function ImageList({images}) {
    const renderedImg = images.map((image) => {
        return <ImageShow image={image} key={image.id}/>
    })
    return (
        <div className="image-list">
            {renderedImg}
        </div>
    )
  }
  
  export default ImageList;