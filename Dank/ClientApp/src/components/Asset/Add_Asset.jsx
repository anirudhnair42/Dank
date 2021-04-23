import React, { Component } from 'react';

import axios from 'axios';

export class Add_Asset extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            tokenBal: 0,
            usdBal: 0,
        };
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeTokenBal = this.onChangeTokenBal.bind(this);
        this.onChangeUSDBal = this.onChangeUSDBal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeTokenBal(e) {
        this.setState({
            tokenBal: e.target.value
        });
    }

    onChangeUSDBal(e) {
        this.setState({
            usdBal: e.target.value
        });
    }

    onSubmit(e){
        alert('An asset was submitted: ' + this.state.name);
        e.preventDefault();
        const {history} = this.props;

        let assetObject =  {
            iD: Math.floor(Math.random()*1000),
            name : this.state.name,
            address : this.state.address,
            tokenBal: this.state.tokenBal,
            usdBal: this.state.usdBal
        }

        axios.post("api/Portfolio/AddAsset", assetObject).then(result =>{
            history.push('/assets');
        })
    }
 

    render() {
        return (
            
            <div className="asset-form" >
                <h3>Add new balance</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Asset name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.name}
                          onChange={this.onChangeName}
                         />
                    </div>
                    <div className="form-group">
                        <label>Asset Address: </label>
                        <textarea 
			    type="text" 
                          className="form-control"
                          value={this.state.address}
                          onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Token Balance:  </label>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  value={this.state.tokenBal}
                                  onChange = {this.onChangeTokenBal}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                          <div className="form-group">
                            <label>USD Balance:  </label>
                            <input 
                                type="number" 
                                className="form-control" 
                                value={this.state.usdBal}
                                onChange={this.onChangeUSDBal}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Balance" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
} 