import React from "react"

import search from "../img/search.png"
import back from "../img/back.png"

import rateLike from "../img/rating-like.png"
import rateFav from "../img/rating-favorite.png"
import rateDis from "../img/rating-dislike.png"

import upload from "../img/upload.png"

import dropArrow from "../img/dropdown-arrow.png"
import updateBtn from "../img/update-btn.png"

import dog1 from "../img/dog1.png"
import dog2 from "../img/dog2.png"
import dog3 from "../img/dog3.png"
import dog4 from "../img/dog4.png"
import dog5 from "../img/dog5.png"

import dog6 from "../img/dog6.png"
import dog7 from "../img/dog7.png"
import dog8 from "../img/dog8.png"
import dog9 from "../img/dog9.png"



class Gallary extends React.Component {
    render () {
        return (
            <div className="gallery">
                <div className="search__header">
                    <form action="" method="get" className="form__search">
                        <input className="input__search" type="search" placeholder='Search for breeds by name'/>
                        <button type="submit" className="search__btn"><img src={search} alt="" /></button>
                    </form>

                    <a className="search__rating" href=""><img src={rateLike} alt="" /></a>
                    <a className="search__rating" href=""><img src={rateFav} alt="" /></a>
                    <a className="search__rating" href=""><img src={rateDis} alt="" /></a>
                </div>

                <div className="gallery__main">
                    <div className="gallery__main-head">
                        <div className="left">
                            <button  className="btn-back"><img src={back} alt=""/></button>
                            <button className="btn-static">GALLERY</button>
                        </div>
                            <button className="upload-btn"><img src={upload} alt="" /> UPLOAD</button>
                    </div>

                    <div className="gallery__filter">
                        <div className="dropdown_gallery">
                            <p className="label">Random</p>
                            <img src={dropArrow} alt="" />
                                <ul className="item_list">
                                    <li className="drop_item">Random</li>
                                    <li className="drop_item">Desk</li>
                                    <li className="drop_item">Asc</li>  
                             </ul>
                        </div>

                        <div className="dropdown_gallery">
                            <p className="label">Static</p>
                            <img src={dropArrow} alt=""/>
                                <ul className="item_list">
                                    <li className="drop_item">All</li>
                                    <li className="drop_item">Static</li>
                                    <li className="drop_item">Animated</li>
                             </ul>
                        </div>

                        <div className="dropdown_gallery">
                            <p className="label">None</p>
                            <img src={dropArrow} alt=""/>
                                <ul className="item_list">
                                <li className="drop_item">None</li>
                                <li className="drop_item">All breeds</li>
                                <li className="drop_item">Affenpinscher</li>
                                <li className="drop_item">Afghan Hound</li>
                                <li className="drop_item">African Hunting Dog</li>
                                <li className="drop_item">Airedale Terrier</li>
                                <li className="drop_item">Akbash Dog</li>
                                <li className="drop_item">Akita</li>
                             </ul>
                        </div>

                        <div className="last-filter">
                            <div className="dropdown_gallery">
                                <p className="label">5 items per page</p>
                                <img src={dropArrow} alt=""/>
                                    <ul className="item_list">
                                    <li className="drop_item">5 items per page</li>
                                    <li className="drop_item">10 items per page</li>
                                    <li className="drop_item">15 items per page</li>
                                    <li className="drop_item">20 items per page</li>
                                    
                                </ul>
                            </div>
                            <button className='update-btn'><img src={updateBtn} alt="" /></button>
                        </div> 
                    </div>

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


export default Gallary