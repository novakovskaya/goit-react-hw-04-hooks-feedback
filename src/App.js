import { useState } from "react";

import Container from "./components/Container";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ["good", "neutral", "bad"];

  const leaveFeedback = (options) => {
    switch (options) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback!" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedback()}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;
