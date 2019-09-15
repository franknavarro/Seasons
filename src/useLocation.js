import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    // Get the users position
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
      },
      err => {
        setErr(err.message);
      },
    );
  }, []);

  return [lat, err];
};
