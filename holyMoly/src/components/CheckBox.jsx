const CheckBox = ({ text, isNecessary, checked, event }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input type="checkbox" checked={checked} onChange={event} />
      <span>{text}</span>
      <span>{isNecessary ? "(필수)" : "(선택)"}</span>
    </div>
  );
};

export default CheckBox;
