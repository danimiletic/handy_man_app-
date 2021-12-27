import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const CommentForm = ({ addComment, id, author, tools, request, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ author: '', tools: '', request: '' })

  useEffect( () => {
    if (id) {
      setComment({ author, tools, request })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ author: '', tools: '', request: ''})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Author:</label>
        <input 
          name='Author'
          value={comment.author}
          onChange={(e) => setComment({ ...comment, author: e.target.value })}
          required
        />
        <br />
        <label>Tools:</label>
        <input
          name='Tools'
          value={comment.tools}
          onChange={(e) => setComment({ ...comment, tools: e.target.value })}
          required
        />
        <br />
        <label>Request:</label>
        <input 
          name='request'
          value={comment.request}
          onChange={(e) => setComment({ ...comment, request: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <Button variant="outline-dark">Submit</Button>
      </form>
    </>
  )
}

export default CommentForm;