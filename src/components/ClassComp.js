import React, { Component } from 'react';
import Axios from 'axios'

class ClassComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    
    componentDidMount() {
       Axios.get("https://www.reddit.com/r/reactjs.json").then((response)=>{
           console.log(response.data.data)
           this.setState({
               data:response.data.data.children
           })
       })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                             <h2>Challenge Title</h2>
                        </div>
                        <div className="card-body text-center">
                    
                    <div className="row">
                    
                  .
                {
                    this.state.data && this.state.data.map((data)=>{
                                          return (
                                              <>
                                             
                                              <div className="col-sm-5 mt-3">
                                                  <div className="card bg-dark text-white">
                                                      <div className="card-body bg-dark">
                                                          <label className="font-weight-bold" style={{color:"red",fontStyle:"bold"}}>Title : </label>&nbsp;&nbsp;{data.data.title}<br />
                                                          <label className="font-weight-bold" style={{color:"red",fontStyle:"bold"}}>URL : </label>&nbsp;&nbsp;{data.data.url}<br />
                                                          <label className="font-weight-bold" style={{color:"red",fontStyle:"bold"}}>Score : </label>&nbsp;&nbsp;{data.data.score}<br />
                                                          <label className="font-weight-bold" style={{color:"red",fontStyle:"bold"}}>SelfText_HTML : </label>&nbsp;&nbsp;{data.data.selftext_html}<br />
                                                        
                                                     
                                                      </div>
                                                  </div>
                                              </div>
                                              </>
                                          )
                    })
                }
                </div>
                </div>
            </div>
            </div>
                </div>
        );
    }
}

export default ClassComp;