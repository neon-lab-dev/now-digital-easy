import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => (
  <div className="card">
    <div className="card-title">{title}</div>
    <div className="card-description">{description}</div>
  </div>
);

const App = () => (
  <div className="app">
    <h1>More reasons to try Vision Now today</h1>
    <div className="cards">
      <Card
        title="Easy to use"
        description="Get to the bottom of simple queries in no time and increase team productivity."
      />
      <Card
        title="Easy on your pocket"
        description="Analyze metrics and create custom reports to improve live chat support."
      />
      <Card
        title="Easy on any platform"
        description="See pages your customer is browsing and chat previews in real-time."
      />
    </div>
  </div>
);

export default App;