import React from 'react'
import { Link } from 'react-router-dom'

class LandHoldingBox extends React.Component{
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
        const {name, legalEntity, _id, netMineralAcres, mineralOwnerRoyalty, sectionName, section, township, range, titleSource} = this.props.landHolding
        return (
            <div className='landholding-box' onClick={this.clickHandler}>
                <div id="landholding-header">
                    <h3>Name: {name}</h3>
                    <div className='buttons'>
                        <Link to={`/landholdings/edit/${_id}`}><i className="fas fa-edit" /></Link>
                        <i className="fas fa-trash-alt" onClick={e => this.props.deleteClickHandler(e, this.props.landHolding)}/>
                    </div>
                </div>
                {this.state.id === "show" ? 
                    <div id='landholding-info'>
                        <div className='landholding-info-bits'><label>Legal Entity: </label><p>{legalEntity}</p></div>
                        <div className='landholding-info-bits'><label>Net Mineral Acres: </label><p>{netMineralAcres}</p></div>
                        <div className='landholding-info-bits'><label>Mineral Owner Royalty: </label><p>{mineralOwnerRoyalty}%</p></div>
                        <div className='landholding-info-bits'><label>Section Name: </label><p>{sectionName}</p></div>
                        <div className='landholding-info-bits'><label>Section: </label><p>{section}</p></div>
                        <div className='landholding-info-bits'><label>Township: </label><p>{township}</p></div>
                        <div className='landholding-info-bits'><label>Range: </label><p>{range}</p></div>
                        <div className='landholding-info-bits'><label>Title Source: </label><p>{titleSource}</p></div>
                    </div>
                    : ""}
                
            </div>
        )
    }
}

export default LandHoldingBox