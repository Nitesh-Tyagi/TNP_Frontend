import React, { useEffect, useState } from 'react';
import ActiveItem from './ActiveItem';

const ActiveForms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms();
  }, []);

  const getForms = async () => {
    try {
      const response = await fetch('http://localhost:8000/getForms/?userId=1&status=0', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include', // add this option
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      setForms(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="active-forms">
      {forms.map((form) => (
        <ActiveItem key={form.FormID} form={form} />
      ))}
    </div>
  );
};

export default ActiveForms;
