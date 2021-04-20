import React, { Component } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap'; 
import { CopyToClipboard }  from 'react-copy-to-clipboard'
import constants from '../../config/constant'; 
import apis  from '../../api/apihelper'



class GetQuickShortener extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			shortBaseUrl: " ", 
			originalUrl: "", 
			shortUrl: "",
			showShortenUrl: false, 
			isLoading: false,   
			showError: false, 
			extshortUrl: constants.baseUrl, 
			copied: false 
		};


		this.handleUserInput = this.handleUserInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleUserInput(event) {
		const name = event.target.name; 
		const value = event.target.value;
		console.log(value); 
		this.setState({ [name]: value}); 
	}  

	handleSubmit(event) {
		event.preventDefault(); 
		const reqObj = { //parse the data to axios 
			originalUrl: this.state.originalUrl, 
			shortBaseUrl: constants.baseUrl, 
		}

		if(this.state.originalUrl){
			apis.createShortUrl(reqObj)
				.then(response => {
					setTimeout(() => {
						this.setState({
							showShortenUrl: true, 
							shortUrl: response.data.data.shortUrl
						})
					}, 0)
				})

				.catch(err => {
					this.setState({
						isLoading: false, 
						apiError: err.apiError,   
					}); 

					console.log('Something Happened', err)
				}) 
		}else {

			//Display Some Error to the User if 
			//* Unable to provide a Url
			//* Bad Url 

			this.setState({ showError: true }); 
		}

	}

	renderButton(shorten) {
		return (
			<Button className="button button-primary button-block button-shadow" onClick={this.handleSubmit}>{shorten}</Button>
		)
	}


	copyShortenUrl() {
		return (
			<div>
				<input name="shortUrl" className="input" field="copyShortenUrl" value={this.state.shortUrl} placeholder="Copy your link..." disabled />
				<CopyToClipboard text={this.state.shortUrl} onCopy={() => this.setState({ copied: true})}><Button>Copy</Button></CopyToClipboard>
				{this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
			</div>
		)
	}
  
	render() {
		const { className, Shorten = 'Shorten' } = this.props;
		return (
			<>
				<div className={classnames( 'newsletter-form field field-grouped is-revealing', className )}>
					<div className="control control-expanded">
						<input name="originalUrl" className="input" field="originalUrl" placeholder="Paste your link...&hellip;" value={this.state.originalUrl} onChange={this.handleUserInput.bind(this)} />
						{this.state.showError}
						{this.renderButton(Shorten)}

					</div>

					{this.copyShortenUrl()}
				</div>
			</>
		);
	}  
}



export default GetQuickShortener;
