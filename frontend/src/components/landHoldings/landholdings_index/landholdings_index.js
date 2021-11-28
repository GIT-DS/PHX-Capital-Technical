import React from "react";
import { Link } from 'react-router-dom'

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
            return <div>
                {this.props.landHoldings.map((landHolding,i) => (
                    <div key={i}>
                        <div className='landholding-info'>
                            <h3>Name: {landHolding.name}</h3>
                            <p>Legal Entity: {landHolding.legalEntity}</p>
                            <p>Net Mineral Acres: {landHolding.netMineralAcres}</p>
                            <p>Mineral Owner Royalty: {landHolding.mineralOwnerRoyalty}%</p>
                            <p>Section Name: {landHolding.sectionName}</p>
                            <p>Section: {landHolding.section}</p>
                            <p>Township: {landHolding.township}</p>
                            <p>Range: {landHolding.range}</p>
                            <p>Title Source: {landHolding.titleSource}</p>
                        </div>
                        <div className='buttons'>
                            <Link to={`/landholdings/edit/${landHolding._id}`}><i className="fas fa-edit" /></Link>
                            <i className="fas fa-trash-alt" onClick={e => this.deleteClickHandler(e, landHolding)}/>
                        </div>
                    </div>
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