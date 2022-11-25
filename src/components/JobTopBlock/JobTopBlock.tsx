export const JobTopBlock: React.FC = () => (
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
);
