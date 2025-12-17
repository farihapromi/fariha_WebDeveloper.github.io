const Skills = () => {
  return (
    <section id='skills'>
      <h1 className='skill_h1'>Skills</h1>
      <div className='skills-container'>
        <div className='skill-card'>
          <h3>Core Skills</h3>
          <p>
            Data Structures and Algorithms Operating Systems, OOP, Problem
            Solving, Scrum, Agile, Software Testing, Documentation, Database,
            System Analysis and Design
          </p>
        </div>
        <div className='skill-card'>
          <h3>Programming Language</h3>
          <p>C++,JavaScript, TypeScript, Go, Python</p>
        </div>
        <div className='skill-card'>
          <h3>Framework & Library</h3>
          <p>React.js, Next.js, Express.js, Node.js, Laravel,Tailwind CSS</p>
        </div>
        <div className='skill-card'>
          <h3>Database</h3>
          <p>MySQL, MongoDB, PostgreSql</p>
        </div>
        <div className='skill-card'>
          <h3>Tools & Containerirzation</h3>
          <p> Docker, CI/CD, Trello, Slack, Figma, Postman, Jira, Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
