

const ContactMe = () => {
  return (
    <section id="contact">
      <h2 className="contact">Contact Me</h2>
      <p className="form-header">
        Let’s Connect! Have a question or an opportunity in mind? Feel free to reach out—I’d love to hear from you!
      </p>
      <form action="https://formspree.io/f/xqakbwpr" method="POST">
        <label htmlFor="name" className="name-form">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email" className="email-form">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message" className="message-form">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit" className="send-msg">Send Message</button>
      </form>
    </section>
  );
};

export default ContactMe;
