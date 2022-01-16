import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const Bookinfo = ({ books }) => {
   const {id} = useParams()
   const  book = books.find(book => +book.id == +id)
  
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  alt=""
                  src={book.url}
                  className="book__selected--ig"
                />
              </figure>
            
            <div className="book__selected--description">
              <h2 className="book__selected--title">
                Crack the coding interview
              </h2>
              <Rating rating={book.rating} />
              <div className="book__selected--price">
                <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
              </div>
              <div className="book__summary--title">
                <h3 className="book__summary--title">Summary</h3>
                <p className="book__summary--para">
                  Eiusmod eu commodo laboris in quis duis ut elit. Dolore sunt
                  excepteur ipsum labore dolore et nulla minim excepteur.
                  Excepteur laborum quis excepteur exercitation cupidatat ea
                  adipisicing. Nisi consectetur eu quis voluptate cupidatat
                  incididunt et est proident. Sunt do quis et amet tempor ipsum
                  ad duis eu enim aliquip aliquip. Reprehenderit reprehenderit
                  quis incididunt et adipisicing anim occaecat. Laboris nisi
                  proident qui labore fugiat irure.
                </p>

                <p className="book__summary--para">
                  Eiusmod eu commodo laboris in quis duis ut elit. Dolore sunt
                  excepteur ipsum labore dolore et nulla minim excepteur.
                  Excepteur laborum quis excepteur exercitation cupidatat ea
                  adipisicing. Nisi consectetur eu quis voluptate cupidatat
                  incididunt et est proident. Sunt do quis et amet tempor ipsum
                  ad duis eu enim aliquip aliquip. Reprehenderit reprehenderit
                  quis incididunt et adipisicing anim occaecat. Laboris nisi
                  proident qui labore fugiat irure.
                </p>
            
            
              </div>
              <button className="btn">
                    Add to cart
              </button>
            </div>
          </div>
          </div>
        </div>
            <div className="books__container">
            <div className="row">
            <div className="book__selected--top">
            <h2 className="book__selected--title--top">
                Recommended Books
            </h2>
            </div>
            <div className="books">

           
            {
                books.filter(book => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map(book => <Book book={book} key={book.id} />)
            } 
            </div>
            </div>
            </div>
      </main>
    </div>
  );
};

export default Bookinfo;
