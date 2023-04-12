import React from 'react'
import BucketSelector from './BucketSelector'
import NewBucket from './NewBucket'
import { Link } from 'react-router-dom'

function Navbar() {
    return (<>
        

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Video Gallary</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item my2 mx-2">
                    Select  Bucket:
                            <BucketSelector />
        </li>
        <li className="nav-item my-2 mx-2">
        <Link to='/newitem'>Add new item</Link>
        </li>
        <li className="nav-item my-2 mx-2">
        <NewBucket/>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        
    </>
    )
}

export default Navbar