import './AboutMe.css';
import assets from '../../assets';

export default function AboutMe() {
	const proficiencies = [
		'JavaScript ES6+',
		'ReactJS',
		'HTML5',
		'CSS3',
		'Git',
		'Node.js',
		'Express.js',
		'MongoDB',
		'Bootstrap',
	];
	return (
		<div className="contentcontainer">
			<h1 id="aboutme">About Me</h1>
			<div className="row">
				<div className="col-12 col-md-6">
					<img
						id="portrait"
						src={assets.portrait}
						alt="Portrait image of Matt Christopherson"
						width="500"
					/>
				</div>
				<div className="col-12 col-md-6" id="info">
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
						skills. I work primarily with JavaScript, HTML, and CSS to build my
						sites, but I'm currently learning C#.
					</p>
					<h2>Proficiencies</h2>
					<ul>
						{proficiencies.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
