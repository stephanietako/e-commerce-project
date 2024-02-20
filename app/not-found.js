import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="error_page"
      style={{
        display: "flex",
        width: "70%",
        height: "70%",
        border: "3px solid blue",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        className="error_page"
        style={{
          color: "red",
        }}
      >
        Not found – 404!!!!!
      </h1>
      <p>
        <Link href="/">Go back to Home</Link>
      </p>
    </div>
  );
}
