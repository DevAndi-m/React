import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
    }

  render() {
    return (
      <div>
        <h2>Post List</h2>
      </div>
    )
  }
}

export default PostList
