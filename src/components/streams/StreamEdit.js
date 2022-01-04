import React from 'react'
import { useParams } from 'react-router';

const StreamEdit = (props) => {
    console.log(props);
    let params = useParams();
    console.log(params);
    return (
        <div>
            StreamEdit
        </div>
    )
}

export default StreamEdit
