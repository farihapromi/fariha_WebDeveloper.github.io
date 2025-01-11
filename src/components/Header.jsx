import { useEffect } from 'react';


const Header = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-links a");
    const toggleMenuButton = document.getElementById("toggle-menu");
    const menu = document.getElementById("skills_project");

    
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
       
        links.forEach((link) => link.classList.remove("active"));
        
        event.target.classList.add("active");
      });
    });

   
    const handleToggleMenu = () => {
      menu.classList.toggle("show");
    };

    toggleMenuButton.addEventListener("click", handleToggleMenu);

  
    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
      toggleMenuButton.removeEventListener("click", handleToggleMenu);
    };
  }, []);

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
