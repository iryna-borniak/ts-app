import './JobPictures.css';

type Props = {
  pictures: string[];
};

export const JobPictures: React.FC<Props> = ({ pictures }) => {
  return (
    <div className="job-images overflow-hidden">
      {pictures.map((image, index) => (
        <div key={index} className="image-container">
          <img 
            className="attached-image" 
            src={image} 
            alt="figure" 
          />
        </div>
      ))}
    </div>
  );
};
