import React, { Component } from 'react'

//COMPONENTS
import Section from './components/Section'
import FeedbackOptions from './components/FeedbackOptions'
import Statistics from 'components/Statistics'
import Notification from './components/Notification'

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	onLeaveFeedback = feedback => {
		this.setState(prevState => {
			const value = prevState[feedback]
			return {
				[feedback]: value + 1,
			}
		})
	}

	countTotal() {
		const { good, neutral, bad } = this.state
		return good + neutral + bad
	}

	countPercentage(feedback) {
		const total = this.countTotal()
		if (!total) {
			return 0
		}
		const value = this.state[feedback]
		console.log(value)

		const result = (value / total) * 100
		return Number(result.toFixed(2))
	}

	render() {
		const { good, neutral, bad } = this.state
		const total = this.countTotal()
		const positivePercentage = this.countPercentage('good')

		return (
			<Section title={'Task - 1 Feedback widget'}>
				<FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
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
		)
	}
}

export default App
