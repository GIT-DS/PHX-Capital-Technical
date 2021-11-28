import React from "react";
import { Link } from 'react-router-dom'
import LandHoldingBox from "./landholdings_box";
import './landholdings.css'

class LandHoldingIndex extends React.Component{
    constructor(props){
        super(props);
        this.deleteClickHandler = this.deleteClickHandler.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllLandHoldings(this.props.currentUserId)
        this.props.fetchAllAccounts(this.props.currentUserId)
    }

    deleteClickHandler(e, landHolding){
        let newAccount = this.props.accounts.filter(account => account._id === landHolding.account)[0]
        newAccount.numLandHoldings = (parseInt(newAccount.numLandHoldings) - 1).toString()
        this.props.updateAccount(newAccount)
        .then(() => 
        this.props.deleteLandHolding(landHolding._id)
        )
    }

    render(){

        if (this.props.landHoldings.length > 0){
            return <div id='landholding-index'>
                {this.props.landHoldings.map((landHolding,i) => (
                    <LandHoldingBox key={i} landHolding={landHolding} deleteAccount={this.props.deleteAccount}/>
                ))}
            </div>
        } else {
            return <div>
                <h3>No Land Holdings yet! <Link to='/landHoldings/create'>Create a Land Holding!</Link></h3>
            </div>
        }
    }
}

export default LandHoldingIndex