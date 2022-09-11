import  { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

 export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce((prev, el) => prev + el, 0);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = Math.round((good / total) * 100);
    return isNaN(positivePercentage) ? 0 : positivePercentage;
  };

  feedbackIncrementHandler = e => {
    this.feedbackIncrement(e.target.innerHTML);
  };

  feedbackIncrement = key => {
    this.setState(state => ({ [key]: state[key] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positive = this.countPositiveFeedbackPercentage(good, total);
    const btn = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btn}
            onLeaveFeedback={this.feedbackIncrementHandler}
          />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
