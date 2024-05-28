const HR = ({ color }) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: "4px",
        width: "75rem",
        borderRadius: "100%",
      }}
    />
  );
};

export default HR;
