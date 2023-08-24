import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/Screens/Dashboard/Dashboard';
import ProductDetails from './src/Screens/ProductDetails/ProductDetails';
import AllProduct from './src/Screens/AllProducts/AllProduct';
import InAppBrowsers from './src/Screens/InAppBrowsers/InAppBrowsers';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="AllProduct" component={AllProduct} />
        <Stack.Screen name="InAppBrowsers" component={InAppBrowsers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
