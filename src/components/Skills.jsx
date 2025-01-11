

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skill_h1">Skills</h1>
      <div className="skills-container">
        <div className="skill-card">
          <h3>Core Skills</h3>
          <p>Data Structures and Algorithms, Software Testing, Operating Systems, Web Design and Programming, Object-Oriented Programming, Problem Solving, Scrum, Agile, Documentation, Database, System Analysis and Design</p>
        </div>
        <div className="skill-card">
          <h3>Framework & Library</h3>
          <p>Bootstrap, Express.js, Laravel, React.js, Tailwind CSS, Node.js, Next.js</p>
        </div>
        <div className="skill-card">
          <h3>Database</h3>
          <p>MySQL, MongoDB</p>
        </div>
        <div className="skill-card">
          <h3>Tools</h3>
          <p>Trello, Slack, Figma, Postman, Jira, Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
