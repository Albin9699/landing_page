const Heading = (props) => {
  return (
    <div className="text-4xl font-semibold">
      {props.title1}
      <span className="text-brightGreen"> {props.title2}</span>
    </div>
  );
}
export default Heading