import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl, Container } from 'react-bootstrap';

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
    <Container>
      <form onSubmit={handleSubmit}>
      <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Author</InputGroup.Text>
      <FormControl 
          aria-label="Title" 
          aria-describedby="inputGroup-sizing-sm"
          name='Author'
          value={comment.author}
          onChange={(e) => setComment({ ...comment, author: e.target.value })}
          required
        />
        </InputGroup>
      
        <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Tools</InputGroup.Text>
      <FormControl 
          aria-label="Tools" 
          aria-describedby="inputGroup-sizing-sm"
          name='Tools'
          value={comment.tools}
          onChange={(e) => setComment({ ...comment, tools: e.target.value })}
          required
        />
         </InputGroup>
        

       <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Request</InputGroup.Text>
      <FormControl 
          aria-label="Request" 
          aria-describedby="inputGroup-sizing-sm"
          name='request'
          value={comment.request}
          onChange={(e) => setComment({ ...comment, request: e.target.value })}
          required
          type="text"
        />
        </InputGroup>
       
        <Button variant="outline-dark">Submit</Button>
      </form>
      </Container>
    </>

  )
}

export default CommentForm;