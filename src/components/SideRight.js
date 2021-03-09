import { useState } from "react"
import { NavLink } from "react-router-dom"
import ListVerb from "../ListVerb"
import axios from "axios"
const popularVerb = require("./popularVerb")
function SideRight() {

    const [PopularVerb] = useState(popularVerb)
    const [verbAConjuger] = useState(ListVerb)
    let [dataVrai] = useState("")
    console.log(verbAConjuger[0])

    function ClickOn(e) {
        const result = e.target.textContent

        const options = {
            method: 'GET',
            url: 'https://linguatools-conjugations.p.rapidapi.com/conjugate/',
            params: { verb: result },
            headers: {
                'x-rapidapi-key': '2a50965eebmsh629d096fce14516p1319aejsn22e0ba714d98',
                'x-rapidapi-host': 'linguatools-conjugations.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            dataVrai = response.data
            console.log(dataVrai)
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <>

            <div className="col-2  sideRight pt-3">
                <h5> Most popular verbs</h5>
                <hr className="my-4"></hr>
                <ul className="right-ul row">
                    {
                        PopularVerb.map((verb, index) => {
                            return (
                                <>
                                    <li key={index} className="col-6"><NavLink to={"/conjugation/conjugation-verb-" + verb + ".html"} className="text-info" onClick={ClickOn}>{verb}</NavLink> </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default SideRight
