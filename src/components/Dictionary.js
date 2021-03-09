import { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
function Dictionary() {
    const { translateParam } = useParams()
    const [fromOrigine, setfromOrigine] = useState("")
    const [toOrigine, settoOrigine] = useState("")
    const [inputLangue, setinputLangue] = useState("")
    const history = useHistory()

    function OnclickTranslate(e) {
        e.prevendDefault()
        history.push(`/conjugation/conjugation-verb-${inputLangue}.html`)
    }

    return (
        <div className="container my-5 allBody">
            <form className="form-inline d-flex justify-content-center" onSubmit={OnclickTranslate}>
                <div className="form-group mb-2">
                    <input type="text" className="form-control py-2" placeholder="Dictionary" value={inputLangue} onChange={(e) => {
                        setinputLangue(e.target.value)
                    }} />
                </div>
                <div className="form-group mb-2 ml-3 ">
                    <select id="inputState" className="form-control bg-primary text-white py-2" value={fromOrigine} onChange={(e) => {
                        setfromOrigine(e.target.value)
                    }}>
                        <option selected >English</option>
                        <option >Arabic</option>
                        <option >German</option>
                        <option >Spanish</option>
                        <option >French</option>
                        <option >Italian</option>
                        <option >Japanese</option>
                        <option >Dutch</option>
                        <option >Polish</option>
                        <option >Portuguese</option>
                        <option >Romanian</option>
                        <option >Russian</option>
                        <option >Turkish</option>
                        <option >Chinesse</option>
                    </select>
                </div>
                <div className="form-group mb-2">
                    <i class="fa fa-refresh ml-3 text-danger"></i>
                </div>
                <div className="form-group mb-2 ml-3 ">
                    <select id="inputState" className="form-control bg-danger text-white py-2" value={toOrigine} onChange={(e) => {
                        settoOrigine(e.target.value)
                    }}>
                        <option selected>French</option>
                        <option  >English</option>
                        <option >Arabic</option>
                        <option >German</option>
                        <option >Spanish</option>
                        <option >Italian</option>
                        <option >Japanese</option>
                        <option >Dutch</option>
                        <option >Polish</option>
                        <option >Portuguese</option>
                        <option >Romanian</option>
                        <option >Russian</option>
                        <option >Turkish</option>
                        <option >Chinesse</option>
                    </select>
                </div>
                <input type="submit" value="Dictionary" className="btn btn-info mb-2 ml-2" />
            </form>
        </div>
    )
}

export default Dictionary
