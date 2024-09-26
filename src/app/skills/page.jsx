export default function Skills() {
    const skills = ['Power Apps', 'React Native', 'Node.js', 'SharePoint', 'Power Automate', 'JavaScript'];
  
    return (
      <div className="min-h-screen bg-primary py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-secondary mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-accent text-white py-2 px-4 rounded-lg text-lg m-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  