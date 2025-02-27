const Input = ({ placeholder, change, num }) => {
  return (
    <div>
      <input
        onChange={(e) => change(e, num)}
        placeholder={placeholder}
        style={{
          border: "1px solid #efefef",
          borderRadius: "20px",
          width: "300px",
          outline: "none",
          fontSize: "20px",
          padding: "10px 20px",
        }}
        type="text"
      />
    </div>
  );
};

export default Input;
