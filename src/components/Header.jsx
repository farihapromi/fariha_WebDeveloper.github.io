


const Header = () => {
  return (
    <header>
      <h1 className="head-name">Fariha Promi</h1>
      <nav className="nav-links">
        <div className="toggle-menu" id="toggle-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul id="skills_project" className="menu">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about_me">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
