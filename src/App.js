import React, { Component } from 'react';
import Styles from './App.module.css'
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api/index';
import coronaImage from './images/covid19-image.png'

class App extends Component {
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
const {data, country} = this.state;

    return (
      <div className={Styles.container}>
        <img className={Styles.image} alt="COVID-19" src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={ this.handleCountryChange } />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
