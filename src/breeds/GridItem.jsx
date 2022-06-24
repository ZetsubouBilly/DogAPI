import React from 'react'


class GridItem extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            activeOption:this.props.breed,
            options:this.props.options,
            imageURL:this.props.elem.image.url,
            // imageURL:this.props.elem,
            selectedBreed: null,
        }
    }
    // componentDidUpdate() {
    //     if(this.props.elem.name!== this.state.activeOption){
    //         this.setState({
    //             selectedBreed: this.props.elem,
    //         });
    //          this.fetchImage();
    //     }
       
    // } 
    fetchImage = () => {

        let  url = `https://api.thedogapi.com/v1/images/${this.props.elem.image.id}`;
        
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
                imageURL:response,
            });
            // console.log(this.state.imageURL)
        } )

       
        
    }

  render() {
    // console.log(this.state.imageURL)
    // console.log(this.props.elem)

    return (
        <div className="grid_item">
        <div className="grid_item-wrapper">
            <div className="wrapper_label">{this.props.elem.name}:{this.props.elem.id}</div>
            {/* <div className="wrapper_label">{this.props.activeOption}</div> */}
        </div>
        <img  src={this.state.imageURL}/>
        {/* <img  src={this.props.activeOption}/> */}
    </div>
    )
  }
}

export default GridItem