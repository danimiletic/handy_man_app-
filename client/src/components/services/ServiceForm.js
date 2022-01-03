import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl, Container } from 'react-bootstrap';

const ServiceForm = ({ addService, id, title, cost, time, updateService, setEdit }) => {
  const [service, setService] = useState({ title: '', cost: 0.0, time: 0.0 })

  useEffect( () => {
    if (id) {
      setService({ title, cost, time })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ title: '', cost: 0.0, time: 0.0 })
  }

  return (
    <>
    <Container>
      <form onSubmit={handleSubmit}>
      <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
      <FormControl 
          aria-label="Title" 
          aria-describedby="inputGroup-sizing-sm"
          name='title'
          value={service.title}
          onChange={(e) => setService({ ...service, title: e.target.value })}
          required
        />
        </InputGroup>
    
        <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Cost</InputGroup.Text>
      <FormControl 
          aria-label="Cost" 
          aria-describedby="inputGroup-sizing-sm"
          name='cost'
          value={service.cost}
          onChange={(e) => setService({ ...service, cost: e.target.value })}
          required
          />
          </InputGroup>
      
       
           <InputGroup size="sm" className="mb-3">
           <InputGroup.Text id="inputGroup-sizing-sm">Time to Complete</InputGroup.Text>
           <FormControl 
           aria-label="Time" 
           aria-describedby="inputGroup-sizing-sm"
          name='time'
          value={service.time}
          onChange={(e) => setService({ ...service, time: e.target.value })}
          required
          type="number"
        />
       </InputGroup>
       <Button variant="outline-dark">Submit</Button>
      </form>
      </Container>

    </>
  )
}

export default ServiceForm;