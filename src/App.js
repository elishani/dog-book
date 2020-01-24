import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BreedsPage from './pages/BreedsPage';
import SpecificDogsPage from './pages/SpecificDogsPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogBreeds: [],
      srcOfRandomDogList: [],
      value: 'select',
      redirectToBreedsPage: false,
      dogs: [],
      isSelected: false
    }

    this.refreshPage = this.refreshPage.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.capitalize = this.capitalize.bind(this);

  }


  async   componentDidMount() {

    let srcOfRandomDog = []
    const res = await Axios.get("https://dog.ceo/api/breeds/list/all")
    const breedNameArray = Object.keys(res.data.message)

    for (let i = 0; i < breedNameArray.length; i++) {

      const newRandom = await Axios.get('https://dog.ceo/api/breed/' + breedNameArray[i] + '/images/random')

      srcOfRandomDog.push(newRandom);
    }

    this.setState({
      dogBreeds: breedNameArray,
      srcOfRandomDogList: srcOfRandomDog
    });
  }


  async handleSelection(event){
    
    this.setState({
      value: event.target.value,
      redirectToBreedsPage: true
    });

    const breedUrl = ('https://dog.ceo/breed/' + event.target.value + '/images')
    const res2 = await Axios.get(breedUrl)
    const dogsToShow = Object.values(res2.data.message)
    
    this.setState({
      dogs: dogsToShow
    })

  }


  refreshPage() {
    window.location.reload()
  }


  capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  render() {
  const { dogBreeds} = this.state

    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage dogBreeds={dogBreeds} srcOfRandomDogList={this.state.srcOfRandomDogList} handleSelection={this.handleSelection} redirectToBreedsPage={this.state.redirectToBreedsPage}  refreshPage={this.refreshPage}  capitalize={this.capitalize} />
            </Route>
            <Route exact path="/breeds">
              <BreedsPage />
            </Route>
            <Route exact path="/specificbeerd">
              <SpecificDogsPage />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
