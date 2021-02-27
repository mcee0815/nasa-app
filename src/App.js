import React, {Component} from 'react';
import './App.css';
import Info from './info';
import Logo from './Logo';
import logo from './logo.png';
import Media from './media';
import AppTitle from './app-title';

import Explanation from './explanation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        dataSet:{},
        Url:'https://api.nasa.gov/planetary/apod?api_key=VfjVfU5gqOithCSrIJjz8a4xde96DzEpBp6WyKqv' 
    };
    this.getMedia = this.getMedia.bind(this);
    this.getData = this.getData.bind(this);
  }
  
  
  getMedia() {
    const {url,hdurl,media_type} = this.state.dataSet
    
    if (media_type === 'video') {
      return <iframe src={url} title='media' width="450" height="450"></iframe>
    } else if (media_type === 'image') {
      return <img className="img-fluid rounded" alt="foo" src={hdurl} />
    } 
  }
  async getData(url){
    let dataSet =  await fetch(url)
        return dataSet.json()
  }
  async componentDidMount() {
    const {Url} = this.state
    //let result = await this.getData(fetchUrl)
      this.setState({
        dataSet:await this.getData(Url)
      })

    // fetch(fetchUrl)
    // .then((res) => res.json())
    // .then((data) => {
    //     this.setState({ dataSet:data })
    //     console.log(this.state.dataSet)
    // })
  }
  render(){
    const {title,copyright,date,explanation} = this.state.dataSet
    
    return (
      <div className="container">
      <div className="d-flex flex-column mx-auto">
      <AppTitle appTitle={'NASA Pic Of The Day'} />
      <Logo logo={logo} className="" alt="logo" />
      <Info 
        title={ title || 'no data' } 
        copyright={ copyright || 'no data'} 
        date={ date || 'unknown'}/>
      <Media media={this.getMedia()} />
      <Explanation explanation={explanation || 'no data'} />
      </div>
        
          
        
      </div>
    );
  }
}

export default App;
