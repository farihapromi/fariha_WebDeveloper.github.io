

const AboutMe = () => {
  return (
    <section className="flexible-container" id="about_me">
      <div className="half-width">
        <h1 className="about-me">About Me</h1>
        <p className="about-me-para">
          I’m a front-end developer skilled in HTML, CSS, JavaScript, Next.js, C, C++, Python, and ReactJS, 
          focused on creating responsive and visually appealing websites. I enjoy combining creativity and 
          technical skills to build engaging web applications.
        </p>
      </div>
      <div className="half-width profile-container">
        <img src="/images/fariha.jpeg" alt="Fariha Promi" className="profile-image" />
      </div>
    </section>
  );
};

export default AboutMe;
