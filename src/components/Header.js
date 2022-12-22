import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color ='green' text ='Add'/>
            
            
            
        </header>
    )
}
Header.defaultProps = {
    title: 'Patient Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,

}
//CSS in JS
//const headingStyle = {
//    color: 'teal',
// <h1 style ={headingStyle}>{title}</h1>
//    backgroundColor: 'gold'
//}

export default Header
