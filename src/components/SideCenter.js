import React, { Fragment } from 'react'
import { useState, useContext } from "react"
import { useParams, useHistory, NavLink } from "react-router-dom"
import irregularVerb from "./irregularVerb"
import DataContext from "../context/DataContext"


function SideCenter() {
    const { data } = useContext(DataContext)
    console.log(data)
    const [IrregularVerb] = useState(irregularVerb)
    const papa = useParams()
    const [inputValue, setinputValue] = useState("")
    const history = useHistory()
    console.log(papa)



    function submitSeach(e) {
        e.preventDefault()
        history.push(`/conjugation/conjugaison-verb-${inputValue}.html`)
        console.log(inputValue)
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
                                        <li className="col-3 "><NavLink to={"conjugation/conjugation-verb-" + verb + ".html"} className="text-info" >{verb}</NavLink> </li>
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
