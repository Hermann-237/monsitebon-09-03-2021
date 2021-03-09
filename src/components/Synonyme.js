
import { useState } from "react"
import { useParams } from "react-router-dom"

function Synonyme() {
    const { translateParam } = useParams()
    const [langue, setlangue] = useState("")
    const [inputLangue, setinputLangue] = useState("")

    function OnclickSynonyme(e) {
        e.prevendDefault()

    }

    return (
        <div className="container my-5 allBody">
            <form className="form-inline d-flex justify-content-center" onSubmit={OnclickSynonyme}>
                <div className="form-group mb-2">
                    <input type="text" className="form-control py-2" placeholder="Synonyme" value={inputLangue} onChange={(e) => {
                        setinputLangue(e.target.value)
                    }} />
                </div>
                <div className="form-group mb-2 ml-3 ">
                    <select id="inputState" className="form-control bg-danger text-white py-2" value={langue} onChange={(e) => {
                        setlangue(e.target.value)
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
                <input type="submit" value="Synonyme" className="btn btn-info mb-2 ml-2" />
            </form>
        </div>
    )
}

export default Synonyme

