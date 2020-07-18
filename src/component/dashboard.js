import { React } from 'react';
import { Text } from 'react-native';

const Dashboard = () => {
    return <Text style={Styles.textStyle} > Hello World </Text>
};

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
}); 

export default Dashboard

