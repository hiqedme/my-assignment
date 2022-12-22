import Patient from "./Patient"

const Patients = ({patients, onDelete, onToggle }) => {
   
    return (
        <>
            {patients.map((patient) => (
                <Patient key={patient.id} patient={patient} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Patients
