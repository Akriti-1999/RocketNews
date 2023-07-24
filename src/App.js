import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsContent from './Components/NewsContent'

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundImage : `url("https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-news-tv-broadcast-technology-background-image_909022.png")`}}>
        <Navbar />
        <NewsContent />
      </div>
    )
  }
}

