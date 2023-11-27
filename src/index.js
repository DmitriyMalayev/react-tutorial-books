import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import {books} from "./books";
import {Book} from "./Book";

const BookList = () => {
    const someValue = "Shake and Bake"
    const displayValue = () => {
        console.log(someValue)
    }
    const getBookById = (id) => {
        const book = books.find((book) => book.id === id)
        console.log(book)
    }
    return (
        <>
            <EventExamples/>
            <h1>Best Sellers</h1>
            <section className={"bookList"}>
                {
                    books.map((book, index) => {
                        return (
                            < Book
                                {...book}
                                displayValue={displayValue}
                                getBookById={getBookById}
                                number={index}
                                key={book.id}
                            />
                        )
                    })
                }
            </section>
        </>

    )
}

const EventExamples = () => {
    const handleFormInput = () => {
        console.log("Handle form input")
    }
    const handleButtonClick = () => {
        console.log("Handle ButtonClick")
    }

    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log("Handle Submission")
    }
    return <section>
        <form onSubmit={handleFormSubmission}>
            <input type={"text"} name={"example"} onChange={handleFormInput} style={{margin: "1 rem 0"}}/>

        </form>
        <button type={"submit"} onClick={handleButtonClick}>Submit</button>

    </section>
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BookList/>
)