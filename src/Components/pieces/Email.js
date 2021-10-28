import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import emailkey from '../../helper/emailkey';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Email = () => {
  const form = useRef();

  const [send, setSend] = useState(false);

  const handleSend = (value) => setSend(value);

  const sendEmail = (e) => {
    e.preventDefault();

    handleSend(true);

    emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.USER_ID)
      .then((result) => {

        const MySwal = withReactContent(Swal);

        MySwal.fire({
            // title: <p>Hello World</p>,
            // footer: 'Copyright 2018',
            didOpen: () => {
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire({
                title: <strong>Thank you!</strong>,
                html: <i>for message me!</i>,
                icon: 'success'
            })
          });
          handleSend(false);
          form.current.reset();

          // console.log(result.text);
      }, (error) => {
          // console.log(error.text);
      });
  };
  

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group my-2">
        <label className="form-label" for="name">Name:</label>
        <input id="name" type="text" name="name" className="form-control" placeholder="Enter your name" />
      </div>
      <div className="form-group my-2">
        <label className="form-label" for="contact">Email / Phone:</label>
          <input id="contact" type="text" name="contact" className="form-control" placeholder="Enter email/phone" />
          <small className="text-gold">I'll never share you email/phone to other</small>
        </div>
      <div className="form-group my-2">
        <label className="form-label" for="message">Message:</label>
        <textarea id="message" className="form-control" rows="5" name="message" />
      </div>
      <div className="form-group mx-auto">
        <button className={`btn btn-info my-4 w-100 ${send ? 'disabled' : ''}`} type="submit"><img className={`loading ${send ? '' : 'd-none'}`} src="/portfolio/assets/icons/loading.svg" alt="loading" /> {send ? 'Sending...' : 'Send'}</button>
      </div>
      
    </form>
  );
};