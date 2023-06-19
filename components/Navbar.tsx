// write navbar component here
import React from 'react';


export const Navbar : React.FC = () => {
  return (
    <div>
        <nav>
            <div className='nav-left'>
                <a href='/'>Home</a>
            </div>
            <div className='nav-right'>
                <ul>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/register'>Register</a>
                    </li>
                </ul>
            </div>
        </nav>    
    </div>
  )
}

