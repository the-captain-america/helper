import React from 'react';
import {
  HTML_GRAPHIC,
  JS_GRAPHIC,
  CSS_GRAPHIC,
  REACT_GRAPHIC,
  STYLED_GRAPHIC,
} from './assets';

const matchingLogo = {
  HTML_GRAPHIC,
  JS_GRAPHIC,
  CSS_GRAPHIC,
  REACT_GRAPHIC,
  STYLED_GRAPHIC,
};

const TechLogo = ({ name }) => {
  const MatchingGraphic = matchingLogo[name] || null;
  return <MatchingGraphic />;
};

export { TechLogo };
