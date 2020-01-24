import React from 'react';
import Axios from 'axios';


export default class ShowDogBreeds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogBreeds: [],
            imageOfRandomDog: [],
            ObjectBreedAndImage: {}
        }  
    }
 
    async   componentDidMount() {
        const res = await Axios.get("https://dog.ceo/api/breeds/list/all")
        this.state.dogBeerds = Object.keys(res.data.message)
    
        for (let i = 0; i < this.state.dogBeerds.length; i++) {
    
          const newRandom = await Axios.get('https://dog.ceo/api/breed/' + this.state.dogBeerds[i] + '/images/random')
    
          this.state.imageOfRandomDog.push(newRandom);  
        }   
    }

    render() {

        const {dogBeerds, imageOfRandomDog } = this.state;
       
        return(
            <div>

               <p>  </p>
            </div>
        )
    }
}