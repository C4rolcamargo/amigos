import * as React from 'react'; import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Isadora Silveira</Text>

<text> A Isadora minha amiga por que ela sempre ve o melhor as pessoas e me ajuda a melhorar como pessoa. 
Está sempre alegre, mesmo quando ninguém consegue ver isso, essa é sua essência.</text>
<Button
title="cabra"
onPress={() => navigation.navigate('Details')} />
</View>
 );
}


function DetailsScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Geovanna Nascimento</Text>
<text> A Geovanna é minha amiga porque nós temos os mesmos interesses e humor em comum. 
É uma pessoa enérgica, muito gentil e sempre busca o melhor nos outros.</text>
<Button
title="Cantar a muscia de abertura de "O show da Luna"
onPress={() => navigation.push('Details')}
/>
<Button title="Go to Home" onPress={() => navigation.navigate('Home')}  />
<Button title="Go back" onPress={() => navigation.goBack()} />
</View>
);
}







const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;

