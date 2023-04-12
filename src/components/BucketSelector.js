import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeBucket } from '../state/action-creators';

const BucketSelector = () => {
    
    let bucketList = useSelector((store)=>store.bucketList);
    const currentBucket = useSelector((store) => store.currentBucket);
    // console.log(currentBucket,bucketList,"nav");
    

let options = []
let key = 0
let start = ""
for(let item of bucketList){

    if (key ===0){
      start = item;
    }
    options.push(<option key = {key} value={item}>{item}</option>);
    key+=1
    
}

const dispatch = useDispatch();
if(options.length !==0 && currentBucket.length ===0){
  dispatch(changeBucket(start))
}
// console.log(currentBucket,bucketList,"nav");
// let [currentBucket,setcurrentBucket] = useState(options[0].props.value)





function handleChangeBucket(e){


    dispatch(changeBucket(e.target.value));
    
}


  return (
    <>

    <select  aria-label="Default select example"
                 value={currentBucket} style={{maxWidth:'200px'}} onChange={handleChangeBucket} >
                  select
                    {options}
                    
    </select>
    </>
  )
}

export default BucketSelector