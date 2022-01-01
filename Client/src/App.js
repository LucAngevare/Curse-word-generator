import api from './Api'
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.submitWord = this.submitWord.bind(this);
    this.curseWords = React.createRef();
    this.state = {
      colors: ["#e6b300", "#a89b28", "#d7743b", "#f0f1f6", "#fec4d2"],
      curseWord: ""
    }
  }

  submitWord(e) {
    e.preventDefault();
    api.insertCurse(this.curseWords.current.value).then((res) => {
      window.location = ""
    })
  }

  componentDidMount() {
    api.getCurse().then((res) => {
      this.setState({curseWord: res.data.data})
    })
  }

  changeColor() {
    api.getCurse().then((res) => {
      this.setState({curseWord: res.data.data})
    });

    var colors = this.state.colors;
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = chosenColor;
    console.log(`${colors}; chosen: ${chosenColor}`);
    if (colors.length === 1) {
        this.setState({colors: ["#e6b300", "#a89b28", "#d7743b", "#f0f1f6", "#fec4d2"]});
    } else {
        colors.splice(colors.indexOf(chosenColor), 1);
        this.setState({colors: colors});
    }
    if (chosenColor === "#f0f1f6" || chosenColor === "#fec4d2") {
        document.body.style.color = "black";
    } else {
        document.body.style.color = "white";
    }
  }

  render() {
    var curseWord = this.state.curseWord;
    return (
      <div className="App">
        <p className="intro">Het scheldwoord voor vandaag is:</p>
        <h1 className="curse">{`${curseWord}`}</h1>
        <button type="button" className="rotate" onClick={() => this.changeColor()}>Nieuw scheldwoord</button>

        <p className='intro'>Stel een nieuw scheldwoord voor!</p>
        <form onSubmit={(e) => this.submitWord(e)}>
          <input type="text" ref={this.curseWords} placeholder="Voer hier je scheldwoord in"/>
          <input type="submit" value="Voorstellen!"/>
        </form>
      </div>
    );
  }
}

export default App;
