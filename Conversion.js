import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';


export class Conversion extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			amount: '',
			baseCurr: '',
			newCurr: '',
			newAmount: 0,
			value: ''
		};
	}

	convertHim(){
		const conversion = '[{"EUR" : 0.80,"GBP" : 0.71,"HKD" : 7.82,"USD" : 1}]';
		let json = JSON.parse(conversion);
		let ratio = 0;
		if(this.state.baseCurr != 'USD'){
			let temp = parseFloat(json[0][this.state.baseCurr], 10);
			temp = 1/temp;
			ratio = temp * parseFloat(json[0][this.state.newCurr], 10);
		}else{
			ratio = parseFloat(json[0][this.state.newCurr], 10);
		}
		this.setState({newAmount: ratio*this.state.amount});
	}

	render(){
		let currencies = [
			{value: 'EUR'},
			{value: 'GBP'},
			{value: 'HKD'},
			{value: 'USD'},
		];

		return(
			<View>
				<Text style = {{paddingTop: 100, fontSize: 50}}>Yeet</Text>
				<Dropdown
					label = 'Currencies'
					data={currencies}
					onChangeText ={(value) => this.setState({baseCurr: value})}
				/>
				<TextInput
					style = {{height: 30}}
					placeholder = "Amount to convert:"
					onChangeText = {(text) => this.setState({amount: text, value: text})}
					keyboardType = 'numeric'
					value = {this.state.value}
				/>
				<Button
					onPress = {() => this.convertHim()}
					title = "Convert"
				/>
				<Text>{this.state.newAmount}</Text>
				<Dropdown
					label = 'Currencies'
					data = {currencies}
					onChangeText ={(value) => this.setState({newCurr: value})}
				/>
			</View>
		);	
	}
}

