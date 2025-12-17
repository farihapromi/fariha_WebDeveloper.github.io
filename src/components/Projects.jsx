const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='project'>Projects</h1>
      <div className='project-grid'>
        <div className='project-card'>
          <h3>Job Launche</h3>
          <p>Description</p>
          <p>
            A job portal for posting, applying, and managing jobs with a clean,
            responsive CRUD interface using React.js, JavaScript, Node.js,
            MongoDB, Firebase, Tailwind CSS.
          </p>
          <a href='https://job-portal-crud-pi.vercel.app/'>View Project</a>
        </div>
        <div className='project-card'>
          <h3>ContentCrafter</h3>
          <p>Description</p>
          <p>
            An AI-powered content generation tool built with Next.js, React, and
            Clerk for authentication — featuring customizable templates and rich
            text editing for fast, creative writing.
          </p>
          <a href='https://ai-content-generator-1cbx8o646-farihas-projects-98c29e65.vercel.app/'>
            View Project
          </a>
        </div>
        <div className='project-card'>
          <h3>HeavenStay</h3>
          <p>Description</p>
          <p>
            A full-stack hotel booking app where users can browse and book
            hotels, check availability, and owners can manage hotels and rooms
            using React.js, JavaScript, Clerk, MongoDB, Node.js, Express.js,
            Nodemailer.
          </p>
          <a href='https://heaven-stay-teal.vercel.app/'>View Project</a>
        </div>
        <div className='project-card'>
          <h3>Unishop Ecommerce</h3>
          <p>Description</p>
          <a href='https://unishop-ecommerce.onrender.com/'>View Project</a>
        </div>

        <div className='project-card'>
          <h3>FuelEase Slot Booking System</h3>
          <p>Description</p>
          <p>
            Built a fuel-station slot booking platform with customer
            reservations and admin management, using Next.js, React.js,
            TypeScript, Prisma, PostgreSQL, Tailwind CSS, and Clerk.{' '}
          </p>
          <a href='https://cng-slot-booking-system.vercel.app/'>View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
