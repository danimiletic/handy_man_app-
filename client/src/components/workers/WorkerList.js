import { Link } from 'react-router-dom';

const WorkerList = ({ workers }) => {
  return (
    <>
      { workers.map( b => 
        <>
          <Link to={`/workers/${b.id}`} key={b.id}>{b.title}</Link>
          <br />
        </>
      )}
    </>
  )
}

export default WorkerList;