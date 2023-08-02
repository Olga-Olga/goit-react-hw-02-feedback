import React from 'react';
import { Notification } from './Notification';

export const Statistics = props => {
  console.log(props);
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <section>
      {total ? (
        <>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
          <div>TotalFeedback: {total}</div>
          <div>Positive Feedback: {positivePercentage}%</div>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
};
