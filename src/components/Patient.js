
const Patient = ({patient, onDelete, onToggle}) => {
  return (
    <div className='patient'>
       
      <h3>{patient.name}</h3>
      <p> Age:{patient.age}  Gender:{patient.gender}</p>
    </div>
  )
}

export default Patient
