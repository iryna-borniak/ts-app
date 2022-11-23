import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { Job } from '../../types/Job';
import { Map } from '../Map/Map';
import { JobPictures } from '../JobPictures/JobPictures';
import { setBodyColor } from '../../setBodyColor';
import { JobAdditionalInfo } from '../JobAdditionalInfo/JobAdditionalInfo';
import { JobDescription } from '../JobDescription/JobDescription';
import './JobPage.css';

export type Props = {
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

  const formatSalary = (salary?: string) => {
    const thousands = new RegExp(/k/g);
    const hyphen = new RegExp(/-/g);
    return salary?.replace(thousands, ' 000').replace(hyphen, '—');
  };

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-12 job__page">
      <section className="order-1 lg:order-1 lg:col-start-1 xl:col-start-2 lg:col-end-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 top-block">
          <h2 className="job__title-h2 job__title-h2--static">Job Details</h2>

          <ul className="top-details">
            <li className="flex lg:items-center">
              <span className="job__bookmark"></span>
              <span>Save to my list</span>
            </li>

            <li className="flex lg:items-center">
              <span className="share"></span>
              <span>Share</span>
            </li>
          </ul>
        </div>

        <button type="button" className="btn btn-primary btn-hidden">
          Apply now
        </button>

        <div className="grid grid-cols-2 xl:grid-cols-12 mt-8">
          <h1 className="col-start-1 col-end-3 lg:col-start-1 lg:col-end-10 job__title-h1">
            {jobItem?.title}
          </h1>

          <div className="grid order-2 lg:order-1 lg:col-start-10 lg:col-end-13 salary-block">
            <p className="order-2 lg:order-1 job__title-h3">
              &euro; {formatSalary(jobItem?.salary)}
            </p>

            <p className="order-1 lg:order-2">Brutto, per year</p>
          </div>

          <div className="order-1 lg:order-2 lg:col-start-1 lg:col-end-4 job__date my-2">
            Posted <Moment fromNow>{jobItem?.createdAt}</Moment>
          </div>
        </div>

        {jobItem && (
          <JobDescription jobItem={jobItem} />
        )}

        <button type="button" className="btn btn-primary">
          Apply now
        </button>
      </section>

      <section className="order-3 lg:order-3 lg:col-start-1 xl:col-start-2 lg:col-end-8">
        <h2 className="job__title-h2 job__title-h2--mb">Additional info</h2>
        <div className="additional-info">
          {jobItem && (
            <JobAdditionalInfo
              list={jobItem.employment_type}
              type={"Employment type"}
            />
          )}
        </div>

        <div>
          {jobItem && (
            <JobAdditionalInfo 
              list={jobItem.benefits} 
              type={"Benefits"} 
            />
          )}
        </div>
      </section>

      <section className="order-2 lg:order-4 lg:col-start-1 xl:col-start-2 lg:col-end-8">
        <h2 className="job__title-h2">Attached images</h2>
        {jobItem && (
          <JobPictures pictures={jobItem.pictures} />
        )}
      </section>

      <Link to="/" className="btn btn-secondary lg:order-5 lg:col-start-1">
        <span className="arrow"></span>
        RETURN TO JOB BOARD
      </Link>

      <aside className="order-4 lg:order-2 lg:col-start-9 lg:col-end-13">
        <h2 className="job__title-h2 job__title-h2--hidden">Contacts</h2>
        {jobItem && (
          <Map
            location={jobItem.location}
            name={jobItem.name}
            address={jobItem.address}
            phone={jobItem.phone}
            email={jobItem.email}
          />
        )}
      </aside>
    </main>
  );
};
