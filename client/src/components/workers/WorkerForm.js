import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl, Container } from 'react-bootstrap';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker] = useState({ name: '', phone: 0, email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorker(worker)
    setWorker({ name: '', phone: 0, email: '' })
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
            <FormControl 
            aria-label="Name" 
            aria-describedby="inputGroup-sizing-sm"
            name='name' 
            value={worker.name}
            onChange={(e) => setWorker({...worker, name: e.target.value})}
            required
            placeholder="name" />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Phone</InputGroup.Text>
            <FormControl 
            aria-label="Phone" 
            aria-describedby="inputGroup-sizing-sm"
            name='phone' 
            value={worker.phone}
            onChange={(e) => setWorker({...worker, phone: e.target.value})}
            required
            placeholder="phone" />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
            <FormControl 
            aria-label="Email" 
            aria-describedby="inputGroup-sizing-sm"
            name='email' 
            value={worker.email}
            onChange={(e) => setWorker({...worker, email: e.target.value})}
            required
            placeholder="email" />
          </InputGroup>
          <Button variant="outline-dark">Submit</Button>
        </form>
        
      </Container>
    </>
  )
}

export default WorkerForm;