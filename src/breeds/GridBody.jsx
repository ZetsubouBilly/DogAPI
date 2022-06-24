import React from 'react'
import GridItem from './GridItem'



class GridBody extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            options:this.props.options,
            selectedBreed: null,
            imgId: this.props.breeds
            
        }

    }

    // componentDidUpdate() {
    //   if (this.props.breed !== this.state.selectedBreed) {
    //     this.setState({
    //       selectedBreed: this.props.breed
    //     });
    //     this.fetchImage();
    //   }
    // }
    // fetchImage = async () => {
    //   const response = await fetch(
    //     `https://api.thedogapi.com/v1/images/${this.props.breeds}`
    //     // `https://api.thedogapi.com/v1/images/rkiByec47`
    //   );
    //   const data = await response.json();
    //   // console.log(data)
    //   const imageUrl = data.message;
    //   this.setState({
    //     imageUrl: imageUrl
    //   });
    // };

 

  render() {

    // console.log(this.props.breed)
    // console.log(this.props.breeds)
    return (
                <div className="grid-block1">
                    {this.props.breeds.map((elem)=> 
                        <GridItem elem={elem} breed={this.props.breed}/>
                     )}            
                </div>                                                                          
    )
  }
}

export default GridBody