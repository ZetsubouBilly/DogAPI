import React from "react"

import dropArrow from "../img/dropdown-arrow.png"
import GridItem from "./GridItem";



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
   
    dropdownClick (event) {
        this.setState(state=>({
            isVisible:!state.isVisible,
        }))
        event.preventDefault();
    }
    render() {
        let visible = "";       
        if (this.state.isVisible) {
            visible = "active"
        }
        console.log( this.props.options,'======', this.props.activeOption);

        return (
             <div className="dropdown_breeds">
                <p className="label" onClick={this.dropdownClick}>{this.props.activeOption}</p>
                <img src={dropArrow} alt="" />
                <ul className={`item_list ${visible}`}>
                     <li className="drop_item"  >All breeds</li>
                    {this.props.options.map(option =>(
                        <div>
                            <li className="drop_item" key={option.id}  onClick={this.props.changeOption}>{option.name}</li>
                        </div>
                        
                        
                        
                    ))}
                </ul>
            </div>
        )
    }
}


export default Dropdown
