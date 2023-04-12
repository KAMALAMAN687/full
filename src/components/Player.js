
import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import { useDispatch, useSelector } from 'react-redux';
import { updateBucketObj } from '../state/action-creators';
import Modal from './Modal';


const Player = ({ link, title, index, setload,load }) => {
  

  const buckets = useSelector(store => store.buckets);
  const bucketList = useSelector(store => store.bucketList);
  const currentBucket = useSelector(store => store.currentBucket);
  let [newBucket, setnewBucket] = useState(currentBucket);
  const dispatch = useDispatch();
  function removeItem() {
    // var index = arr.indexOf(value);
    let newObj = buckets
    let index = -1
    let i = 0
    for (let item of newObj[currentBucket]) {
      if (item[0] === title && item[1] === link) {
        index = i;
        break;
      }
      i += 1
    }
    if (index > -1) {
      // console.log(newObj[currentBucket])

      newObj[currentBucket].splice(index, 1);
    }


    localStorage.setItem('buckets', JSON.stringify(newObj));
    // document.getElementById(`playerItem${currentBucket}${index}`).remove();

    dispatch(updateBucketObj(newObj));


  }


function handleDelete(){

    removeItem();
    document.getElementById(`closeDelteModal${index}`).click();
    if(`${currentBucket}${index}` ===load){
      setload(`${currentBucket}${index}1`);
    }
    else setload(`${currentBucket}${index}`);

}
  function handleChangeBucket(e) {



    if (!buckets[newBucket]) {
      buckets[newBucket] = [];
    }
    // dispatch(updateBucketObj())
    removeItem();
    let newObj = buckets;

    newObj[newBucket].push([title, link]);
    localStorage.setItem('buckets', JSON.stringify(newObj));
    document.getElementById(`closeChangeModal${index}`).click();

    dispatch(updateBucketObj(newObj));
    if(`${currentBucket}${index}` ===load){
      setload(`${currentBucket}${index}1`);
    }
    else setload(`${currentBucket}${index}`);
    

    return;
  }
  // let i = 0

  let key = 0
  




  function Content(){
    return(
    <>
     <button type="button" className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target={`#modal${index}`}>
          change Bucket
        </button>
        <button type="button" className="btn btn-danger mx-2 my-1" data-bs-toggle="modal" data-bs-target={`#modal-delete${index}`}>
          Delete
        </button>
    

        <Modal link={link} title={title} currentBucket={currentBucket} index={index} />
        
    </>
    );
  }
  return (
    < >
      <div>

        <div className="modal fade" id={`modal${index}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                <button type="button" className="btn-close" id={`closeChangeModal${index}`} data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="input-group mb-3 my-3 d-flex justify-content-center" >
                  <span className="input-group-text" id="inputGroup-sizing-default">Transfer to:</span>
                  <select aria-label="Default select example" className='my-2' id='trasfer-selector'
                    style={{ maxWidth: '200px' }}
                    value={newBucket}
                    onChange={(e) => setnewBucket(e.target.value)}

                  >
                    {bucketList.map(element=>{
                                key +=1;
                                // console.log(key)
                              return <option key={key} value={element}>{element}</option>;
                    })}

              
                  </select>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleChangeBucket}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* _____________DELETE MODAL_____________ */}
      <div>
        <div className="modal fade" id={`modal-delete${index}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{title} from bucket {currentBucket} </h1>
                <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
                <button type="button" className="btn btn-secondary " id={`closeDelteModal${index}`} data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* _________palyer_____________ */}

      <div className = 'player-item mx-3 my-5' id={`playerItem${currentBucket}${index}`}>
      
        {/* {title} <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content={<Content/>}>:</button> */}
     <div style={{height:'65%'}}>
        <ReactPlayer url={link} height={'100%'} width={'100%'} />
        </div>

        <h5 style={{textAlign:'center'}}>
        {title}
        </h5>
        
        <Content/>
       
       
      </div>
    </>
  )
}

export default Player