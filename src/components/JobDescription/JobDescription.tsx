import { useEffect, useState } from 'react';
import { Job } from '../../types/Job';
import classNames from 'classnames';
import './JobDecsription.css';
import { BenefitsList } from '../BenefitsList/BenefitsList';

type Props = {
  jobItem: Job;
};

const splitDescription = (text?: string) => {
  if (!text) {
    return;
  }
  const paragraph = text
    .split('\n')
    .map((el) => el.trim())
    .filter((el) => el !== '');
  return paragraph;
};

export const JobDescription: React.FC<Props> = ({ jobItem }) => {
  const [description, setDescription] = useState<string[]>();
  const [list, setList] = useState<string>();

  useEffect(() => {
    if (jobItem) {
      const splittedDescription = splitDescription(jobItem.description);

      if (splittedDescription) {
        setDescription(splittedDescription.slice(0, 4));
        setList(splittedDescription.slice(-1).join(''));
      }
    }
  }, [jobItem]);
  
  return (
    <>
      {description?.map((paragraph) => (
        <p
          key={paragraph}
          className={classNames({
            'job__title-h3 job__title-h3--my':
              paragraph === 'Responsopilities:' ||
              paragraph === 'Compensation & Benefits:',
          })}
        >
          {paragraph}
        </p>
      ))}
      <ul>
        {list && <BenefitsList list={list} />}        
      </ul>
    </>
  );
};
