import classNames from 'classnames';

type Props = {
  list: string[];
  type: 'Employment type' | 'Benefits';
};

export const JobAdditionalInfo: React.FC<Props> = ({ list, type }) => {
  return (
    <>
      <p className="mb-2.5">{type}</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3">
        {list.map((listItem) => (
          <li
            key={listItem}
            className={classNames('rectangle', {
              'rectangle--employment mb-6': type === 'Employment type',
              'rectangle--benefits': type === 'Benefits',
            })}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </>
  );
};
