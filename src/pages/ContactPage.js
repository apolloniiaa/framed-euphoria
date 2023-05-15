import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, do something with the data (e.g., send it to a server)
      console.log('Form submitted:', { name, email, message });

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className='error'>{errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className='error'>{errors.email}</span>}
      </div>

      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <span className='error'>{errors.message}</span>}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default ContactPage;
