import './AttachedImages.css';

type Props = {
  pictures: string[];
};

export const AttachedImages: React.FC<Props> = ({ pictures }) => {
  return (
    <section className="order-2 lg:order-4 lg:col-start-1 xl:col-start-2 lg:col-end-8">
      <h2 className="job__title-h2">Attached images</h2>
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
    </section>
  );
};
