function ImageShow({image}) {
    return (
      <div>
        <img src={image.urls.small} data-id={image.id} alt={image.alt_description} />
      </div>
    )
  }
  
  export default ImageShow;