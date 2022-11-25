import Moment from 'react-moment';

type Props = {
  title: string;
  salary: string;
  createdAt: string;
};

const formatSalary = (salary: string) => {
  const thousands = new RegExp(/k/g);
  const hyphen = new RegExp(/-/g);
  return salary.replace(thousands, ' 000').replace(hyphen, '—');
};

export const JobTitleBlock: React.FC<Props> = ({
  title,
  salary,
  createdAt,
}) => (
  <div className="grid grid-cols-2 xl:grid-cols-12 mt-8">
    <h1 className="col-start-1 col-end-3 lg:col-start-1 lg:col-end-10 job__title-h1">
      {title}
    </h1>

    <div className="grid order-2 lg:order-1 lg:col-start-10 lg:col-end-13 salary-block">
      <p className="order-2 lg:order-1 job__title-h3">
        &euro; {formatSalary(salary)}
      </p>

      <p className="order-1 lg:order-2">Brutto, per year</p>
    </div>

    <div className="order-1 lg:order-2 lg:col-start-1 lg:col-end-4 job__date my-2">
      Posted <Moment fromNow>{createdAt}</Moment>
    </div>
  </div>
);
