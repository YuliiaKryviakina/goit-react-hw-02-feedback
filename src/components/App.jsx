import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback"></Section>
        <Section title="Statistics">
          <Statistics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}/>
          </Section>
      </div>
    );
  }
};
