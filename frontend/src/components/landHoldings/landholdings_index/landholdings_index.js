import React from "react";
import { Link } from 'react-router-dom'

class LandHoldingIndex extends React.Component{
    constructor(props){
        super(props);
        this.deleteClickHandler = this.deleteClickHandler.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllLandHoldings(this.props.currentUserId)
    }

    deleteClickHandler(e, landHoldingId){
        this.props.deleteLandHolding(landHoldingId)
    }

    render(){


        if (this.props.landHoldings.length > 0){
            console.log(this.props)
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
                            <i className="fas fa-trash-alt" onClick={e => this.deleteClickHandler(landHolding._id)}/>
                        </div>
                    </div>
                ))}
            </div>
        } else {
            return <div>
                <h3>No Accounts yet! <Link to='/landHoldings/create'>Create an Account</Link></h3>
            </div>
        }
    }
}

export default LandHoldingIndex