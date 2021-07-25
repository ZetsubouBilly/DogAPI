import React from "react"
import SearchBar from "../SearchBar"


import back from "../img/back.png"


class GridItem extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            img:{},                     

        }

        this.getFavImg=this.getFavImg.bind(this);


    }

    componentDidMount() {
    //    this.getFavImg(this.props.id);
    }

    getFavImg (imgId) {

        let  url = `https://api.thedogapi.com/v1/images/${imgId}`;

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
                img:response,
            })
        })

       
        
    }
    render () {

        let imgItem = this.props.image.url;

        if (!this.props.image.url) {

            this.getFavImg(this.props.id);
            imgItem = this.state.img.url;
        }


        return (
            <div className="grid_item"><img src={imgItem} alt="" /></div>
        )
    }

}


class Favourites extends React.Component {
    constructor(props){
        super(props)
        this.state={
           
           
            favourites:[],
            
            
             

        }
        
        this.getFavourites=this.getFavourites.bind(this);

    }


    componentDidMount() {
        this.getFavourites();
    }

   

    getFavourites() {
        let url = "https://api.thedogapi.com/v1/favourites";

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
                favourites:response,
            })
        })

    }



    render () {



      
        return (
            <div className="favourites">
                <SearchBar /> 

                <div className="voting__main">
                    <div className="voting__main-head">
                        <button  className="btn-back"><img src={back} alt=""/></button>
                        <button className="btn-static">FAVOURITE</button>
                        
                       
                       
                                              
                    </div>
                    <div className="breeds__main-body">
                        <div className="favourites__main">
                            <div className="grid-block1">
                                {this.state.favourites.map(item=>
                                  <GridItem image={item.image}  id={item.image_id}/>
                                )}
                            </div>
                        </div>
                        
                        
                       
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Favourites