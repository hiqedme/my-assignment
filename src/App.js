import Header from "./components/Header";
import Patients from "./components/Patients";
import FindPatient from "./components/FindPatient";
import { useEffect, useState } from 'react'
const App = () => {
  const [credentials, setCredentials] = useState([
    {
      username: 'admin',
      password: 'Admin123',
    },
  ])

  const [patients, setPatients] = useState(
    [
       {
         id: 1,
         name: 'Johnson',
      //   age: 45,
      //   gender: 'Male',
      //   treated: true,
       },
       {
         id: 2,
         name: 'Mary',
      //   age: 45,
      //   gender: 'Female',
      //   treated: true,
       },
       {
         id: 3,
         name: 'Harris',
      //   age: 45,
      //   gender: 'Male',
      //   treated: true,
       },
       {
         id: 4,
        name: 'Edward',
      //   age: 45,
      //   gender: 'Male',
      //   treated: false,
       },
       {
         id: 5,
         name: 'Mary',
      //   age: 45,
      //   gender: 'Female',
      //   treated: false,
       },
    ]
  )
  useEffect(() => {

    const fetchPatients = async () => {
     // const res = await fetch('https://kibana.ampath.or.ke/openmrs/ws/rest/v1/patient?q=mary&v=full')
      const res = await fetch('https://kibana.ampath.or.ke/openmrs/ws/rest/v1/', { 
        method: 'post', 
        headers: new Headers({
            'Authorization': 'Basic '+btoa('username:password'), 
            'Content-Type': 'application/x-www-form-urlencoded'
        }), 
        body: 'patient?q=mary&v=full'
    });
      const data = await res.json()

      console.log(data)

    }
    fetchPatients()
  },
    [])


  return (
    <div className='container'>

      <Header />
      <FindPatient />
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
