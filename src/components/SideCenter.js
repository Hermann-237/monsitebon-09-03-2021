import React, { Fragment } from 'react'
import axios from "axios"
import { useState } from "react"
import { useParams, useHistory, NavLink } from "react-router-dom"
const irregularVerb = require("./irregularVerb")


function SideCenter() {
    const [IrregularVerb] = useState(irregularVerb)
    let [dataVrai, setdataVrai] = useState("")
    const papa = useParams()
    const [inputValue, setinputValue] = useState("")
    const history = useHistory()
    console.log(papa)

    function submitSeach(e) {
        e.preventDefault()
        e.preventDefault()
        history.push(`/conjugation/conjugaison-verb-${inputValue}.html`)
        console.log(inputValue)
    }

    function ClickOn(e) {
        const result = e.target.textContent
        console.log(result)
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
            /* dataVrai = response.data */
            setdataVrai(response.data)
            console.log(dataVrai)
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <>
            <div className="col-7 ml-5 py-5 sideCenter ">
                <div className="text-center mb-5">

                    <form className="form-inline d-flex justify-content-center" onSubmit={submitSeach} >
                        <div className="form-group mb-2">
                            <input type="text" className="form-control " placeholder="Conjugaison" value={inputValue} onChange={(e) => {
                                setinputValue(e.target.value)
                            }} />
                        </div>
                        <input type="submit" value="Conjugaison" className="btn btn-info mb-2 ml-2" />
                    </form>
                </div>
                <div className=" index-millieu pb-5">
                    <h5 className=" pt-3"> Irregular verbs</h5>
                    <hr className="my-4"></hr>
                    <ul className="right-ul row">
                        {
                            IrregularVerb.map((verb, index) => {
                                return (
                                    <Fragment key={index}>
                                        <li className="col-3 "><NavLink to={"conjugation/conjugation-verb-" + verb + ".html"} className="text-info" onClick={ClickOn}>{verb}</NavLink> </li>
                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideCenter
