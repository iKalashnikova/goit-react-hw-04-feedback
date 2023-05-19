import React, {useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Btns/Buttons';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const App = () => {
  const [good, setIsGood] = useState(0);
  const [neutral, setIsNeutral] = useState(0);
  const [bad, setIsBad] = useState(0);

 const handleBtnClick = option => {
    switch (option) {
      case 'good':
        setIsGood(prevCount => prevCount + 1);
        break;
      case 'neutral':
        setIsNeutral(prevCount => prevCount + 1);
        break;
      case 'bad':
        setIsBad(prevCount => prevCount + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: 50,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              total={countTotalFeedback()}
              percentage={countPositiveFeedbackPercentage()}
              good={good}
              neutral={neutral}
              bad={bad}
            />) : <Notification message="There is no feedback" />}
        </Section>
        
      </div>
    );
  
}

export default App;