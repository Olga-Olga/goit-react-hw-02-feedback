import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatistic = () => {
    return 123;
  };

  handleButtons = event => {
    const st = event.target.textContent;
    console.dir(st);
    this.setState(prevState => ({
      [st]: prevState[st] + 1,
    }));
  };

  countTotalFeedback = () => {
    // const sum = this.state.good + this.state.bad + this.state.neutral;
    const sum = Object.values(this.state).reduce((acc, el) => (acc += el));
    return sum;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const percentage = Math.round(
      ((good + bad) / (good + bad + neutral)) * 100
    );
    return percentage;
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtons}>good</button>
        <button onClick={this.handleButtons}>neutral</button>
        <button onClick={this.handleButtons}>bad</button>
        <h2>Statistic</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
        <div>TotalFeedback: {this.countTotalFeedback()}</div>
        <div>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</div>
      </div>
    );
  }
}
