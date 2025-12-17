const AboutMe = () => {
  return (
    <section className='flexible-container' id='about_me'>
      <div className='half-width'>
        <h1 className='about-me'>About Me</h1>
        <p className='about-me-para'>
          I am a Full Stack Developer with hands-on experience in JavaScript,
          TypeScript, Next.js, React, C, C++, Python, and Golang. I have built
          scalable, responsive, and user-friendly web applications with a strong
          focus on clean code, performance, and maintainability. Alongside
          development, I have a strong interest in Software Quality Assurance
          (SQA), including testing, debugging, and ensuring application
          reliability. I enjoy combining technical expertise with
          quality-focused practices to deliver robust and high-performing
          software solutions.
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
