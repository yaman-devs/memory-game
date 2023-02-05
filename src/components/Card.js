function Card(props) {
  let name = props.name;
  let img = props.img;
  let style = props.style;
  let onButtonClick = props.onButtonClick;
  return (
    <div
      className="img-card"
      style={style}
      onClick={onButtonClick}
      data-name={name}
    >
      <img alt="Img" src={img} className="img"></img>
      <div className="desc">{name}</div>
    </div>
  );
}
export default Card;
