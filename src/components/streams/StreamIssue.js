import React from 'react'
import StreamEdit from './StreamEdit'
import { useParams } from 'react-router-dom'
import StreamDelete from './StreamDelete';

const StreamIssue = ({stream}) => {
    let {id} = useParams();
    if(stream === 'delete'){
        return (
            <div>
                <StreamDelete id={id}/>
            </div>
        )
    }
    if(stream === 'edit'){
        return (
            <div>
                <StreamEdit id={id}/>
            </div>
        )
    }
    return (<div>Please select a proper one</div>);
    
}

export default StreamIssue
