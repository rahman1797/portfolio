import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import emailkey from '../../helper/emailkey';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group my-2">
        <label for="name">Name:</label>
        <input id="name" type="text" name="name" className="form-control" placeholder="Enter your name" />
      </div>
      <div className="form-group my-2">
        <label for="contact">Email / Phone:</label>
          <input id="contact" type="text" name="contact" className="form-control" placeholder="Enter email/phone" />
          <small className="text-muted">I'll never share you email/phone to other</small>
        </div>
      <div className="form-group my-2">
        <label for="message">Message:</label>
        <textarea id="message" className="form-control" name="message" />
      </div>
      <div className="form-group mx-auto my-2">
        <input className="btn btn-primary" type="submit" value="Send" />
      </div>
      {/* <button type="submit" className="btn btn-primary">Submit</button>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" /> */}
      
    </form>
  );
};