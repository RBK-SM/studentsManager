import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [doneComment, setDoneComment] = useState("");

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleComment = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name && comment) {
      setDoneComment(`${name} => ${comment}`)
      setName("")
      setComment("")
    }
  }
  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleName}
          placeholder="Enter your name"
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleComment}
          placeholder="Enter your comment"
        />
        <button type="submit">Submit</button>
      </form>
      {doneComment && (
        <div className="submitted-comment">
          <p>{doneComment}</p>
        </div>
      )}
    </div>
  )
}

export default Contact;
