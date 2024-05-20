import resumePDF from '../../assets/matt-christopherson-resume.pdf'

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
        <div>
          <h2>Resume</h2>
          <p>
            <a href={resumePDF} download="Matt_Christopherson_Resume.pdf">
              Download My Resume
            </a>
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