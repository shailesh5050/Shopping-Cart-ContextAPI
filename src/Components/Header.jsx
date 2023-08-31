import React from 'react'
import { Cart } from '../Context/context'
import { useContext } from 'react'
const Header = () => {
    const {state} = useContext(Cart)
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <form className='d-flex m-auto' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>

            <ul className='navbar-nav  mb-2 mb-lg-0 ml-auto'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link position-relative'>
                  Cart{' '}
                  <span className='position-absolute top-1 start-100 translate-middle badge rounded-pill bg-success'>
                    {state.cart.length}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
