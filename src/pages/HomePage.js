import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './HomePage.css';
import { Redirect } from 'react-router-dom';

export default class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            element: "show text-center m-10 flash"
        }
    }

    render() {
        const { dogBreeds, srcOfRandomDogList, handleSelection, redirectToBreedsPage, element, refreshPage, capitalize } = this.props

        if (redirectToBreedsPage) {
            return <Redirect to='/breeds'/>
        }

        
        const listGropItems = dogBreeds.map((dogtype, index) => {
            return (<option value={dogtype} key={index} data-index={index}> {dogtype}</option>);
        })

        const listofdogsImage = srcOfRandomDogList.map((dogtype, index) => {
            return (<div key={index} className="col-md-2 textalign">
                <h4 className='text-center'>{capitalize(dogBreeds[index])}</h4>
                <img src={dogtype.data.message} value={index} />
            </div>
            );
        })

        if (listofdogsImage.length > 0){
            this.state.element += " hidden"
        }
        
        return (
            <div>
                <Jumbotron>
                    <h1>Dog Book </h1>
                    <p>Man's Best Friend</p>
                    <select onChange={handleSelection} value=''>
                        <option value="" > Choose here Dog Breed to view</option>
                        {listGropItems}
                    </select>
                    <h1 id="hidden" className={element}> Please wait random dog picture are loaded</h1>
                    <Button variant="primery" type="button" onClick={() => { refreshPage(); }}>Please click to refresh images</Button>
                </Jumbotron>
                <div>
                    {listofdogsImage}
                </div>
            </div>
        )
    }
}

