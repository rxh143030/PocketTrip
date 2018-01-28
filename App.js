import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
  Picker
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

class SearchScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      Airlines: null,
    };
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Enter Airline</Text>
        <Picker

        >
        </Picker>
        <Text>Enter Flight no.</Text>
        <TextInput
          placeholder="1234"
        />
      </View>
    );
  }
}

class FlightScreen extends React.Component {
  render() {
    return(
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
        <Text>Flight Screen</Text>
      </View>
    );
  }
}

class FunHomeScreen extends React.Component {

 render() {
  const{navigate}=this.props.navigation;
   return (

     <View style={styles.column}>
       <View style={styles.row}>
           <View>
             <TouchableOpacity
               style={styles.button1}
               onPress={() =>
                 navigate('Food')
               }
             >
                <Text>Hello</Text>
            </TouchableOpacity>
           </View>
           <View>
               <TouchableOpacity
                style={styles.button2}
               >
               <Text >Hello2</Text>
               </TouchableOpacity>
           </View>
       </View>
       <View style={styles.row}>
           <View>
               <TouchableOpacity
               style = {styles.button3}
               >
               <Text >Hello3</Text>
               </TouchableOpacity>
           </View>

           <View>
               <TouchableOpacity
                style={styles.button4}
               >
               <Text >Hello4</Text>
               </TouchableOpacity>
           </View>

       </View>
     </View>
       );
 }
}

class FoodScreen extends React.Component {

 static navigationOptions = ({navigation}) => ({
   title: 'Food'
 });

 render() {
   const{goBack}=this.props.navigation;
   return (

     <Button
       title="Go Back"
       onPress={() => goBack()}
     />
       );
 }
}

class FutureHomeScreen extends React.Component {
 render() {
   return (
   <View style={styles.overall}>

     <View style={styles.futureContainer}>

       <View>
         <TouchableOpacity
           style={styles.VocabButton}
           onPress={this.onPress}
           >
           <Text style={styles.words}> Vocab! </Text>
         </TouchableOpacity>
       </View>

       <View>
         <TouchableOpacity
           style={styles.NewsButton}
           onPress={this.onPress}
           >
           <Text style={styles.words}> News! </Text>
         </TouchableOpacity>
       </View>

     </View>

     <View style={styles.futureContainer}>

       <View>
         <TouchableOpacity
           style={styles.MoneyButton}
           onPress={this.onPress}
           >
           <Text style={styles.words}> Money! </Text>
         </TouchableOpacity>
       </View>

       <View>
         <TouchableOpacity
           style={styles.CultureButton}
           onPress={this.onPress}
           >
           <Text style={styles.words}> Culture! </Text>
         </TouchableOpacity>
       </View>

     </View>

   </View>
 );
 }
}

const styles = StyleSheet.create({

  row: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'flex-start',
   flexDirection: 'row',

  },
  column:{
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'flex-start',
   flexDirection: 'column',
  },

  button1: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   opacity: 1,
   width: Dimensions.get('window').width/2,
   height: Dimensions.get('window').height/2,
  },
   button2: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     opacity: 1,
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
  },
   button3: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     opacity: 1,
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
  },
   button4: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     opacity: 1,
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
  },
    overall: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
   },
   futureContainer: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
     backgroundColor: '#aaa',

   },

   VocabButton: {
     backgroundColor: 'skyblue',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
   },

   NewsButton: {
     backgroundColor: 'red',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
   },

   MoneyButton: {
     backgroundColor: 'orange',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
   },

   CultureButton: {
     backgroundColor: 'yellow',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
   },

   words: {
     alignItems: 'center',
     justifyContent: 'center',
   },

});

const FunStack = StackNavigator({
  HomeScreen: {
    screen: FunHomeScreen
  },
  Food: {
    screen: FoodScreen
  },
});

const FutureStack = StackNavigator({
  HomeScreen: {
    screen: FutureHomeScreen
  },
});

const tabNavigator = TabNavigator({
  Search:{
    screen: SearchScreen
  },
  Flight: {
    screen: FlightScreen
  },
  Fun: {
    screen: FunStack
  },
  Future: {
    screen: FutureStack
  },
});

export default tabNavigator;
