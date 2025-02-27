const Input = (props) => {
  const { placeholder, change } = props;
  return (
    <div>
      <input onChange={change} placeholder={placeholder} type="text" />
    </div>
  );
};

export default Input;
