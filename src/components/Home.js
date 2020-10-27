import React, { Component } from 'react'
import axios from 'axios'
class Home extends Component {
    state = {
        name:"",
        age:null,
        posts:[]
    }
    componentDidMount(){   
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response=>{
             console.log(response);
             this.setState({
                 posts:response.data.slice(0,3)                
             })
          })
    }
    render() {
        console.log(this.state.posts);
        const postList=this.state.posts.length?(
            this.state.posts.map(element=>{
                return(
                <div className='card' style={{marginBottom:"2rem"}} key={ element.id } >
                    <h3>{element.title}</h3>
                    <p>{element.body}</p>
                </div>
            )})
        ):(<div>...loading</div>)
        return (
            <div>
             
               <h4 >fetched data </h4>
                {postList}
            </div>
        )
    }
}

export default Home
