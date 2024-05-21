import './AboutMe.css';

export default function AboutMe() {
	return (
		<div className="contentcontainer">
			<h1>About Me</h1>
			<div className="row">
				<div className="col">
					<img
						src="./src/assets/portrait.png"
						alt="Portrait image of Matt Christopherson"
						width="500"
					></img>
				</div>
				<div className="col">
					<h2>Education</h2>
					<p>
						I studied for two years at Utah State University and graduated with
						an Associate Degree before moving on to study full stack web
						development through an online bootcamp hosted by the University of
						Utah.
					</p>
					<h2>Skills</h2>
					<p>
						I thrive when working with groups. I find it exciting to find unique
						solutions to difficult problems.
					</p>
				</div>
			</div>
		</div>
	);
}
