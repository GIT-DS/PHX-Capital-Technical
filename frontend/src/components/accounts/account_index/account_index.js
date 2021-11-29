import React from "react";
import { Link } from 'react-router-dom'
import AccountBox from "./account_box";
import './account_index.css'

class AccountIndex extends React.Component{
    constructor(props){
        super(props)
        this.deleteClickHandler = this.deleteClickHandler.bind(this)
    }

    deleteClickHandler(e, account){
        e.preventDefault();
        this.props.landHoldings.forEach(landHolding => {
            if(landHolding.account === account._id) 
                this.props.deleteLandHolding(landHolding._id)
            })
        this.props.deleteAccount(account._id)
    }

    componentDidMount(){
        this.props.fetchAllAccounts(this.props.currentUserId)
        this.props.fetchAllLandHoldings(this.props.currentUserId)
    }

    render(){
        if(!this.props.accounts){
            return null;
        }

        if (this.props.accounts.length > 0){
            return <div id='account-index'>
                {this.props.accounts.map((account,i) => (
                    <AccountBox key={i} account={account} deleteClickHandler={this.deleteClickHandler}/>
                ))}
            </div>
        } else {
            return <div>
                <h3>No Accounts yet! <Link to='/accounts/create'>Create an Account</Link></h3>
            </div>
        }
    }
}

export default AccountIndex