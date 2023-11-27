import React from "react";

export const Book = (props) => {
    const {id, author, title, image, children, getBookById, number} = props
    return (
        <article className={"book"}>

            <img src={image} alt={title}/>
            <h2>Book number #{number+1}</h2>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{children}</p>
            <button onClick={() => getBookById(id)}>Find Book</button>

        </article>
    )
}