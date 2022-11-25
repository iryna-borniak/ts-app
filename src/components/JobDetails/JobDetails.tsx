import { JobDescription } from '../JobDescription/JobDescription';
import { JobTitleBlock } from '../JobTitleBlock/JobTitleBlock';
import { JobTopBlock } from '../JobTopBlock/JobTopBlock';

type Props = {
  title: string;
  salary: string;
  createdAt: string;
  text: string;
};

export const JobDetails: React.FC<Props> = ({
  title,
  salary,
  createdAt,
  text,
}) => {
  return (
    <section className="order-1 lg:order-1 lg:col-start-1 xl:col-start-2 lg:col-end-8">
      <JobTopBlock />

      <button type="button" className="btn btn-primary btn-hidden">
        Apply now
      </button>

      <JobTitleBlock 
        title={title} 
        salary={salary} 
        createdAt={createdAt} 
      />

      <JobDescription text={text} />

      <button type="button" className="btn btn-primary">
        Apply now
      </button>
    </section>
  );
};
