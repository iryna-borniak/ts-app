import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { defaultTheme } from '../Themes/Theme';
import { CustomMarker } from '../CustomMarker/CustomMarker';
import './Contacts.css';

type Props = {
  name: string;
  address: string;
  phone: string;
  email: string;
  location: {
    lat: number;
    long: number;
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultOptions = {
  clickableIcons: false,
  mapTypeControl: false,
  keyboardShortcuts: false,
  streetViewControl: false,
  fullscreenControl: false,
  zoomControl: false,
  styles: defaultTheme,
};

export const Contacts: React.FC<Props> = ({
  location,
  name,
  address,
  phone,
  email,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY ? API_KEY : '',
  });

  const mapRef = React.useRef(undefined);
  const center = {
    lat: location.lat,
    lng: location.long,
  };

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return (
    <aside className="order-4 lg:order-2 lg:col-start-9 lg:col-end-13">
      <h2 className="job__title-h2 job__title-h2--hidden">Contacts</h2>
      {isLoaded ? (
        <div className="map-container">
          <div className="map-info">
            <div className="map-info-text">
              <h6 className="job__title-h3 job__title-h3--light">
                Department name. <br /> {name}
              </h6>
              <p className="mb-2">
                <span className="location-sm"></span>
                {address}
              </p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </div>
          <GoogleMap
            mapContainerClassName="map-style"
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
          >
            <CustomMarker center={center} />
          </GoogleMap>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </aside>
  );
};
