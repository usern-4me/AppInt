import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [classes, setClasses] = useState<any[]>([]);
  const [selectedClass, setSelectedClass] = useState<any>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch('https://www.dnd5eapi.co/api/classes/');
      const data = await response.json();
      setClasses(data.results);
    };
    fetchClasses();
  }, []);

  const handleClassSelect = async (classUrl: string) => {
    const response = await fetch(classUrl);
    const data = await response.json();
    setSelectedClass(data);
  };

  return (
    <div>
      <h1>Class previev</h1>
      <div>
        {classes.map(classItem => (
          <button
            key={classItem.index}
            onClick={() => handleClassSelect(classItem.url)}
          >
            {classItem.name}
          </button>
        ))}
      </div>
      {selectedClass && (
        <div className='status'>
          <h2>{selectedClass.name}</h2>
          <p>{selectedClass.hit_die} Hit Die</p>
          <h3>Proficiencies</h3>
          <ul>
            {selectedClass.proficiencies.map(
              (proficiency: any, index: number) => (
                <li key={index}>{proficiency.name}</li>
              )
            )}
          </ul>
          <h3>Proficiency Choices</h3>
          <ul>
            {selectedClass.proficiency_choices.map(
              (choice: any, index: number) => (
                <li key={index}>
                  {choice.choose} -{' '}
                  {choice.from.map((item: any) => item.name).join(', ')}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
