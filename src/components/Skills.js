import React from 'react'

function Skills({darkmode}) {
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "MongoDB",
        "Responsive Web Design",
        "Git",
        "NodeJs",
        "SQL",
      ];
    
  return (
    <>
  {!darkmode ? 
    <section id="skills" className="py-12 bg-primary">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-white">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
              <p className="text-lg font-semibold">{skill}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section> : <section id="skills" className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-white">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
              <p className="text-lg font-semibold">{skill}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
}
</>
  );
};

export default Skills