import PropTypes from 'prop-types'
import React from 'react'
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ onLeaveFeedback }) {
	return (
		<div>
			<h1>Please leave feedback</h1>
			<div className={css.containerFeedbackButton}>
				<button className={css.button} onClick={() => onLeaveFeedback('good')}>
					Good
				</button>
				<button
					className={css.button}
					onClick={() => onLeaveFeedback('neutral')}
				>
					Neutral
				</button>
				<button className={css.button} onClick={() => onLeaveFeedback('bad')}>
					Bad
				</button>
			</div>
		</div>
	)
}
FeedbackOptions.prototype = {
	onLeaveFeedback: PropTypes.func.isRequired,
}
