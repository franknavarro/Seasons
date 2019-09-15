import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
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

  let content;
  if (err) {
    content = <div>Error: {err}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div>{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
