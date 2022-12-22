import Patient from "./Patient"

const Patients = ({patients }) => {
   
    return (
        <>
            {patients.map((patient) => (
                <Patient key={patient.id} patient={patient}/>))}
        </>
    )
}

export default Patients
