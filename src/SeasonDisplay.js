import React from 'react';

const seasonConfig = {
  'summer':{
    'description':"Dang. Its cold outside....",
    'iconName':"sun"
  },
  'winter':{
    'description':"Suns out guts out. Its HOT!",
    'iconName':"snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { description, iconName } = seasonConfig[season]

  return (
    <div>
      <i className={`icon ${iconName}`} />
      <h1>{description}</h1>
      <i className={`icon ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
