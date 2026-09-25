import "./TabButton.css";

export default function TabButton({ children, ...props }) {
  return (
    <>
      <button {...props} >
        {children}
      </button>
    </>
  );
}
