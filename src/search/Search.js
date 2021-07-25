import React from "react"
import search from "../img/search.png"
import back from "../img/back.png"

import rateLike from "../img/rating-like.png"
import rateFav from "../img/rating-favorite.png"
import rateDis from "../img/rating-dislike.png"



import dog1 from "../img/dog1.png"
import dog2 from "../img/dog2.png"
import dog3 from "../img/dog3.png"
import dog4 from "../img/dog4.png"
import dog5 from "../img/dog5.png"

import dog6 from "../img/dog6.png"
import dog7 from "../img/dog7.png"
import dog8 from "../img/dog8.png"
import dog9 from "../img/dog9.png"


class Search extends React.Component {
    render () {
        return (
            <div className="search">
                <div className="search__header">
                    <form action="" method="get" className="form__search">
                        <input className="input__search" type="search" placeholder='Search for breeds by name'/>
                        <button type="submit" className="search__btn"><img src={search} alt="" /></button>
                    </form>

                    <a className="search__rating" href=""><img src={rateLike} alt="" /></a>
                    <a className="search__rating" href=""><img src={rateFav} alt="" /></a>
                    <a className="search__rating" href=""><img src={rateDis} alt="" /></a>
                </div>

                <div className="voting__main">
                    <div className="voting__main-head">
                        <button  className="btn-back"><img src={back} alt=""/></button>
                        <button className="btn-static">SEARCH</button>
                        
                       
                       
                                              
                    </div>
                    <p className="search__result">Search results for: <span className="img__name">Basenji</span> </p>
                    <div className="breeds__main-body">
                        <div className="grid-block1">
                            <div className="grid_item"><img src={dog1} alt="" /></div>
                            <div className="grid_item"><img src={dog2} alt="" /></div>
                            <div className="grid_item"><img src={dog3} alt="" /></div>
                            <div className="grid_item"><img src={dog4} alt="" /></div>
                            <div className="grid_item"><img src={dog5} alt="" /></div>
                       
                            <div className="grid_item"><img src={dog6} alt="" /></div>
                            <div className="grid_item"><img src={dog7} alt="" /></div>
                            <div className="grid_item"><img src={dog8} alt="" /></div>
                            <div className="grid_item"><img src={dog9} alt="" /></div>
                            <div className="grid_item"><img src={dog2} alt="" /></div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Search