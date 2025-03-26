import { useEffect, useRef } from "react";
import Card from "./Card";
import "./index.css";



function App() {
  const projects = [
    {
      title: "E-commerce Website",
      students: ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown","aml"],
      link: "https://example.com/ecommerce",
    },
    {
      title: "Machine Learning App",
      students: ["Charlie Davis", "Emily White", "Michael Green"],
      link: "https://example.com/ml-app",
    },
    {
      title: "Machine Learning App",
      students: ["Charlie Davis", "Emily White", "Michael Green"],
      link: "https://example.com/ml-app",
    },
    {
      title: "E-commerce Website",
      students: ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown","aml"],
      link: "https://example.com/ecommerce",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 } // يبدأ التأثير عند ظهور 30% من العنصر
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div ref={(el) => (cardRefs.current[index] = el)} key={index} className="hidden">
          <Card projectTitle={project.title} students={project.students} projectLink={project.link} />
        </div>
      ))}
    </div>
  );
}

export default App;