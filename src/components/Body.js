function ImageData(props) {
  return (
    <div>
      <div key={props.id} className="column">
        <img src={props.img} alt=""></img>
      </div>
    </div>
  );
}

export default ImageData;