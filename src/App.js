import Header from "./components/Header";
import Patients from "./components/Patients";
import { useState } from 'react'
function App() {

  const [patients, setPatients] = useState(
    [
      {
        id: 1,
        name: 'Johnson',
        age: 45,
        gender: 'Male',
        treated: true,
      },
      {
        id: 2,
        name: 'Mary',
        age: 45,
        gender: 'Female',
        treated: true,
      },
      {
        id: 3,
        name: 'Harris',
        age: 45,
        gender: 'Male',
        treated: true,
      },
      {
        id: 4,
        name: 'Edward',
        age: 45,
        gender: 'Male',
        treated: false,
      },
      {
        id: 5,
        name: 'Mary',
        age: 45,
        gender: 'Female',
        treated: false,
      },
    ]
  )
  //deletePatients
  const deletePatients = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id))
  }

  //toggle treated
  const toggleTreated = (id)=>{
    setPatients(
      patients.map(
        (patient) =>
          patient.id === id ? { ...patient, treated: !patient.treated } : treated
      )
    )

  }
  return (
    <div className='container'>

      <Header />
      {patients.length > 0 ? (
        <Patients
          patients={patients}
        
        />
      ) : (
        'No Patients To Show'
      )}


    </div>
  );
}

export default App;
