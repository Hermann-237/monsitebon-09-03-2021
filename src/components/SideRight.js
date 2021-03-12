import { useState } from "react"
import { NavLink } from "react-router-dom"
import ListVerb from "../ListVerb"
import axios from "axios"
import { Fragment } from "react"
const popularVerb = require("./popularVerb")
function SideRight() {

    const [PopularVerb] = useState(popularVerb)
    const [verbAConjuger] = useState(ListVerb)

    console.log(verbAConjuger[0])



    return (
        <>

            <div className="col-2  sideRight pt-3">
                <h5> Most popular verbs</h5>
                <hr className="my-4"></hr>
                <ul className="right-ul row">
                    {
                        PopularVerb.map((verb, index) => {
                            return (
                                <Fragment key={index}>
                                    <li className="col-6"><NavLink to={"/conjugation/conjugation-verb-" + verb + ".html"} className="text-info" >{verb}</NavLink> </li>
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default SideRight
