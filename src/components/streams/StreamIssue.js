import React from 'react'
import StreamEdit from './StreamEdit'
import { useParams } from 'react-router-dom'

const StreamIssue = () => {
    let {id} = useParams();
    return (
        <div>
            <StreamEdit id={id}/>
        </div>
    )
}

export default StreamIssue
