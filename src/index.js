import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

const books = [
    {
        id: 1,
        author: "Rebecca Yarros",
        title: "Fourth Wing",
        image: "./images/book-1.jpg",
    },
    {
        id: 2,
        author: "Jeff Kinney",
        title: "Diary Of A Wimpy Kid",
        image: "./images/book-2.jpg"
    }
]

const BookList = () => {
    return (
        <section className={"bookList"}>
            <EventExamples/>
            {
                books.map(book => {
                    return < Book
                        {...book}
                        key={book.id}
                    />
                })
            }
        </section>
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
            <h2>Typical Form</h2>
            <input type={"text"} name={"example"} onChange={handleFormInput} style={{margin: "1 rem 0"}}/>

        </form>
        <button type={"submit"} onClick={handleButtonClick}>Submit</button>
        </section>
}

const Book = (props) => {
    const {title, author, image, children} = props
    return (
        <article className={"book"}>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{children}</p>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BookList/>
)