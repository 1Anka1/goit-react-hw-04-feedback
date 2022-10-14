import { useState } from 'react';

//COMPONENTS
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPercentage = feedback => {
    const total = countTotal();

    if (!total) {
      return 0;
    }
    const value = feedback;
    const result = (value / total) * 100;
    return Number(result.toFixed(2));
  };

	const onLeaveFeedback = feedback => {
		switch (feedback) {
			case 'good':
				return setGood(prev => prev + 1);
			case 'neutral':
				return setNeutral(prev => prev + 1);
			case 'bad':
				return setBad(prev => prev + 1);
			default:
				return;
		}
	}

  const total = countTotal();
  const positivePercentage = countPercentage(good);

  return (
    <Section title={'Task - 1 Feedback widget'}>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      {!total ? (
        <Notification />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </Section>
  );
}