import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getAllJobs } from './api';
import { Job } from './types/Job';
import { JobsPage } from './components/JobsPage/JobsPage';
import { NotFoundPage } from './components/NotFountPage/NotFoundPage';
import { JobPage } from './components/JobPage/JobPage';

interface Error {
  hasError: boolean;
  message: string;
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<Error>({
    hasError: false,
    message: '',
  });
    
  const loadAllJobs = async () => {
    try {
      const data = await getAllJobs();

      setJobs(data);      
    } catch (error: any) {
      setError({
        hasError: true,
        message: error.message,
      });
    }
  };

  useEffect(() => {    
    loadAllJobs();
  }, []);

  if (error.hasError) {
    return <p>{error.message}</p>;
  }

  return (    
    <Routes>
      <Route path='/' element={<JobsPage jobs={jobs} />} />
      <Route path='jobs/:id' element={<JobPage jobs={jobs} />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>    
  );
};

export default App;
