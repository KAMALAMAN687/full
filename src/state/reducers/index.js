import { combineReducers } from "redux";
import currentBucket from './bucketReducer'
import {bucketList} from './bucketReducer'
import { buckets } from "./bucketReducer";


const rootReducer = combineReducers({
    currentBucket,
    bucketList,
    buckets
})
export default rootReducer ;