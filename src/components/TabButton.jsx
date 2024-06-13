export default function TabButton({children, click, isClicked}) {
  
  return (
    <li className="nav-item">
      <button className={isClicked ? "nav-link active" : "nav-link"} onClick={click}>
        {children}
      </button>
    </li>
  );
}
