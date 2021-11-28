import React from 'react'
import { Link } from 'react-router-dom'

class AccountBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: "hidden"
        };
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e){
        if (this.state.id === "hidden"){
            this.setState({id: "show"})
        } else {
            this.setState({id: "hidden"})
        }
    }

    render(){
        const {name, entityType, _id, ownerType, address, numLandHoldings} = this.props.account
        return (
            <div className='account-box' onClick={this.clickHandler}>
                <div id="account-header">
                    <h3>Name: {name}</h3>
                    <div className='buttons'>
                        <Link to={`/accounts/edit/${_id}`}><i className="fas fa-edit" /></Link>
                        <i className="fas fa-trash-alt" onClick={e => this.props.deleteClickHandler(e, this.props.account)}/>
                    </div>
                </div>
                {this.state.id === "show" ? 
                    <div id='account-info'>
                        <div className='account-info-bits'><label>Entity Type: </label><p>{entityType}</p></div>
                        <div className='account-info-bits'><label>Owner Type: </label><p>{ownerType}</p></div>
                        <div className='account-info-bits'><label>Address: </label><p>{address}</p></div>
                        <div className='account-info-bits'><label>Number of Land Holdings: </label><p>{numLandHoldings}</p></div>
                    </div>
                    : ""}
                
            </div>
        )
    }
}

export default AccountBox