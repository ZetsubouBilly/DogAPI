import React from "react";
import SearchBar from "../SearchBar";

import search from "../img/search.png";
import back from "../img/back.png";

import rateLike from "../img/rating-like.png";
import rateFav from "../img/rating-favorite.png";
import rateDis from "../img/rating-dislike.png";

import upload from "../img/upload.png";

import dropArrow from "../img/dropdown-arrow.png";
import updateBtn from "../img/update-btn.png";

import dog1 from "../img/dog1.png";
import dog2 from "../img/dog2.png";
import dog3 from "../img/dog3.png";
import dog4 from "../img/dog4.png";
import dog5 from "../img/dog5.png";

import dog6 from "../img/dog6.png";
import dog7 from "../img/dog7.png";
import dog8 from "../img/dog8.png";
import dog9 from "../img/dog9.png";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: {},
      like: false,
      favoriteId: 0,
      voteStory: [],
      favoriteStory: [],
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.createFav = this.createFav.bind(this);
  }
  componentDidMount() {
    this.getStory();
  }

  toggleFavorite() {
    this.setState((state) => ({
      like: !state.like,
    }));
  }

  getStory() {
    let url = "https://api.thedogapi.com/v1/votes";

    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "x-api-key": "2a7e13c9-16c1-425d-82e6-f61b7b1d6cc1",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          voteStory: response,
        });
      });
  }

  createFav(imgId) {
    let url = "https://api.thedogapi.com/v1/favourites";

    console.log(this.state.img);

    if (this.state.like) {
      url = `https://api.thedogapi.com/v1/favourites/${this.state.favoriteId}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "x-api-key": "2a7e13c9-16c1-425d-82e6-f61b7b1d6cc1",
        },
      }).then(this.toggleFavorite);
    } else {
      fetch(url, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json",
          "x-api-key": "2a7e13c9-16c1-425d-82e6-f61b7b1d6cc1",
        },
        body: JSON.stringify({
          image_id: imgId,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            favoriteId: response.id,
          });
        })
        .then(this.toggleFavorite);
    }

    this.getStory();
  }
  render() {
    let favorite = "";
    if (this.state.like) {
      favorite = "active";
    }

    return (
      <div className="gallery">
        <SearchBar />

        <div className="gallery__main">
          <div className="gallery__main-head">
            <div className="left">
              <button className="btn-back">
                <img src={back} alt="" />
              </button>
              <button className="btn-static">GALLERY</button>
            </div>
            <button className="upload-btn">
              <img src={upload} alt="" /> UPLOAD
            </button>
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
              <img src={dropArrow} alt="" />
              <ul className="item_list">
                <li className="drop_item">All</li>
                <li className="drop_item">Static</li>
                <li className="drop_item">Animated</li>
              </ul>
            </div>

            <div className="dropdown_gallery">
              <p className="label">None</p>
              <img src={dropArrow} alt="" />
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
                <img src={dropArrow} alt="" />
                <ul className="item_list">
                  <li className="drop_item">5 items per page</li>
                  <li className="drop_item">10 items per page</li>
                  <li className="drop_item">15 items per page</li>
                  <li className="drop_item">20 items per page</li>
                </ul>
              </div>
              <button className="update-btn">
                <img src={updateBtn} alt="" />
              </button>
            </div>
          </div>

          <div className="breeds__main-body">
            <div className="grid-block1">
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog1} alt="" />
              </div>

              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog2} alt="" />
              </div>
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog3} alt="" />
              </div>
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog4} alt="" />
              </div>
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog5} alt="" />
              </div>

              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog6} alt="" />
              </div>
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog7} alt="" />
              </div>
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog8} alt="" />
              </div>
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog9} alt="" />
              </div>
              <div className="grid_item">
                <div className="grid_item-wrapper">
                  <button
                    className={`wrapper_fav-btn ${favorite}`}
                    onClick={() => {
                      this.createFav(this.state.img.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        stroke="#FF868E"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <img src={dog2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
