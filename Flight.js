import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
	onPress = () => {
		Alert.alert('Button pressed');
	}

  render() {
    return (
      <View style={styles.container}>
				<View style = {styles.flightDetails}>
					<View style = {styles.aFlight}>
						<View style = {styles.toFrom}>
							<Text style = {styles.toFromText}>From</Text>
						</View>
						<View style = {styles.aTerminal}>
							<Text style = {styles.aTerminalText}>ORD Terminal 5</Text>
							<Text style = {styles.aTerminalText}>5:34pm Sat Jan 27</Text>
						</View>
					</View>
					<View style = {styles.aFlight}>
						<View style = {styles.toFrom}>
							<Text style = {styles.toFromText}>To</Text>
						</View>
						<View style = {styles.aTerminal}>
							<Text style = {styles.aTerminalText}>CDG Terminal 2E</Text>
							<Text style = {styles.aTerminalText}>8:18am Sun Jan 28</Text>
						</View>
					</View>
				</View>
				<View style = {styles.flightButtonsContainer}>
					<TouchableOpacity 
						style = {styles.flightButton}
						onPress = {this.onPress}
					>
						<Text style = {styles.flightButtonText}>Upgrades</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style = {styles.flightButton}
						onPress = {this.onPress}
					>
						<Text style = {styles.flightButtonText}>Luggage</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style = {styles.flightButton}
						onPress = {this.onPress}
					>
						<Text style = {styles.flightButtonText}>Checklist</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style = {styles.flightButton}
						onPress = {this.onPress}
					>
						<Text style = {styles.flightButtonText}>Yeet</Text>
					</TouchableOpacity>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingTop: 50,
    backgroundColor: '#fff',
  },
	flightDetails:{
		flex: 1,
	},
	aFlight:{
		justifyContent: 'space-between',
		flexDirection: 'row',
		flex:1,
	},
	aTerminal:{
	},
	aTerminalText:{
		paddingTop: 5,
		fontSize: 20,
	},
	toFrom:{
	},
	toFromText:{
		fontWeight: 'bold',
		fontSize: 60,
		color: '#e5b3fc',
	},
	flightButtonsContainer:{
		paddingBottom: 100,
		justifyContent: 'space-around',
		flex: 1,
	},
	flightButton:{
		paddingTop: 10,
		paddingBottom: 10,
		alignItems: 'center',
		backgroundColor: '#e5b3fc',
	},
	flightButtonText:{
		fontWeight: 'bold',
		fontSize: 20,
	},
});


