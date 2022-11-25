import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Job } from '../../types/Job';
import { Contacts } from '../Contacts/Contacts';
import { AttachedImages } from '../AttachedImages/AttachedImages';
import { setBodyColor } from '../../setBodyColor';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';
import { JobDetails } from '../JobDetails/JobDetails';
import './JobPage.css';

type Props = {
  jobs: Job[];
};

export const JobPage: React.FC<Props> = ({ jobs }) => {
  const { id } = useParams();
  const jobData = useMemo(
    () => jobs.find((job: Job) => job.id === id),
    [id, jobs]
  );
  const [jobItem, setJobItem] = useState<Job>();

  setBodyColor('#fff');

  useEffect(() => {
    if (jobData) {
      sessionStorage.setItem('job', JSON.stringify(jobData));
      setJobItem(jobData);
    }

    if (!jobItem) {
      const stored = sessionStorage.getItem('job');
      if (stored) {
        setJobItem(JSON.parse(stored));
      }
    }
  }, [jobData, jobItem]);

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-12 job__page">
      {jobItem && (
        <>
          <JobDetails
            title={jobItem.title}
            salary={jobItem.salary}
            createdAt={jobItem.createdAt}
            text={jobItem.description}
          />

          <AdditionalInfo
            employment_type={jobItem.employment_type}
            benefits={jobItem.benefits}
          />

          <AttachedImages pictures={jobItem.pictures} />

          <Link to="/" className="btn btn-secondary lg:order-5 lg:col-start-1">
            <span className="arrow"></span>
            RETURN TO JOB BOARD
          </Link>

          <Contacts
            location={jobItem.location}
            name={jobItem.name}
            address={jobItem.address}
            phone={jobItem.phone}
            email={jobItem.email}
          />
        </>
      )}
    </main>
  );
};
