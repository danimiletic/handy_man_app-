import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker] = useState({ name: '', phone: 0, email: '' })

  const handleSubmit = (e) => {
    e.preventdefault()
    addWorker(worker)
    setWorker({ name: '', phone: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='name' 
          value={worker.name}
          onChange={(e) => setWorker({...worker, name: e.target.value})}
          required
          placeholder="name"
        />
        <label>Description:</label>
        <textarea
          name='phone'
          value={worker.phone}
          onChange={(e) => setWorker({...worker, phone: e.target.value})}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;