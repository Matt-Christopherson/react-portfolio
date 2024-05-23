import './AboutMe.css';
import assets from '../../assets.jsx';

export default function AboutMe() {
	return (
		<div className="contentcontainer">
			<h1 id="aboutme">About Me</h1>
			<div className="row">
				<div className="col">
					<img
						id="portrait"
						src={assets.portrait}
						alt="Portrait image of Matt Christopherson"
						width="500"
					></img>
				</div>
				<div className="col" id="info">
					<h2>Education</h2>
					<p>
						I earned an Associate Degree from Utah State University after two
						years of dedicated study. Subsequently, I advanced my education in
						full stack web development by completing an intensive online
						bootcamp offered by the University of Utah.
					</p>
					<h2>Skills</h2>
					<p>
						I excel in collaborative environments and enjoy tackling challenging
						problems with innovative solutions. My strong attention to detail is
						a point of pride, and I am highly adaptable and quick to learn new
						skills.
					</p>
				</div>
			</div>
		</div>
	);
}
