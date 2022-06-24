import React from "react"
import SearchBar from "../SearchBar"
import Dropdown from "./Dropdown"

import back from "../img/back.png"
import dropArrow from "../img/dropdown-arrow.png"
import GridBody from "./GridBody"

class Breeds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible:false,
            breeds:[],
            breed:"All Breeds",
            // breed:"Akita",
            sort: true,
            
            

        }
        this.dropdownClick=this.dropdownClick.bind(this);
        this.sortClick=this.sortClick.bind(this);

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
        // debugger;
    }


    getBreeds() {

        let  url = `https://api.thedogapi.com/v1/breeds`;
        
        // console.log(url);

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
            });
            // console.log(response)
        } )

       
        
    }


    dropdownClick () {
        this.setState(state=>({
            isVisible:!state.isVisible,
        }))
    }

    sortClick(event,reverse) {
      if(reverse ==false){
         this.setState(state => ({
            sort:state.sort =false,
     
        }))
    
      } else {
        this.setState(state => ({
            sort:!state.sort,
     
        }))
      }
        
       
    }
  
    

    render () {
        let visible = "";
        let sortA = 'active';
        let sortZ = '';
        let storyImg = (<div className="placeholder"> <div className="Load"></div></div>);
        
     
        if (this.state.isVisible) {
            visible = "active"
        }

        
        if(this.state.sort == false) {
            sortZ="active";
            sortA="";

        }

        // if(this.state.breed.name == this.state.breeds.name){
            
        // }
// console.log(this.state.breeds.image)
console.log(this.state.breeds)

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
                        <button className={`btn-sortZ ${sortZ}`} onClick={(e) => {
                            this.sortClick(e, false)
                            }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 9.93411e-09 15.1381 9.93411e-09C13.2971 9.93411e-09 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z" fill="#8C8C8C"/>
                            </svg>
                        </button>
                        <button className={`btn-sortA ${sortA}`} onClick={this.sortClick}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z" fill="#8C8C8C"/>
                            </svg>
                        </button>                         
                    </div>
                    <div className="breeds__main-body">
                        
                        <GridBody breeds={this.state.breeds} breed={this.state.breed}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Breeds