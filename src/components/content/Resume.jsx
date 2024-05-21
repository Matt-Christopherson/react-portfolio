import resumePDF from '../../assets/matt-christopherson-resume.pdf';
import './Resume.css';

export default function Resume() {
	const proficiencies = [
		'JavaScript',
		'React',
		'Node.js',
		'Express.js',
		'MongoDB',
		'HTML',
		'CSS',
		'Git',
		'Bootstrap',
	];

	return (
		<div className="contentcontainer">
			<h1>Resume</h1>
			<p>
				<button
					onClick={() => window.open(resumePDF, '_blank')}
					download="Matt_Christopherson_Resume.pdf"
				>
					Download My Resume
				</button>
			</p>
			<h3>Proficiencies</h3>
			<ul>
				{proficiencies.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</div>
	);
}
