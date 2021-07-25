import React from "react"
import logo from "./img/PetsPawLogo.png"
import votingCard from "./img/Voting-card.png"
import breedsCard from "./img/Breeds-card.png"
import galleryCard from "./img/Gallery-card.png"
import {Link} from "react-router-dom"



class Home extends React.Component {
    render() {

        return(
            <div className="home">
                <div className="home_fixed">
                    <div className="logo"><img src={logo} alt="" /> PetsPaw</div>
                    <h1 className="home__title">Hi intern!</h1>
                    <p className="home__subtitile">Welcome to MSI 2021 Front-end test</p>
                    <h2 className="home__start">Lets start using The Dogs API</h2>
                    <div className="home__cards">
                        <Link to="/voting"><img src={votingCard} alt="" /><button className="btn">VOTING</button></Link>
                        <Link to="/breeds"><img src={breedsCard} alt="" /><button className="btn">BREEDS</button></Link>
                        <Link to="/gallery"><img src={galleryCard} alt="" /><button className="btn">GALLERY</button></Link>
                    </div>
                    </div>
               
                
            </div>

        )
    }
}

export default Home