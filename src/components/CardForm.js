import React,{useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useNavigate } from 'react-router-dom';
import {updateBucketObj } from '../state/action-creators';

const CardForm = () => {
    const [name, setname] = useState('');
    const [link, setlink] = useState('');
    //const [otherLink, setotherLink] = useState('');
    //const [video, setvideo] = useState(true);
    const navigate = useNavigate();
    const bucketList = useSelector((store)=>store.bucketList);
    const dispatch = useDispatch();

function changeName(e){
    setname(e.target.value)
}
function chnageLink(e){
    setlink(e.target.value)
}





let key = 0
let options = [];
// console.log(bucketList,bucketList[0])

for(let item of bucketList){
    
    options.push(<option key={key} value={item}>{item}</option>);

    key+=1;
    
}
function saveItem(){

    let buckets = JSON.parse(localStorage.getItem('buckets'));
    // console.log(buckets)
    if(!buckets){
        buckets = {}
    }
    let bucket = document.getElementById('form-select').value;

    if(!buckets[bucket]){
        buckets[bucket] = [];
    }
    let video = document.getElementById('video').checked;
    buckets[bucket].push([name,link,video]);
    
    // console.log(buckets)
    localStorage.setItem('buckets',JSON.stringify(buckets));
    // <Navigate to='/'/>
    navigate('/');
    dispatch(updateBucketObj(buckets));
    

    return;

}
if(options.length ===0){
    return <div>Create a bucket first</div>
}

    return (
        
        <>
        
        
            <div  className="input-group mb-3 my-3 container d-flex justify-content-center"
            style={{background: 'aliceblue'}} >
                
                <ul>
                <li  className='my-3 mx-3'>
                Title
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={name} onChange={changeName}
                     />
                </li>

                <li className='my-3 mx-3'>
                Link
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={link} onChange={chnageLink}
                     />
                </li>
                
                <li className='my-3 mx-3'>Video
                <input type="checkbox" id="video"/>
                </li>
                
                {/* <div style={{ maxWidth: '800px' }}> */}
                <li  className='my-3 mx-3'>
                <span className='d-inline'>Bucket:</span>
                <select  aria-label="Default select example" className='my-2' id='form-select'
                 value={options[0].value} style={{maxWidth:'200px'}} >
                    
                    {options}
                    
                </select>
                </li>
                {/* </div> */}
                <button onClick={saveItem} style={{width:'70px'}}> submit</button>
                </ul>
            </div>
        </>
    )
}

export default CardForm