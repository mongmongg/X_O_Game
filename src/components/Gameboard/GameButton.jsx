import "./BoardBox.css";
export default function BoardBox({ children = "", ...props }) {
  return (
    <>
      <button className="box" {...props}>
        {children}
      </button>
    </>
  );
}
