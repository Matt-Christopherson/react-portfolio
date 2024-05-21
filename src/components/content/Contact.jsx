// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
import { useForm } from 'react-hook-form';
import './Contact.css';

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
		<div className="contentcontainer" id='contact-container'>
			<h1>Contact</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='contact-item'>
					<p><label htmlFor="name">Name:</label></p>
					<input
						id="name"
						type="text"
						{...register('name', { required: 'Name is required' })}
						onBlur={() => trigger('name')}
					/>
				</div>

				<div className='contact-item'>
					<p><label htmlFor="email">Email:</label></p>
					<input
						id="email"
						type="email"
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

				<div className='contact-item'>
					<p><label htmlFor="message">Message:</label></p>
					<textarea
						id="message"
						{...register('message', { required: 'Message is required' })}
						onBlur={() => trigger('message')}
					/>
					
				</div>

				<div>
				<p>{errors.name && <span>{errors.name.message}</span>}</p>
				<p>{errors.email && <span>{errors.email.message}</span>}</p>
				<p>{errors.message && <span>{errors.message.message}</span>}</p>
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
