import React from 'react'
import './styles.css'
const _ = require("lodash");  

class Demo1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      names: [],
      age: '',
      email:'',
      location:[],
      hobbies: [],
      gender: '',
        
    }
  }

  updateInputValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateCheckboxValue = (event) => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  updateDynamicValue = (id, collectionName, event) => {
    event.persist();
    this.setState((prevState) => ({
      [collectionName]: prevState[collectionName].map(item => {
        return item.id !== id ? item : Object.assign({}, item, {
          [event.target.name]: event.target.value
        });
      })
    }));
  };

  addDynamicItem = (collectionName) => {
    this.setState((prevState) => ({
      
      [collectionName]: prevState[collectionName].concat([{ 

        id: _.uniqueId(`${collectionName}-value-`),
        
      }])
    }));
  };

  removeDynamicItem = (id, collectionName, event) => {
    this.setState((prevState) => {
      let indexToRemove = prevState[collectionName].findIndex(x => x.id === id);
      return {
        [collectionName]: [...prevState[collectionName].slice(0, indexToRemove), ...prevState[collectionName].slice(indexToRemove + 1)]
      }
    });
  };

  render() {

    return (
      <div>
        <form>
        {
            this.state.names.map((item, i) => (
              <div>
                <div className="form-group" key={item.id}>
                  <label>Name{i + 1}</label>
                  <div className="input-group">
                   <input className="form-control" name="fname" value={item.fname} onChange={this.updateDynamicValue.bind(this, item.id, 'names')}/>
                    <input className="form-control" name="lname" value={item.lname} onChange={this.updateDynamicValue.bind(this, item.id, 'names')}/>

                    <span className="input-group-btn">
                      <button className="btn btn-danger" onClick={this.removeDynamicItem.bind(this, item.id, 'names')}>Remove</button>
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={this.addDynamicItem.bind(this, 'names')}>Add Your Name</button>
          </div>
        
          <div className="form-group">
            <label>Age</label>
            <input className="form-control" type= 'number'name="age" value={this.state.age} onChange={this.updateInputValue}/>
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input className="form-control" name="email" value={this.state.email} onChange={this.updateInputValue}/>
          </div>
         

          {
            this.state.location.map((item, i) => (
              <div>
                <div className="form-group" key={item.id}>
                  <label>Location{i + 1}</label>
                  <div className="input-group">
                    <input className="form-control" name="city" value={item.city} onChange={this.updateDynamicValue.bind(this, item.id, 'location')}/>
                    <input className="form-control" name="country" value={item.country} onChange={this.updateDynamicValue.bind(this, item.id, 'location')}/>
                    <input className="form-control" name="address" value={item.address} onChange={this.updateDynamicValue.bind(this, item.id, 'location')}/>

                    <span className="input-group-btn">
                      <button className="btn btn-danger" onClick={this.removeDynamicItem.bind(this, item.id, 'location')}>Remove</button>
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={this.addDynamicItem.bind(this, 'location')}>Add Your Location</button>
          </div>

          {
            this.state.hobbies.map((item, i) => (
              <div>
                <div className="form-group" key={item.id}>
                  <label>Hobbies{i + 1}</label>
                  <div className="input-group">
                    <input className="form-control" name="hobby" value={item.hobby} onChange={this.updateDynamicValue.bind(this, item.id, 'hobbies')}/>
                    <input className="form-control" name="style" value={item.style} onChange={this.updateDynamicValue.bind(this, item.id, 'hobbies')}/>
                    
                    <span className="input-group-btn">
                      <button className="btn btn-danger" onClick={this.removeDynamicItem.bind(this, item.id, 'hobbies')}>Remove</button>
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={this.addDynamicItem.bind(this, 'hobbies')}>Add Your Hobbies</button>
          </div>
         
          <div className="form-group">
            <label className="radio-inline">
              <input type="radio" name="gender" value="Male" checked={this.state.gender === 'Male'} onChange={this.updateInputValue} />
              Male
            </label>
            <label className="radio-inline">
              <input type="radio" name="gender" value="Female" checked={this.state.gender === 'Female'} onChange={this.updateInputValue} />
              Female
            </label>
          </div>
          
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <pre style={{marginTop: '1em'}}>{JSON.stringify(this.state, null, '\t')}</pre>
      </div>
    );
  }
}

export default Demo1;


