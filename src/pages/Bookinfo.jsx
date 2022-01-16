import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Bookinfo = ({books}) => {
    return (
        <div id='books__body'>
        <main id='books__main'>
        <div className='books__container'>
        <div className='row'>
        <div className='book__selected--top'>
            <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/Book">
            <h2 className='book__selected--title--top'>
                Books
            </h2>
            </Link>
        </div>
            <div className='book__selected'>
                <figure>
                    <img className='book__selected--ig'/>
                </figure>
            </div>
        </div>
        </div>

        </main>
        </div>
    );
}

export default Bookinfo;