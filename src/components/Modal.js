import React,{useState} from 'react'
import ReactPlayer from 'react-player/youtube';
import currentBucket from '../state/reducers/bucketReducer';

function Modal({title,link,index,currentBucket}) {
    const [play,setplay] = useState(false);
  return (
    <>
    <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" 
  data-bs-target={`#videomodal${currentBucket}${index}`} onClick={()=>setplay(true)}>
    Play
  </button>
  {/* Modal */}
  <div className="modal fade" id={`videomodal${currentBucket}${index}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content" style={{height:'90vh'}}>
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
          onClick={()=>setplay(false)} />
        </div>
        <div className="modal-body">
        <ReactPlayer url={link} height={'100%'} width={'100%'} playing={play}  />
          
        </div>
        {/* <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div> */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Modal