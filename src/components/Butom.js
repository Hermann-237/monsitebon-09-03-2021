import {Redirect} from 'react-router-dom'

function Butom() {
    return (
        <div>
            <button className="btn btn-primary">Change</button>
            <Redirect to="/hermann"/>
        </div>
    )
}

export default Butom
