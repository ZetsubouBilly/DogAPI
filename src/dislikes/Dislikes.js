import React from "react"
import SearchBar from "../SearchBar"


import back from "../img/back.png"


class GridItem extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            img:{},
        }

        this.getDisLikeImg=this.getDisLikeImg.bind(this);

    }

    componentDidMount() {
       this.getDisLikeImg(this.props.id);
    }

    getDisLikeImg(imgId) {
        let url = `https://api.thedogapi.com/v1/images/${imgId}`;
        
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

        return (
            <div className="grid_item"><img src={this.state.img.url} alt="" /></div>
        )
    }

}


class Dislikes extends React.Component {
    constructor(props){
        super(props)
        this.state={          
            voteStory:[],
        }
        
        this.getStory=this.getStory.bind(this);
    }


    componentDidMount() {
        this.getStory();
    }

   

    getStory() {
        let url = "https://api.thedogapi.com/v1/votes";

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
                voteStory:response,
            })
        })

    }



    render () {


        let storyImg = (<div className="placeholder"> <div className="Load"></div></div>);

        let likesArr=[];

        likesArr=this.state.voteStory.filter(img=>img.value==0)
        


        // for (let key in this.state.img ) {
        //     storyImg =  (<img src={this.state.img.url} alt="" />);
        //     break;
        //  }
        return (
            <div className="dislikes">
                <SearchBar /> 
                <div className="voting__main">
                    <div className="voting__main-head">
                        <button  className="btn-back"><img src={back} alt=""/></button>
                        <button className="btn-static">DISLIKES</button>                                              
                    </div>
                    <div className="breeds__main-body">
                        <div className="favourites__main">
                            <div className="grid-block1">
                                {likesArr.map(item=>
                                  <GridItem id={item.image_id} />
                                )}
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        )
    }
}


export default Dislikes