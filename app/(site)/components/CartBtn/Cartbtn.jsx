import Image from "next/image";

const CartBtn = ({ img, onClick }) => {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
  };
  const spanStyle = {
    textAlign: "center",
  };
  return (
    <button type="button" onClick={onClick} style={buttonStyle}>
      <Image src={img} alt="Cart" width={30} height={30} />
      {/* <span style={spanStyle}>Cart</span> */}
    </button>
  );
};

export default CartBtn;
