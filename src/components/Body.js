import React,{useState} from 'react';
import {  useSelector } from 'react-redux';
import Player from './Player';
import Card from './Card';
const Body = () => {
  const currentBucket = useSelector(store=>store.currentBucket);
  
  const [load,setload] = useState(0);
 
  const buckets = useSelector(store=>store.buckets);
  let i = -1;
  

  //   useEffect(()=>{
  //     console.log("changed")
      
  //     if (!buckets[currentBucket]){
  //         return;
  //     }
  //     let items1 = [];
  //     let i = 0
  //     for(let item of buckets[currentBucket]){
  //         let title = item[0]
  //         let link = item[1]
          
  //         items1.push(<Player link={link} title={title} index={i}></Player>)
  //         i+=1
  //     }
  //     setitems(items1);
  //   },[currentBucket,buckets]);
  // };

    if (!buckets[currentBucket]){
      return <h2>No item present in this Bucket</h2>
    }

  return (
    <div className='d-flex flex-row flex-wrap' >
   
    {
      buckets[currentBucket].map(element=>{
        
        i +=1
        // console.log(i);
        if(element[2]){
        return <Player link={element[1]} key={i} load={load} setload={setload} title={element[0]} index={i}></Player>;}
        else return <Card title={element[0]} link={element[1]} key={i}/>
      })
    }

    </div>
  )
}


export default Body