function NavBar() {
  return (
    <nav>
      <div className="online-container">
        <div className="green-circle"></div>
        <p>online</p>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
