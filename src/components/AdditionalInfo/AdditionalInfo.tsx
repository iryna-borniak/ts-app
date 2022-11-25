import { JobAdditionalInfo } from '../JobAdditionalInfo/JobAdditionalInfo';
type Props = {
  employment_type: string[];
  benefits: string[];
};

export const AdditionalInfo: React.FC<Props> = ({
  employment_type,
  benefits,
}) => {
  return (
    <section className="order-3 lg:order-3 lg:col-start-1 xl:col-start-2 lg:col-end-8">
      <h2 className="job__title-h2 job__title-h2--mb">Additional info</h2>
      <div className="additional-info">
        <JobAdditionalInfo list={employment_type} type={'Employment type'} />
      </div>

      <div>
        <JobAdditionalInfo list={benefits} type={'Benefits'} />
      </div>
    </section>
  );
};
