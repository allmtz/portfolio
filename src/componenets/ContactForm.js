function ContactForm() {
  return (
    <div id="contact" className="slide">
      <h1 className="underline">Contact</h1>
      <p>Send me a message</p>
      <div className="column contact-form">
        <form action="https://formspree.io/f/mdojgdjo" method="POST">
          <p>Name</p>
          <input type="text" name="name" id="" />
          <p>Email</p>
          <input type="text" name="email" id="" required />
          <p>Message</p>
          <textarea
            name="message"
            className="message-box"
            cols="30"
            rows="10"
          ></textarea>
          <button className="contact" type="submit">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export { ContactForm };
