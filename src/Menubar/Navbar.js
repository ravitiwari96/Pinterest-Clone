import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCommentDots, faBell, faCircleUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/today"><b>Today</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/creates"><b>Create</b></a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <div className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type='text' placeholder='Search' />
              </div>
              <div className='icons'>
                {/* Notification */}
                <a href=''>
                  <FontAwesomeIcon icon={faBell} />
                </a>
                {/* Message */}
                <a href=''>
                  <FontAwesomeIcon icon={faCommentDots} />
                </a>
                {/* Profile */}
                <a href=''>
                  <FontAwesomeIcon icon={faCircleUser} />
                </a>
                <a href='/register'>
                  <FontAwesomeIcon icon={faUserPlus} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar