import { Marker } from '@react-google-maps/api';
import location from '../../images/location.svg';

type Props = {
  center: {
    lat: number;
    lng: number;
  };
};
export const CustomMarker: React.FC<Props> = ({ center }) => (
  <Marker position={center} icon={location} />
);
