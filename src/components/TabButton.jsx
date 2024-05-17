export default function TabButton({children, click}) {
  return (
    <li className="nav-item">
      <button className="nav-link" onClick={click}>
        {children}
      </button>
    </li>
  );
}
