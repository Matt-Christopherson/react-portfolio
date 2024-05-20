// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
import { useForm } from 'react-hook-form';

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              onBlur={() => trigger('name')}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
    
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Entered value does not match email format',
                },
              })}
              onBlur={() => trigger('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
    
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              onBlur={() => trigger('message')}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>
    
          <button type="submit">Submit</button>
        </form>
      );
}