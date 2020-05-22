import React from 'react';
import Header from '../Header';
import Flower from './Flower';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const listflowers= [
    {id:'1', name:'Rose', price:'12$', stock:'50'},
    {id:'2', name:'Sunflower', price:'11$', stock:'40'},
    {id:'3', name:'Lily', price:'12$', stock:'10'},
    {id:'4', name:'Lavender', price:'15.20$', stock:'50'},
    {id:'5', name:'Plumeria', price:'10.20$', stock:'40'},
    {id:'6', name:'Jasmine', price:'20$', stock:'50'},
    {id:'7', name:'Pansy', price:'25$', stock:'30'},
    {id:'8', name:'Zinnia', price:'12$', stock:'10'}
];

export default class Flowers extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            ff: ''
        });
    }

    updateSearch(event) {
       this.setState({ff: event.target.value});
    }

    handleSubmit() {
        console.log(this.state.ff) ; 
        /*let filterFlower = listflowers.filter(
            (flower) => {
                return flower.name.indexOf(this.state.ff) !== -1;
            }
        );
        console.log(filterFlower); 
        
            {filterFlower.map((flower)=>{
                return <Flower flower={flower} key={flower.id}/>
            })}*/
    }

    render(){
        let filterFlower = listflowers.filter(
            (flower) => {
                return flower.name.toLowerCase().indexOf(this.state.ff.toLowerCase()) !== -1;
            }
        );
        return(
            <div className="flowers">
                <Header />    
                <br></br>  
                <div className="search"  >
                    <InputGroup className="mb-3" value={this.state.ff} >
                        <FormControl
                            placeholder="Name flower"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={this.updateSearch.bind(this)}
                        />
                        <InputGroup.Append >
                            <Button className="btt"  variant="outline-info" onClick={this.handleSubmit.bind(this)}  >Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <br></br> 
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th >Price</th>
                            <th >Stock</th>
                        </tr>
                    </thead>
                    {filterFlower.map((flower)=>{
                        return <Flower flower={flower} key={flower.id}/>
                    })}
                </Table>
            </div>
        );
    }
}