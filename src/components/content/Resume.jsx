import resumePDF from '../../assets/Resume.pdf';
import './Resume.css';

export default function Resume() {
	return (
		<div className="contentcontainer">
			<h1>Resume</h1>
			<button
				id="download-button"
				onClick={() => window.open(resumePDF, '_blank')}
				download="Resume.pdf"
			>
				Download My Resume
			</button>
			<div id='iframe-container'>
				<iframe src={resumePDF} title="Matt Christopherson's Resume"></iframe>
			</div>
		</div>
	);
}
