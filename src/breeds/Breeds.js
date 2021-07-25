import React from "react"
import SearchBar from "../SearchBar"
import Dropdown from "./Dropdown"


import search from "../img/search.png"
import back from "../img/back.png"

import rateLike from "../img/rating-like.png"
import rateFav from "../img/rating-favorite.png"
import rateDis from "../img/rating-dislike.png"

import dropArrow from "../img/dropdown-arrow.png"

import btnSortAB from "../img/btn-sortAB.png"
import btnSortBA from "../img/btn-sortBA.png"


import dog1 from "../img/dog1.png"
import dog2 from "../img/dog2.png"
import dog3 from "../img/dog3.png"
import dog4 from "../img/dog4.png"
import dog5 from "../img/dog5.png"

import dog6 from "../img/dog6.png"
import dog7 from "../img/dog7.png"
import dog8 from "../img/dog8.png"
import dog9 from "../img/dog9.png"


class Breeds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible:false,
            breeds:[],
            breed:"All Breeds",

        }
        this.dropdownClick=this.dropdownClick.bind(this);
        this.changeBreed=this.changeBreed.bind(this);
        this.getBreeds=this.getBreeds.bind(this);

    }

    componentDidMount() {
        this.getBreeds();
    }


    changeBreed(e) {
        this.setState({
            breed:e.target.innerText,

        })
    }


    getBreeds() {

        let  url = `https://api.thedogapi.com/v1/breeds`;
        
        console.log(url);

        fetch(url, {
            method:"GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "2a7e13c9-16c1-425d-82e6-f61b7b1d6cc1",
            },
    
        }).then(response => response.json())
        .then(response=>{
            this.setState({
                breeds:response,
            })
        })

       
        
    }


    getBreedsImg



    dropdownClick () {
        this.setState(state=>({
            isVisible:!state.isVisible,
        }))
    }

    render () {
        let visible = "";
        
        if (this.state.isVisible) {
            visible = "active"
        }




        return (
            <div className="breeds">
                <SearchBar /> 

                <div className="breeds__main">
                    <div className="breeds__main-head">
                        <button  className="btn-back"><img src={back} alt=""/></button>
                        <button className="btn-static">BREEDS</button>
                        <Dropdown options={this.state.breeds} activeOption={this.state.breed} changeOption={this.changeBreed}/>
                        <div className="dropdown__limit">
                        <p className="label" onClick={this.dropdownClick}>Limit: 10</p>
                            <img src={dropArrow} alt="" />
                            <ul className={`item_list-limit ${visible}`}>
                                <li className="drop_item">Limit: 5</li>
                                <li className="drop_item">Limit: 10</li>
                                <li className="drop_item">Limit: 15</li>
                                <li className="drop_item">Limit: 20</li> 
                            </ul>
                        </div>
                        <button className="btn-sort"><img src={btnSortBA} alt="" /></button>
                        <button className="btn-sort"><img src={btnSortAB} alt="" /></button>                         
                    </div>
                    <div className="breeds__main-body">
                        <div className="grid-block1">
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog1} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog2} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog3} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog4} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog5} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog6} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog7} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog8} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog9} alt="" /></div>
                            <div className="grid_item">
                                <div className="grid_item-wrapper">
                                    <div className="wrapper_label">Affenpinscher</div>
                                </div>
                                <img src={dog2} alt="" /></div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Breeds