import React from "react";
import './landholdings_create.css'

class LandHoldingCreate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            account: "",
            ownerId: this.props.currentUser.id,
            legalEntity: "",
            netMineralAcres: "",
            mineralOwnerRoyalty: "",
            sectionName: "",
            section: "",
            township: "",
            range: "",
            titleSource: "",
            accountObject: {},
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.update = this.update.bind(this)
        this.updateAccount = this.updateAccount.bind(this)
    }

    componentDidMount(){
        this.props.fetchAllAccounts(this.props.currentUser.id);
    }

    update(field){
        if(field === 'section' || field === 'range' || field === 'township'){
            return (e) => this.setState({[field]: e.currentTarget.value.toUpperCase(),
            sectionName: `${this.state.section} ${this.state.township} ${this.state.range}`})
        }
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    updateAccount(e){
        e.preventDefault();
        this.setState({accountObject: this.props.accounts[e.target.value]})
        this.setState({account: this.props.accounts[e.target.value]._id}) 
    }

    submitHandler(e){
        e.preventDefault()

        this.props.createLandHolding(this.state).then(()=> {
            let newAccount = this.state.accountObject;
            newAccount.numLandHoldings = (parseInt(newAccount.numLandHoldings) + 1).toString()
            this.props.updateAccount(newAccount).then(()=> this.props.history.push('/landholdings'))
        })

    }

    render(){
        return(
            <div>
                <form id='landholding-form'>
                    <label>Name
                        <input type='text' placeholder='Name' value={this.state.name} onChange={this.update('name')}/>
                    </label>

                    <label>Account
                        <select id='account-select' onChange={ e =>this.updateAccount(e)}>
                            <option defaultValue>Please select an Account</option>
                            {this.props.accounts.map((account,i) => <option value={i} key={i}>{account.name}</option>)}
                        </select>
                    </label>
                    
                    <label>Legal Entity
                        <input type='text' placeholder='Legal Entity' onChange={this.update('legalEntity')} value={this.state.legalEntity}/>

                    </label>

                    <label>Net Mineral Acres
                        <input type='number' placeholder='Net Mineral Acres' min='0' onChange={this.update('netMineralAcres')} value={this.state.netMineralAcres}/>
                    </label>
                    
                    <label>Mineral Owner Royalty
                        <input type='number' placeholder='Mineral Owner Royalty' min='0' max='100' onChange={this.update('mineralOwnerRoyalty')} value={this.state.mineralOwnerRoyalty}/>
                    </label>
                    <label>Section (3 characters)
                        <input type='text' placeholder='Section' minLength='3' maxLength='3' onChange={this.update('section')} value={this.state.section}/>
                    </label>
                    <label>Township (4 characters, must end in 'N' or 'S')
                        <input type='text' placeholder='Township' minLength='4' maxLength='4' onChange={this.update('township')} value={this.state.township}/>
                    </label>
                    <label>Range (4 characters, must end in 'E' or 'W')
                        <input type='text' placeholder='Range' minLength='4' maxLength='4' onChange={this.update('range')} value={this.state.range}/>
                    </label>

                    <select id='title-source' onChange={this.update('titleSource')}>
                        <option defaultValue>Please select a Title Source</option>
                        <option>Class A</option>
                        <option>Class B</option>
                        <option>Class C</option>
                        <option>Class D</option>
                    </select>
                    <button onClick={this.submitHandler}>Create LandHolding</button>
                </form>
            </div>
        )
    }
}

export default LandHoldingCreate