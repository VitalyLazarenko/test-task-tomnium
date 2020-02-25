import React, { Component } from 'react';

import { fetchData } from '../../data/api';
import './style.css';

export default class CurrencyList extends Component {
  state = {
    loading: true,
    data: null
  };

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          loading: false,
          data
        });
      })

      .catch(err => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const { loading, data } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='list'>
        {Object.keys(data.rates).map(key => {
          return (
            <div className='listItem'>
              <span className='rateKey'>{key}</span>
              <span className='rateValue'>{data.rates[key].toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
