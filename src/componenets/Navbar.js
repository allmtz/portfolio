function NavBar({ focusDefault, focusProjects, focusSkills }) {
  return (
    <nav>
      <div className="online-container">
        <div className="green-circle"></div>
        <p>online</p>
      </div>
      <ul>
        <li onClick={focusDefault}>Home</li>

        <li onClick={focusProjects}>Projects</li>
        <li onClick={focusSkills}>Skills</li>
      </ul>
    </nav>
  );
}

export { NavBar };
