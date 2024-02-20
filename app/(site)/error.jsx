"use client";

export default function Error({ error, reset }) {
  return (
    <div className="container_error">
      <h2 className="title_error">Something went wrong !</h2>

      <button onClick={() => reset()} className="btn_error">
        Try Again
      </button>
    </div>
  );
}
