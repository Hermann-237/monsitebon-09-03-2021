import React from "react"
import SideLeft from "./SideLeft"
import SideRight from "./SideRight"
import SideCenter from "./SideCenter"

function VerbLoading() {
    return (
        <div>
            <div className="row d-flex">

                <SideLeft />

                <SideCenter />
                <SideRight />
            </div>


        </div>
    )
}

export default VerbLoading
