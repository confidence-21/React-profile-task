import { useState, useEffect } from "react";import "./App.css";

// Component 1: Profilefunction Profile({ name, course }) {return (<section className="card"><h2>{name}</h2><p>{course}</p><p>A beginner learning frontend development with React.</p></section>);}

// Component 2: Skillsfunction Skills({ skills }) {return (<section className="card"><h2>My Skills</h2>

{skills.map((skill) => (
    <span className="skill" key={skill}>
          {skill}
              </span>
                ))}
                </section>

                );}

                // Component 3: ProjectListfunction ProjectList({ projects }) {const [showProjects, setShowProjects] = useState(true);

                return (<section className="card"><h2>My Projects</h2>

                <button onClick={() => setShowProjects(!showProjects)}>
                    {showProjects ? "Hide Projects" : "Show Projects"}
                      </button>

                        {showProjects && (
                            <div>
                                  {projects.map((project) => (
                                          <div className="project" key={project.id}>
                                                    <h3>{project.title}</h3>
                                                              <p>{project.description}</p>
                                                                      </div>
                                                                            ))}
                                                                                </div>
                                                                                  )}
                                                                                  </section>

                                                                                  );}

                                                                                  // Component 4: Appfunction App() {const [lastLoaded, setLastLoaded] = useState("");

                                                                                  const skills = ["HTML", "CSS", "JavaScript", "React"];

                                                                                  const projects = [{id: 1,title: "Personal Profile",description: "A website introducing me and my skills.",},{id: 2,title: "Solar Energy System",description: "A project idea for monitoring solar energy.",},{id: 3,title: "Student Dashboard",description: "A simple dashboard for displaying student information.",},];

                                                                                  useEffect(() => {setLastLoaded(new Date().toLocaleString());}, []);

                                                                                  return (<main className="container"><h1>My Developer Profile</h1>

                                                                                  <p className="intro">
                                                                                      Welcome to my personal website!
                                                                                        </p>

                                                                                          <Profile
                                                                                              name="Confidence Ochindo"
                                                                                                  course="Computer Engineering Student"
                                                                                                    />

                                                                                                      <Skills skills={skills} />

                                                                                                        <ProjectList projects={projects} />

                                                                                                          <p className="footer">
                                                                                                              Page loaded: {lastLoaded}
                                                                                                                </p>
                                                                                                                </main>

                                                                                                                );}

                                                                                                                export default App;

                                                                                                                
                                                                                                                import { useState, useEffect } from "react";
                                                                                                                import "./App.css";

                                                                                                                // Component 1: Profile
                                                                                                                function Profile({ name, course }) {
                                                                                                                  return (
                                                                                                                      <section className="card">
                                                                                                                            <h2>{name}</h2>
                                                                                                                                  <p>{course}</p>
                                                                                                                                        <p>A beginner learning frontend development with React.</p>
                                                                                                                                            </section>
                                                                                                                                              );
                                                                                                                                              }

                                                                                                                                              // Component 2: Skills
                                                                                                                                              function Skills({ skills }) {
                                                                                                                                                return (
                                                                                                                                                    <section className="card">
                                                                                                                                                          <h2>My Skills</h2>

                                                                                                                                                                {skills.map((skill) => (
                                                                                                                                                                        <span className="skill" key={skill}>
                                                                                                                                                                                  {skill}
                                                                                                                                                                                          </span>
                                                                                                                                                                                                ))}
                                                                                                                                                                                                    </section>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      }

                                                                                                                                                                                                      // Component 3: ProjectList
                                                                                                                                                                                                      function ProjectList({ projects }) {
                                                                                                                                                                                                        const [showProjects, setShowProjects] = useState(true);

                                                                                                                                                                                                          return (
                                                                                                                                                                                                              <section className="card">
                                                                                                                                                                                                                    <h2>My Projects</h2>

                                                                                                                                                                                                                          <button onClick={() => setShowProjects(!showProjects)}>
                                                                                                                                                                                                                                  {showProjects ? "Hide Projects" : "Show Projects"}
                                                                                                                                                                                                                                        </button>

                                                                                                                                                                                                                                              {showProjects && (
                                                                                                                                                                                                                                                      <div>
                                                                                                                                                                                                                                                                {projects.map((project) => (
                                                                                                                                                                                                                                                                            <div className="project" key={project.id}>
                                                                                                                                                                                                                                                                                          <h3>{project.title}</h3>
                                                                                                                                                                                                                                                                                                        <p>{project.description}</p>
                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                                                                                                                                </section>
                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                  // Component 4: App
                                                                                                                                                                                                                                                                                                                                                  function App() {
                                                                                                                                                                                                                                                                                                                                                    const [lastLoaded, setLastLoaded] = useState("");

                                                                                                                                                                                                                                                                                                                                                      const skills = ["HTML", "CSS", "JavaScript", "React"];

                                                                                                                                                                                                                                                                                                                                                        const projects = [
                                                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                                                  id: 1,
                                                                                                                                                                                                                                                                                                                                                                        title: "Personal Profile",
                                                                                                                                                                                                                                                                                                                                                                              description: "A website introducing me and my skills.",
                                                                                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                                                                                                                                            id: 2,
                                                                                                                                                                                                                                                                                                                                                                                                  title: "Solar Energy System",
                                                                                                                                                                                                                                                                                                                                                                                                        description: "A project idea for monitoring solar energy.",
                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                                                                                                      id: 3,
                                                                                                                                                                                                                                                                                                                                                                                                                            title: "Student Dashboard",
                                                                                                                                                                                                                                                                                                                                                                                                                                  description: "A simple dashboard for displaying student information.",
                                                                                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                                                                                        ];

                                                                                                                                                                                                                                                                                                                                                                                                                                          useEffect(() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                              setLastLoaded(new Date().toLocaleString());
                                                                                                                                                                                                                                                                                                                                                                                                                                                }, []);

                                                                                                                                                                                                                                                                                                                                                                                                                                                  return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                      <main className="container">
                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h1>My Developer Profile</h1>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p className="intro">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Welcome to my personal website!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <Profile
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              name="Confidence Ochindo"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      course="Computer Engineering Student"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <Skills skills={skills} />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <ProjectList projects={projects} />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <p className="footer">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Page loaded: {lastLoaded}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }

export default App
