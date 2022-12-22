import { useState } from 'react'

const FindPatient = () => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Put in Patient name')
            return
        }
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Patient Name</label>
                <input
                    type='text'
                    placeholder='Patient Name'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>


            <input type='submit' value='Find Patient' className='btn btn-block' />
        </form>
    )
}

export default FindPatient
