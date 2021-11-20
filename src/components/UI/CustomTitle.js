const CustomTitle = (props) => {
  return (
    <div className="centered">
      <h1 className="title">{props.title}</h1>
      <div className="underline" />
    </div>
  );
};

export default CustomTitle;
