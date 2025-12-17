const AboutMe = () => {
  return (
    <section className='flexible-container' id='about_me'>
      <div className='half-width'>
        <h1 className='about-me'>About Me</h1>
        <p className='about-me-para'>
          Full Stack Developer with experience in JavaScript, TypeScript, React,
          Next.js, C, C++, Python, and Golang. Skilled in building responsive
          web applications, RESTful APIs, and maintaining code quality. Strong
          interest in Software Quality Assurance (SQA), including testing,
          debugging, and quality improvement. Passionate about developing
          reliable, scalable, and maintainable software solutions.
        </p>
      </div>
      <div className='half-width profile-container'>
        <img
          src='/images/fariha.jpeg'
          alt='Fariha Promi'
          className='profile-image'
        />
      </div>
    </section>
  );
};

export default AboutMe;
