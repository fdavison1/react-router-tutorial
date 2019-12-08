import React from 'react'
import { Link } from 'react-router-dom'

const TopicDetail = ({ match }) => {
    return (
        <div>
            <h3>{match.params.topicID}</h3>
            <ul>
                <li>
                    <Link to='/Topics'>Back to Topics</Link>
                </li>
            </ul>
        </div>
    )
}

export default TopicDetail 