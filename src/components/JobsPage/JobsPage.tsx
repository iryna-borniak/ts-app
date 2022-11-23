import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { setBodyColor } from '../../setBodyColor';
import { Job } from '../../types/Job';
import './JobsPage.css';

type Props = {
  jobs: Job[];
};

export const JobsPage: React.FC<Props> = ({ jobs }) => {
  setBodyColor('#E6E9F2');

  return (
    <main>
      <section>
        <div className="container m-auto">
          <ul className="jobs">
            {jobs.map(({ 
              id, 
              name, 
              title, 
              pictures, 
              address, 
              createdAt 
            }) => (
              <li key={id} className="container jobs__container">
                <div className="jobs__items">
                  <div className="order-2 jobs__image-container col-start-1 col-end-2">
                    <img
                      className="jobs__image"
                      src={pictures[0]}
                      alt="figure"
                    />
                  </div>

                  <div className="order-3 jobs__info col-start-2 col-end-11 lg:col-end-8">
                    <Link to={`/jobs/${id}`}>
                      <h6 className="job__title">{title}</h6>
                    </Link>

                    <p className="jobs__text mb-2">
                    <span className="jobs__department-name">Department name</span> {name}
                    </p>

                    <p className="jobs__text jobs__text--address">
                      <span className="location-sm"></span>
                      {address}
                    </p>
                  </div>

                  <div className="jobs__items-mb order-1 lg:order-3 grid grid-rows-1 lg:grid-rows-3 col-start-2 lg:col-start-10 col-end-11">
                    <span className="jobs__bookmark"></span>

                    <span className="jobs__stars stars row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
                      <span className="stars__star"></span>
                      <span className="stars__star"></span>
                      <span className="stars__star"></span>
                      <span className="stars__star"></span>
                      <span className="stars__star"></span>
                    </span>
                    
                    <span className="jobs__text jobs__text--date row-start-1 row-end-2 lg:row-start-3 lg:row-end-4">
                      Posted <Moment fromNow>{createdAt}</Moment>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
