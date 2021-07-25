import React from "react"
import mainBG from "./img/main-bg.png"


class Main extends React.Component {
    render () {
        return (
            <div className="main">
                <img src={mainBG} alt="" />
            </div>
        )
    }
}


export default Main