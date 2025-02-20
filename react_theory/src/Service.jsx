const Service = (props) => {
  const style = {
    serviceBoxStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    iconStyle: {
      width: "100px",
      height: "100px",
      borderRadius: "9999px",
      fontSize: "40px",
      backgroundColor: "#e6e6e6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
    },
    textStyle: {
      fontSize: "13px",
    },
  };

  return (
    <div>
      <div style={style.serviceBoxStyle}>
        <div style={style.iconStyle}>{props.icon}</div>
        <strong style={style.textStyle}>{props.serviceName}</strong>
      </div>
    </div>
  );
};

export default Service;
