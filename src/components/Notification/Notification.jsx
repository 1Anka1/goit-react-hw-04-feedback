import React from 'react'
import css from './Notification.module.css'
import photo from './FeedBackFoto/feedback.jpeg'

export default function Notification() {
    return (
        <div>
            <p className={css.text}>There is no feedback here</p>
        <img src={photo} alt="feedback"/>
        </div>
    )
}
