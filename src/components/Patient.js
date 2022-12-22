import { FaTimes } from 'react-icons/fa'
const Patient = ({patient, onDelete, onToggle}) => {
  return (
    <div>
        className={`patient ${patient.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(patient.id)}
      <h3>{patient.name}{' '}
      <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(patient.id)}
        />
      </h3>
      <p> Age:{patient.age}  Gender:{patient.gender}</p>
    </div>
  )
}

export default Patient
