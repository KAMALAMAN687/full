

export const changeBucket = (bucket) => {
    return {
        type: "changeBucket",
        value: bucket

    }
}
export const updateBucketList=(newBucket)=>{
    return {
        type: 'updateBucketList',
        body: newBucket
    }
}

export const updateBucketObj=(obj)=>{

    return {
        type:"updateBucketObj",
        body:obj
    }
}