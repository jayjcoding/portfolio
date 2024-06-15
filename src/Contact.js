import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email address is invalid';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      emailjs.send(
        'service_3c9dnmg', // Replace with your EmailJS Service ID
        'template_dnnya7a', // Replace with your EmailJS Template ID
        formData,
        'aMhkrdaQwLC7zgvpd' // Replace with your EmailJS User ID
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      }).catch((err) => {
        console.error('FAILED...', err);
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-container">
      <div class="contactinfo">
        <h4> Contact Info</h4>
        <ul class='CInfo'>
          <li class='info-item'>
            <div class='icon'>
              <i class="icon_phone">
              </i>
            </div>

            <span> Phone: +91-7021677600 </span>
          </li>
          <li class='info-item'>
            <div class='icon'>
              <i class="icon_mail">
              </i>
            </div>
            <span>Email: <a href="mailto:jayjashnani@gmail.com">
              jayjashnani@gmail.com</a>
            </span>
          </li>
        </ul>
      </div>

      <div class="contactme">
        <h4>Contact Me</h4>
        {submitted ? (
          <div className="success-message">Thank you for your message!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
