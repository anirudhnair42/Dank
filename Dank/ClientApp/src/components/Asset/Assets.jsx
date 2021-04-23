import React, { Component } from 'react';

import axios from 'axios';

export class Assets extends Component {

    constructor(props) {
        super(props);

        this.onAssetUpdate = this.onAssetUpdate.bind(this);

        this.state = {
            assets: [],
            loaded: false
        }
    }

    componentDidMount() {
        this.populateAssetData();
    }

    onAssetUpdate(iD) {
        const {history} = this.props;
        history.push('/update/'+iD);
    }

    populateAssetData() {
        axios.get("api/Portfolio/GetAsset").then(result =>{
            const response = result.data;
            this.setState({assets: response, loaded: true});
        })
    }

    renderPortfolio(assets){
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Balance in Crypto</th>
                    <th>Balance in USD</th>
                    <th>Total Balance</th>
                </tr>
                </thead>
                <tbody>
                {
                    assets.map(assets => (
                        <tr key={assets.iD}>
                           <td>{assets.name}</td>
                           <td>{assets.address}</td>
                           <td>{assets.tokenBal}</td>
                           <td>{assets.usdBal}</td>
                           <td>{(assets.tokenBal) + (assets.usdBal)}</td>
                           <td>
                               <div className="form-group">
                                   <button onClick= {() => this.onAssetUpdate(assets.iD)} className="btn btn-success">
                                       Update
                                   </button>

                               </div>
                           </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }

    render() {

        let content = !this.state.loaded ? (
            <p>
                <em>Loading....</em>
            </p>
        ) : (
            this.renderPortfolio(this.state.assets)
        )
        
        return (
            <div>
                <h1>Your Portfolio</h1>
                <p> Here you can see your balances</p>
                {content}
            </div>
        );
    }
}