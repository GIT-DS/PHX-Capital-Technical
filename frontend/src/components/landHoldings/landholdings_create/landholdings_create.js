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
        this.errorTag = this.errorTag.bind(this)
        this.errorMessage = this.errorMessage.bind(this)
        this.props.clearLandHoldingErrors();
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
            this.props.updateAccount(newAccount).then(()=> this.props.errors.length === 0 ? this.props.history.push('/landholdings') : null)
        })

    }

    errorTag(field){
        let id = Object.keys(this.props.errors).includes(field) ? "error" : ""
        return id;
    }

    errorMessage(field){
        if (Object.keys(this.props.errors).includes(field)){
            return <p id='error-message'>{this.props.errors[[field]]}</p>
        }
    }

    render(){
        console.log(this.props.errors)
        return(
            <div id='landholding-form-container'>
                <form id='landholding-form'>
                    <label id={this.errorTag('name')}>
                        <div className='input-section'>
                            <p>Name</p>
                            <input type='text' placeholder='Name' value={this.state.name} onChange={this.update('name')}/>
                        </div>
                        {this.errorMessage('name')}
                    </label>

                    <label id={this.errorTag('account')}>
                        <div className='input-section'>
                            <p>Account</p>
                            <select id='account-select' onChange={ e =>this.updateAccount(e)}>
                                <option defaultValue>Please select an Account</option>
                                {this.props.accounts.map((account,i) => <option value={i} key={i}>{account.name}</option>)}
                            </select>
                        </div>
                        {this.errorMessage('account')}
                        
                    </label>
                    
                    <label id={this.errorTag('legalEntity')}>
                        <div className='input-section'>
                            <p>Legal Entity</p>
                            <input type='text' placeholder='Legal Entity' onChange={this.update('legalEntity')} value={this.state.legalEntity}/>
                        </div>
                        {this.errorMessage('legalEntity')}

                    </label>

                    <label id={this.errorTag('netMineralAcres')}>
                        <div className='input-section'>
                            <p>Net Mineral Acres</p>
                            <input type='number' placeholder='Net Mineral Acres' min='0' onChange={this.update('netMineralAcres')} value={this.state.netMineralAcres}/>
                        </div>
                        {this.errorMessage('netMineralAcres')}
                    </label>
                    
                    <label id={this.errorTag('mineralOwnerRoyalty')}>
                        <div className='input-section'>
                            <p>Mineral Owner Royalty</p>
                            <input type='number' placeholder='Mineral Owner Royalty' min='0' max='100' onChange={this.update('mineralOwnerRoyalty')} value={this.state.mineralOwnerRoyalty}/>
                        </div>
                        {this.errorMessage('mineralOwnerRoyalty')}
                    </label>
                    <label id={this.errorTag('section')}>
                        <div className='input-section'>
                            <p>Section</p>
                            <input type='text' placeholder='Section' minLength='3' maxLength='3' onChange={this.update('section')} value={this.state.section}/>
                        </div>
                        {this.errorMessage('section')}
                    </label>
                    <label id={this.errorTag('township')}>
                        <div className='input-section'>
                            <p>Township (must end in 'N' or 'S')</p>
                            <input type='text' placeholder='Township' minLength='4' maxLength='4' onChange={this.update('township')} value={this.state.township}/>
                        </div>
                        {this.errorMessage('township')}
                    </label>
                    <label id={this.errorTag('range')}>

                        <div className='input-section'>
                            <p>Range (must end in 'E' or 'W')</p>
                            <input type='text' placeholder='Range' minLength='4' maxLength='4' onChange={this.update('range')} value={this.state.range}/>
                        </div>
                        {this.errorMessage('range')}
                    </label>
                    <label id={this.errorTag('titleSource')}>
                        <div className='input-section'>
                            <p>Title Source</p>
                            <select id='title-source' onChange={this.update('titleSource')}>
                                <option defaultValue>Please select a Title Source</option>
                                <option>Class A</option>
                                <option>Class B</option>
                                <option>Class C</option>
                                <option>Class D</option>
                            </select>
                        </div>
                        {this.errorMessage('titleSource')}

                    </label>
                    <div id='button' onClick={this.submitHandler}>Create LandHolding</div>
                </form>
            </div>
        )
    }
}

export default LandHoldingCreate