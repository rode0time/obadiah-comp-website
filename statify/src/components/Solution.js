import React from 'react';
import '../Styles/Solution.css';

const Solutions = () => {
 
  const solutions = [
    { id: 1, title: 'ERP Solutions', description: 'Comprehensive ERP solutions for businesses' },
    { id: 2, title: 'Cloud Services', description: 'Scalable and secure cloud computing services' },
    { id: 3, title: 'Consulting Services', description: 'Expert consulting to optimize your business processes' },
    // Add more solutions as needed
  ];

  return (
    <div className="solutions-page">
      <h1>Our Solutions</h1>
      <div className="solution-list">
        {solutions.map((solution) => (
          <div key={solution.id} className="solution-item">
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
