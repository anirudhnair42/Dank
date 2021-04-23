import React, { Component } from 'react';

import axios from 'axios';

export class Update extends Component{
    constructor(props){
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
        this.onUpdateCancel = this.onUpdateCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        const {iD} = this.props.match.params;

        axios.get("api/Portfolio/SingleAsset/"+iD).then(asset =>{
            const response = asset.data;

            this.setState({
                name: response.name,
                address: response.address,
                tokenBal: response.tokenBal,
                usdBal: response.usdBal
            })
        })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeAddress(e){
        this.setState({
            address: e.target.value
        });
    }

    onChangeTokenBal(e){
        this.setState({
            tokenBal: e.target.value
        });
    }

    onChangeUSDBal(e){
        this.setState({
            usdBal: e.target.value
        });
    }

    onUpdateCancel(){
        const {history} = this.props;
        history.push('/assets');
    }

    onSubmit(e){
        e.preventDefault();
        const {history} = this.props;
        const {iD} = this.props.match.params;

        let assetObject = {
            name: this.state.name,
            address: this.state.address,
            tokenBal: this.state.tokenBal,
            usdBal: this.state.usdBal
        }

        axios.put("api/Portfolio/UpdateAsset/"+iD, assetObject).then(result => {
            history.push('/assets');
        })

    }
    render(){
        return (
            <div className="asset-form" >
                <h3>Add new Asset</h3>
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
                                  onChange={this.onChangeTokenBal}
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
                        <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}