import React, { Component } from 'react';
import styled from 'styled-components';

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
              />
            );
          })}
        </SmurfList>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
