import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBucketList } from '../state/action-creators';

const NewBucket = () => {
    const [name, setname] = useState('');
    const dispatch = useDispatch();

    function handleChange(event) {
        setname(event.target.value);
    }

    function addBucket() {
        let list = localStorage.getItem('bucketList');
        list = JSON.parse(list);
        if (!list) {
            list = [];
        }
        
        list.push(name);

        localStorage.setItem('bucketList', JSON.stringify(list));
        dispatch(updateBucketList(list));

    }
    return (
        <>
            <div className="input-group" >
                <span className="input-group-text" id="inputGroup-sizing-default">Enter Bucket Name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={name} onChange={handleChange} 
                />
                <button onClick={addBucket}> create</button>
            </div>
        </>
    )
}

export default NewBucket