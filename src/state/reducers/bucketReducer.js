const currentBucket = (state="",action)=>{
    

    if(action.type ==="changeBucket") return action.value;

    else return state;

    
}
export const buckets = (state = {},action)=>{
 
    if(action.type ==="updateBucketObj") return action.body;
    

    else if(Object.keys(state).length !==0) {
      
      return state;}
    
    let buckets = JSON.parse(localStorage.getItem('buckets'));
    if(!buckets){
      localStorage.setItem('buckets',JSON.stringify({}));
      buckets = {};
    }
    
    return buckets;
}

const bucketList =(state=[],action)=>{
  
    if(action.type ==="updateBucketList") return action.body;
    else if(state.length !==0) return state;
    let bucketList = JSON.parse(localStorage.getItem('bucketList'));
    if(!bucketList){
      localStorage.setItem('bucketList',JSON.stringify([]))
      bucketList = [];
    }
    
    
    return bucketList;
}
export {bucketList};

export default currentBucket;