
const Patient = ({patient, onDelete, onToggle}) => {
  return (
    <div>
        className={`patient ${patient.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(patient.id)}
      <h3>{patient.name}{' '}
    //  
    
      </h3>
      <p> Age:{patient.age}  Gender:{patient.gender}</p>
    </div>
  )
}

export default Patient
