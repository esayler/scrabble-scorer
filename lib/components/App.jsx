import React from 'react';
import scoreWord from '../scoreWord'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      previousWords: []
    }
  }

  updateState(e) {
    this.setState({
      word: e.target.value
    });
  }

  handleSubmit() {
    let score = {
      word: this.state.word,
      score: scoreWord(this.state.word),
      id: Date.now()
    }

    this.state.previousWords.push(score);

    this.setState({
      previousWords: this.state.previousWords,
    });

    this.handleClear();
  }

  handleClear() {
    this.setState({
      word: ''
    });
  }

  render() {
    return (
    <section>
      <input value={this.state.word} placeholder='word' onChange={ e => this.updateState(e) } />
      <h2> Score: {scoreWord(this.state.word)} </h2>
      <button onClick={ this.handleSubmit.bind(this)}> Submit </button>
      <button onClick={ this.handleClear.bind(this)}> Clear </button>
      <ul>
        { this.state.previousWords.map( play => {
          return (
            <li key={play.id}> {play.word} ({ play.score }) </li>
          )
        })
       }
      </ul>
    </section>
  )
  }
}
