// WHEN I am presented with the Portfolio section
//THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

export default function Portfolio() {
	return (
		<div class="container-xxl">
			<div class="row">
				<div class="col">
					<img
						className="portfolio-item"
						src="src\assets\weather.PNG"
						alt="Work Day Scheduler"
					/>
					https://matt-christopherson.github.io/matts-weather-dashboard/
				</div>
				<div class="col">
					<img
						className="portfolio-item"
						src="src\assets\scheduler.PNG"
						alt="Work Day Scheduler"
					/>
					https://matt-christopherson.github.io/christophersons-crazy-calendar/
				</div>
				<div class="col">
					<img
						className="portfolio-item"
						src="src\assets\scheduler.PNG"
						alt="Work Day Scheduler"
					/>
					https://matt-christopherson.github.io/christophersons-crazy-calendar/
				</div>
			</div>
			<div class="row">
				<div class="col">
					<img
						className="portfolio-item"
						src="src\assets\scheduler.PNG"
						alt="Work Day Scheduler"
					/>
					https://matt-christopherson.github.io/christophersons-crazy-calendar/
				</div>
				<div class="col">
					<img
						className="portfolio-item"
						src="src\assets\scheduler.PNG"
						alt="Work Day Scheduler"
					/>
					https://matt-christopherson.github.io/christophersons-crazy-calendar/
				</div>
				<div class="col">
					<img
						className="portfolio-item"
						src="src\assets\scheduler.PNG"
						alt="Work Day Scheduler"
					/>
					https://matt-christopherson.github.io/christophersons-crazy-calendar/
				</div>
			</div>
		</div>
	);
}
