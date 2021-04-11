import React, { Component } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap'; 
import constants from '../../config/constant'; 
import apis from '../../api/apihelper'


class GetQuickShortener extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			shortBaseUrl: " ", 
			OriginalUrl: "", 
			showShortenURL: "", 
			isLoading: false, 
			showError: false, 
			extshortUrl: constants.baseUrl
		};

		this.handleUserInput = this.handleUserInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleUserInput(event) {
		const _e = event.target.value; 
		console.log(_e)
		return this.setState({ value: _e})
	}

	handleSubmit(event) {
		const reqObj = {
			OriginalUrl: this.state.OriginalUrl, 
			shortBaseUrl: constants.baseUrl
		}

		console.log(reqObj); 

		apis.getAllShortLinks(reqObj).then(json => {
			console.log('result:', json); 
			
		}).catch(err => {
			console.log('err', err)
		})
	}

	render() {
		const { className, shorten = 'Shorten' } = this.props;

		
		return (
			<div className={classnames( 'newsletter-form field field-grouped is-revealing', className )}>
				<div className="control control-expanded">
					<input className="input" field="originalUrl" placeholder="Paster your link...&hellip;" onChange={this.handleUserInput} />
				</div>

				<div className="control">
					<Button className="button button-primary button-block button-shadow"  onClick={this.handleSubmit}>{shorten}</Button>
				</div>
			</div>      
		);
	}  
}



export default GetQuickShortener;
