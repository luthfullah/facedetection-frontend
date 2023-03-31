import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const app = new Clarifai.App({
  apiKey: '0f9a8ff706b442f9a108175394c9b026'
});

class App extends Component {
  constructor(){
    super();
    this.state={
        input: '',
      }
    }
    onInputChange = (event) => {
      console.log(event.target.value)
    }

    onButtonSubmit = () => {
      
        app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://s3.amazonaws.com/clarifai-api/img3/prod/large/ce1bc8516b5d4a9f88cf5f6e740fe4af/4c2854fbaa1e81d6cd1479e065172fb9?v=1678574447492")
          .then(response => {
            console.log(response);
          })
          .catch(error => console.log(error));
         }

  render(){
    return (
      <div className="App">
        <ParticlesBg color="#ffffff"  num={200} type="cobweb"  bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
           {/* 
           
            <FaceRecognition /> */}
  
  
      </div>
    );
  }
}
 

export default App;
