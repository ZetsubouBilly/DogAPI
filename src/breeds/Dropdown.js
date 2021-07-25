import React from "react"

import dropArrow from "../img/dropdown-arrow.png"



class Dropdown extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            isVisible:false,
            activeOption:this.props.activeOption,
            options:this.props.options,

        }

        this.dropdownClick=this.dropdownClick.bind(this);
    }


 
   

    dropdownClick () {
        this.setState(state=>({
            isVisible:!state.isVisible,
        }))
    }


    render() {


        let visible = "";
        
        if (this.state.isVisible) {
            visible = "active"
        }

        console.log(this.state.options, this.props.options);


        return (
             <div className="dropdown_breeds">
                            <p className="label" onClick={this.dropdownClick}>{this.props.activeOption}</p>
                            <img src={dropArrow} alt="" />
                            <ul className={`item_list ${visible}`}>
                                <li className="drop_item"  onClick={this.props.changeOption}>All breeds</li>
                                {this.props.options.map(option =>(
                                    <li className="drop_item" onClick={this.props.changeOption}>{option.name}</li>
                                ))}
                            </ul>

                        </div>
        )
    }
}


export default Dropdown
