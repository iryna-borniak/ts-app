type Props = {
  list: string;
};

const splitList = (text?: string) => {
    if (!text) {
      return;
    }
    
    return text.split('.').filter((el) => el !== '').map(el => el.trim());
  };

export const BenefitsList: React.FC<Props> = ({ list }) => {
  return (
    <>
      {splitList(list)?.map((item) => (
        <li key={item} className="description-li">{item}</li>
      ))}      
    </>
  );
};
