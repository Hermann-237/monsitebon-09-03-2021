import { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"

function Translate() {
    const { translateParam } = useParams()
    const [fromOrigine, setfromOrigine] = useState("en")
    const [toOrigine, settoOrigine] = useState("fr")
    const [inputLangue, setinputLangue] = useState("")
    const history = useHistory()

    function OnclickTranslate(e) {
        e.preventDefault()
        console.log("ma valeur ", fromOrigine)
        const options = {
            method: 'GET',
            url: 'https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate',
            params: { source: `${fromOrigine}`, target: `${toOrigine}`, input: `${inputLangue}` },
            headers: {
                'x-rapidapi-key': '2a50965eebmsh629d096fce14516p1319aejsn22e0ba714d98',
                'x-rapidapi-host': 'systran-systran-platform-for-language-processing-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        history.push(`/translate/${fromOrigine}-${toOrigine}-${inputLangue}.html`)

    }

    return (
        <div className="container my-5 allBody">
            <form className="form-inline d-flex justify-content-center" onSubmit={OnclickTranslate}>
                <div className="form-group mb-2">
                    <input type="text" className="form-control py-2" placeholder="Translate" value={inputLangue} onChange={(e) => {
                        setinputLangue(e.target.value)
                    }} />
                </div>
                <div className="form-group mb-2 ml-3 ">
                    <select id="inputState" className="form-control bg-primary text-white py-2" value={fromOrigine} onChange={(e) => {
                        setfromOrigine(e.target.value)
                    }}>
                        <option selected value="english">English</option>
                        <option value="arabic">Arabic</option>
                        <option value="german">German</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                        <option value="dutch">Dutch</option>
                        <option value="polish">Polish</option>
                        <option value="portuguese">Portuguese</option>
                        <option value="romanian">Romanian</option>
                        <option value="russian">Russian</option>
                        <option value="turkish">Turkish</option>
                        <option value="chinesse">Chinesse</option>
                    </select>
                </div>
                <div className="form-group mb-2">
                    <i class="fa fa-refresh ml-3 text-danger"></i>
                </div>
                <div className="form-group mb-2 ml-3 ">
                    <select id="inputState" className="form-control bg-danger text-white py-2" value={toOrigine} onChange={(e) => {
                        settoOrigine(e.target.value)
                    }}>
                        <option selected value="french">French</option>
                        <option value="english">English</option>
                        <option value="arabic">Arabic</option>
                        <option value="german">German</option>
                        <option value="spanish">Spanish</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                        <option value="dutch">Dutch</option>
                        <option value="polish">Polish</option>
                        <option value="portuguese">Portuguese</option>
                        <option value="romanian">Romanian</option>
                        <option value="russian">Russian</option>
                        <option value="turkish">Turkish</option>
                        <option value="chinesse">Chinesse</option>
                    </select>
                </div>
                <input type="submit" value="Translate" className="btn btn-info mb-2 ml-2" />
            </form>
        </div>
    )
}

export default Translate
