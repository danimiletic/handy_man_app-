import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker] = useState({ name: '', phone: 0, email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorker(worker)
    setWorker({ name: '', phone: 0, email: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          name='name' 
          value={worker.name}
          onChange={(e) => setWorker({...worker, name: e.target.value})}
          required
          placeholder="name"
        />
        <br />
        <label>Phone:</label>
        <input
          name='phone'
          value={worker.phone}
          onChange={(e) => setWorker({...worker, phone: e.target.value})}
          required
          placeholder="phone"
        />
        <br />
        <label>Email:</label>
        <input
        name='email'
        value={worker.email}
        onChange={(e) => setWorker({...worker, email: e.target.value})}
        required
        placeholder="email"
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;