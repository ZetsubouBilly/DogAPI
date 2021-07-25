import React from "react"
import SearchBar from "../SearchBar"


import search from "../img/search.png"
import back from "../img/back.png"

import rateLike from "../img/rating-like.png"
import rateFav from "../img/rating-favorite.png"
import rateDis from "../img/rating-dislike.png"

import storyLike from "../img/story-like.png"
import storyFav from "../img/story-favorite.png"
import storyDis from "../img/story-dislike.png"
import storyImage from "../img/story-img.png"

import btnRateLike from "../img/btn-story-rate-like.png"
import btnRateFav from "../img/btn-story-rate-favorite.png"
import btnRateDis from "../img/btn-story-rate-dislike.png"



class Voting extends React.Component {

    constructor(props){
        super(props)
        this.state={
            img:{} ,
            like:false,
            favoriteId:0,
            voteStory:[],
            favoriteStory:[],

        } 
        this.getImage=this.getImage.bind(this);
        this.toggleFavorite=this.toggleFavorite.bind(this);
        this.getStory=this.getStory.bind(this);
        this.createVote=this.createVote.bind(this);
        this.createFav=this.createFav.bind(this);
        this.getFavoriteStory=this.getFavoriteStory.bind(this);
    }
    componentDidMount() {
        this.getImage();
        this.getStory();
        this.getFavoriteStory();
    }

    getImage(){
        let url = "https://api.thedogapi.com/v1/images/search";

        fetch(url, {
            method:"GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        })
        .then(response => response.json())
        .then(response=>{
            this.setState({
                img:response[0],
            })
        })
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

    
    getFavoriteStory() {
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
                favoriteStory:response,
            })
        })

    }



    toggleFavorite() {

        this.setState(state =>({
            like:!state.like,
        }))
    }

    createFav (imgId) {

        let url = "https://api.thedogapi.com/v1/favourites";



        console.log(this.state.img);

         if (this.state.like) {
             url = `https://api.thedogapi.com/v1/favourites/${this.state.favoriteId}`;
             fetch(url, {
                method:"DELETE",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "x-api-key": "2a7e13c9-16c1-425d-82e6-f61b7b1d6cc1",
                },
             }).then(this.toggleFavorite);
         }
         else {
            fetch(url, {
                method:"POST",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Content-Type": "application/json",
                    "x-api-key": "2a7e13c9-16c1-425d-82e6-f61b7b1d6cc1",
                },
                body:JSON.stringify({
                    image_id:imgId,
                    
                    
                })
            }).then(response => response.json())
            .then(response=>{
                this.setState({
                    favoriteId:response.id,
                })
            })
            .then(this.toggleFavorite);
         }

        this.getStory();
        
    }


    

  

    createVote(imgId, value) {
        let url = "https://api.thedogapi.com/v1/votes";

        console.log(this.state.img, value);
        fetch(url, {
            method:"POST",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Content-Type": "application/json",
                "x-api-key": "2a7e13c9-16c1-425d-82e6-f61b7b1d6cc1",
            },
            body:JSON.stringify({
                image_id:imgId,
                value:value,
            })
        })
        this.setState({
            like:false,
            favoriteId:0,
        })


        this.getStory();
    }

    

    render ()
 
     {
         let favorite = "";
         if (this.state.like) {
            favorite="active";
         }
         
         let storyImg = (<div className="placeholder"> <div className="Load"></div></div>);


         let voteStory = this.state.voteStory.slice(-4);
         let favoriteStory = this.state.favoriteStory.slice(-4);

         
         
            


         for (let key in this.state.img ) {
            storyImg =  (<img src={this.state.img.url} alt="" />);
            break;
         }

        //  <img src={this.state.img.url} alt="" />
        return (
            <div className="voting">
                <SearchBar /> 

                <div className="voting__main">
                    <div className="voting__main-head">
                        <button  className="btn-back"><img src={back} alt=""/></button>
                        <button className="btn-static">VOTING</button>
                    </div>
                    <div className="voting__main-body">
                        <div className="story__img">{storyImg}</div>
                        <div className="story__rating">
                            <button onClick={()=>{this.createVote(this.state.img.id, 1)
                                 this.setState(state =>(
                                
                                {
                                like:false,
                                 img:{}}))
                                this.getImage() }} className="btn-rate"><img src={btnRateLike} alt="" /></button>
                            <button className={`btn-rate ${favorite}`} onClick={()=>{this.createFav(this.state.img.id) }}>
                               <svg width="30" height="30" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.07107 0C3.61354 0 0 3.61354 0 8.07107C0 10.2116 0.850339 12.2646 2.36396 13.7782L14.2929 25.7071C14.6834 26.0976 15.3166 26.0976 15.7071 25.7071L27.636 13.7782C29.1497 12.2646 30 10.2116 30 8.07107C30 3.61354 26.3865 0 21.9289 0C19.7884 0 17.7354 0.850341 16.2218 2.36396L15 3.58579L13.7782 2.36396C12.2646 0.850343 10.2116 0 8.07107 0Z" stroke="white" strokeWidth="2"/>
                                </svg>
                                </button>
                                <button onClick={()=>{this.createVote(this.state.img.id, 0)
                                    this.setState(state =>(                               
                                {
                                like:false,
                                 img:{}
                                }))
                                this.getImage() }} className="btn-rate"><img src={btnRateDis} alt="" /></button>
                        </div>
                    </div>
                    <div className="voting__story">
                        {voteStory.map(storyItem=>{let date = new Date(storyItem.created_at)
                        let storyItemIcon = {storyFav};
                        let storyItemDescription ="was added to Favourites";
                        if(storyItem.value==0) {
                            storyItemIcon=storyDis;
                             storyItemDescription ="was added to Dislike";
                        }
                        else if (storyItem.value==1) {
                            storyItemIcon=storyLike;
                             storyItemDescription ="was added to Like";
                        }
                        
                          return  (
                              <div className="story__item">
                                <time className="story__time">{zeroTime(date.getHours())}:{zeroTime(date.getMinutes())}</time>
                                <p className='story__info'>Image ID: <span className="img__name">{storyItem.image_id}</span>{storyItemDescription}</p>
                                <img src={storyItemIcon} alt="" className="story__rate" />
                              </div>
                        )})}
                        
                       
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}
function zeroTime(x) {
    return  x<10 ? "0" + x : x
  }


export default Voting
