import Image from "next/image";

const CartBtn = ({ img, onClick }) => {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
  };
  const spanStyle = {
    textAlign: "center",
  };
  return (
    <button type="button" onClick={onClick} style={buttonStyle}>
      <Image src={img} alt="Cart" />
      <span style={spanStyle}>Cart</span>
    </button>
  );
};

export default CartBtn;
