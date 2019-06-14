import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Smurf from './Smurf';

const SmurfList = styled.div`
  margin: 0 auto;
  display:flex;
  width: 100%;
  max-width: 1000px;
  justify-content: space-around;
  flex-wrap: wrap;
`;
class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <Route exact path='/' render={pr => {
            return(
              <div>
                <h1>Smurf Village</h1>
                <SmurfList>
                  {this.props.smurfs.map(smurf => {
                    return (
                      <Smurf
                        name={smurf.name}
                        id={smurf.id}
                        age={smurf.age}
                        height={smurf.height}
                        key={smurf.id}
                        delete={this.props.deleteSmurf}
                      />
                    );
                  })}
                </SmurfList>
              </div>
            )
          }}
        />
        <Route path='/:id' render={pr => {
            const smurf = this.props.smurfs.find((smurf) => smurf.id === parseInt(pr.match.params.id));
            if(smurf){
              return (
                <SmurfList>
                    <Smurf
                      name={smurf.name}
                      id={smurf.id}
                      age={smurf.age}
                      height={smurf.height}
                      key={smurf.id}
                      delete={this.props.deleteSmurf}
                    />
                </SmurfList>
              )
            } else {
              return null;
            }
          }
          }
        />
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
