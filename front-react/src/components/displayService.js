import React from 'react'
import ReactJson from 'react-json-view'
import ReactTextTransition, { presets } from "react-text-transition";
import Loader from 'react-loader-spinner'

class DisplayService extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            dataService: null,
            displayLoader : false
        };
    }


    fetchApi () {
        this.setState({displayLoader:true})
        fetch("https://demo-preprod-dot-mobile-retail-r8gs.appspot.com/preprod/gae/info")
        .then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
            }
            console.log(JSON.stringify(response))
            return response
        })
        .then(d => d.json())
        .then(d => {

            this.setState({
                dataService: d.data,
                displayLoader: false
            })
        })
    }

    componentDidMount() {
            this.interval = setInterval(() => this.fetchApi() , 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {


        var marginStyle = {
            margin: '10px'
          };

        var bigStyle = {
            textAlign : 'center'
          };

        let loader = <div>&nbsp;</div>
        if(this.state.displayLoader) {
            loader = <Loader  type="ThreeDots" color="#0082c3" height="50"width="50" /> 
        }

        if (this.state.dataService != null) {
            return (
                <div>
                <table width="100%" style={marginStyle}>
                    <tr>
                        <td width="5%">  {loader} </td>
                        <td width="30%" style={bigStyle}>
                            <b>Project</b>
                            <br />
                            <h1>{this.state.dataService["envInfo"]["GOOGLE_CLOUD_PROJECT"] }</h1>
                        </td>
                        <td width="30%" style={bigStyle}>
                            <b>Service</b>
                            <br />
                            <h1>{this.state.dataService["envInfo"]["GAE_SERVICE"] }</h1>
                        </td>
                        <td width="25%">
                            <b>Version</b>
                            <br />
                                <h1>
                                <ReactTextTransition
                                    text={this.state.dataService["envInfo"]["GAE_VERSION"]}
                                    spring={presets.gentle}
                                    style={{ margin: "4 0px", textAlign: 'left'}}
                                    inline
                                    overflow
                                    />
                                </h1>
                        </td>
                    </tr>
                    <tr> <td> &nbsp;</td></tr>
                    <tr>    
                    <td width="5%"> </td>
                        <td>
                            <b>Instance Name</b>
                            <br />

                            <ReactTextTransition
                                    text= {this.state.dataService["envInfo"]["GAE_INSTANCE"] }
                                    spring={presets.gentle}
                                    style={{ margin: "4 0px", textAlign: 'left'}}
                                    inline
                                    overflow
                                    />
                           
                        </td>
                        <td>
                            <b>Instance MemorySize</b>
                            <br />
                            {this.state.dataService["envInfo"]["GAE_MEMORY_MB"] }
                        </td>
                    </tr>
                    <tr> <td> &nbsp;</td></tr>
                    <tr>
                    <td width="5%"> </td>
                        <td>
                            <b>Staging</b>
                            <br />
                            {this.state.dataService["envInfo"]["custom"]["staging"] }
                        </td>
                        <td>
                            <b>Redis information</b>
                            <br />
                            {this.state.dataService["envInfo"]["custom"]["redisHost"] + ':' + this.state.dataService["envInfo"]["custom"]["redisPort"] }
                        </td>
                    </tr>
                    
                </table>

                <br />

                <div style={marginStyle}>
                    <h4>Response from service : </h4>
                    <ReactJson src={this.state.dataService} theme="monokai" />
                </div>

                </div>
            )
        } else {
            return (
                <div> </div>
                )
        }
    }
}


export default DisplayService;