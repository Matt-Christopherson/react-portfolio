import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { useState } from 'react';

export default function ContactForm() {
  const [emailSent, isEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Destructure isValid from formState
    trigger,
  } = useForm({ mode: 'onBlur' }); // Ensure validation runs onBlur

  const onSubmit = (data) => {
    if (!isValid) return; // Prevent submission if form is not valid

    const url = 'http://localhost:5000/send-email';
    const emailData = {
      from: {
        email: 'mailtrap@demomailtrap.com',
        name: data.name,
      },
      to: [
        {
          email: 'matthew.christopherson27@gmail.com',
        },
      ],
      subject: `Portfolio message from ${data.email}`,
      text: data.feedback,
      category: 'Integration Test',
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Email successfully sent!', data);
        isEmailSent(true);
      })
      .catch((error) => {
        console.error('Error:', error.message || error);
        isEmailSent(false);
      });
  };

  return (
    <div className="contentcontainer" id="contact-container">
      <h1>Contact</h1>
      <form className="test-mailing" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-item">
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Enter your message here"
            {...register('feedback', { required: 'Message is required' })}
            onBlur={() => trigger('feedback')}
            style={{ width: '100%', height: '150px' }}
          />
        </div>
        <div className="contact-item">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
            onBlur={() => trigger('name')}
          />
        </div>
        <div className="contact-item">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            onBlur={() => trigger('email')}
          />
        </div>
        {/* Display error messages if there are any */}
        {errors.feedback && <span className='message'>{errors.feedback.message}</span>}
        {errors.name && <span className='message'>{errors.name.message}</span>}
        {errors.email && <span className='message'>{errors.email.message}</span>}
        
        {/* Ensure submit button is enabled only when form is valid */}
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
        
        {emailSent && <span className='message' id='email-message'>Email successfully sent!</span>}
      </form>
    </div>
  );
}
