import React from 'react';

const CalvinAndHobbesContext = React.createContext(null);

const {
  Provider: CalvinAndHobbesProvider,
  Consumer: CalvinAndHobbesConsumer,
} = CalvinAndHobbesContext;

export default CalvinAndHobbesContext;

export { CalvinAndHobbesProvider, CalvinAndHobbesConsumer };
