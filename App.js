import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
  Picker,
  Image
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import {
  FormLabel,
  FormInput,
  Icon,
  Tile
} from 'react-native-elements';

import { Dropdown } from 'react-native-material-dropdown';

const country = null;


const colorTable = {
  red: '#DC4C4F',
  lightBlue: '#3993A3',
  blue: '#007791',
  orange: '#FF8847'
};

const colorArray = Object.keys(colorTable);

class SearchScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      Airlines: null,
      error: null,
    };
  }

  componentDidMount(){
    fetch('https://freegeoip.net/json/')
      .then((response) => response.json())
      .then((responseJSON) => {
        country = responseJSON.country_code
      }).catch((error) => {
        console.error(error);
      });
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
      name='search'
      type='feather'
      color='#517fa4'
      />
   )
  };

  render() {
    let airlines = [
      {value: 'American'},
      {value: 'South Western'},
    ];

    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FormLabel>Enter Airlines</FormLabel>
        <Dropdown
          label='Airlines'
          data={airlines}
          containerStyle={{paddingLeft: 21, paddingRight: 21}}
        />
        <FormLabel>Enter Flight No.</FormLabel>
        <FormInput Title="1234"/>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#9E9E9E',
            marginLeft: 21,
            marginRight: 21,
            marginTop: 30,
            padding: 20
          }}
        >
          <Text style={{color: "#FFFFFF"}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class FlightScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
        size= {33}
      />
   )
  };

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
                <Image
                  style={{
                    width: Dimensions.get('window').width/2,
                    height: Dimensions.get('window').height/2,
                  }}
                  source={{uri: 'https://zzoob.com/wp-content/uploads/2017/08/585be1aa1600002400bdf2a6.jpeg'}}
                />
            </TouchableOpacity>
           </View>
           <View>
             <TouchableOpacity
              style={styles.button2}
             >
               <Image
                 style={{
                   width: Dimensions.get('window').width/2,
                   height: Dimensions.get('window').height/2,
                 }}
                 source={{uri: 'https://zzoob.com/wp-content/uploads/2017/08/585be1aa1600002400bdf2a6.jpeg'}}
               />
             </TouchableOpacity>
           </View>
       </View>
       <View style={styles.row}>
           <View>
             <TouchableOpacity
             style = {styles.button3}
             >
             <Image
               style={{
                 width: Dimensions.get('window').width/2,
                 height: Dimensions.get('window').height/2,
                 overflow: "hidden"
               }}
               source={{uri: 'https://zzoob.com/wp-content/uploads/2017/08/585be1aa1600002400bdf2a6.jpeg'}}
             />
             </TouchableOpacity>
           </View>

           <View>
               <TouchableOpacity
                style={styles.button4}
               >

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
   const { navigate } = this.props.navigation;
   return (
   <View style={styles.overall}>

     <View style={styles.futureContainer}>

       <View>
         <TouchableOpacity
           style={styles.VocabButton}
           onPress={() => navigate('Vocab')}
           >
           <Icon
            name='book'
            type='entypo'
            color='#FFFFFF'
            size={40}
           />
           <Text style={styles.words}>Daily Vocab</Text>
         </TouchableOpacity>
       </View>

       <View>
         <TouchableOpacity
           style={styles.NewsButton}
           onPress={this.onPress}
           >
           <Icon
            name='newspaper-o'
            type='font-awesome'
            color='#FFFFFF'
            size={40}
           />
           <Text style={styles.words}> News </Text>
         </TouchableOpacity>
       </View>

     </View>

     <View style={styles.futureContainer}>

       <View>
         <TouchableOpacity
           style={styles.MoneyButton}
           onPress={this.onPress}
           >
           <Icon
            name='attach-money'
            type='materialicons'
            color='#FFFFFF'
            size={40}
           />
           <Text style={styles.words}> Money </Text>
         </TouchableOpacity>
       </View>

       <View>
         <TouchableOpacity
           style={styles.CultureButton}
           onPress={this.onPress}
           >
           <Icon
            name='fingerprint'
            type='materialicons'
            color='#FFFFFF'
            size={40}
           />
           <Text style={styles.words}> Culture </Text>
         </TouchableOpacity>
       </View>

     </View>

   </View>
 );
 }
}

class VocabScreen extends React.Component {
  render(){
    return(
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Country</Text>
        <Text>{country}</Text>
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
   alignItems: 'center',
   justifyContent: 'center',
   opacity: 1,
   width: Dimensions.get('window').width/2,
   height: Dimensions.get('window').height/2,
  },
   button2: {
     alignItems: 'center',
     justifyContent: 'center',
     opacity: 1,
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
  },
   button3: {
     alignItems: 'center',
     justifyContent: 'center',
     opacity: 1,
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
  },
   button4: {
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
     backgroundColor: '#DC4C4F',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
     paddingBottom: 40,
     borderColor: '#FFFFFF',
     borderWidth: .5,
   },

   NewsButton: {
     backgroundColor: '#FF8847',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
     paddingBottom: 40,
     borderColor: '#FFFFFF',
     borderWidth: .5,
   },

   MoneyButton: {
     backgroundColor: '#007791',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
     paddingBottom: 40,
     borderColor: '#FFFFFF',
     borderWidth: .5,
   },

   CultureButton: {
     backgroundColor: '#3993A3',
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/2,
     justifyContent: 'center',
     alignItems: 'center',
     paddingBottom: 40,
     borderColor: '#FFFFFF',
     borderWidth: .5,
   },

   words: {
     color: 'white'
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
  Vocab: {
    screen: VocabScreen
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
    screen: FunStack,
    navigationOptions: {
      tabBarIcon: (
        <Icon
          name='glass-flute'
          type='material-community'
          color='#517fa4'
          size={25}
        />)
    },
  },
  Future: {
    screen: FutureStack,
    navigationOptions: {
      tabBarIcon: (
        <Icon
          name='list'
          type='feather'
          color='#517fa4'
          size={28}
        />)
    },
  },
});


export default tabNavigator;
