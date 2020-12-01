import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


const StackMenu = ({ navigation }) => {
    const menu = [
        { key: 'persional-info', title: 'Personal information', icon: '' },
        { key: 'enrolled-courses', title: 'Enrolled courses', icon: '' },
        { key: 'logout', title: 'Logout', icon: '' },
    ]

    return (<>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>Personal information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>Enrolled courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Welcome')}>
            <Text>Logout</Text>
        </TouchableOpacity>
        {/* {menu.map(item => <TouchableOpacity style={styles.buttonContainer}>
            <Text>{item.title}</Text>
        </TouchableOpacity>)} */}
    </>)
}

// export default class Account extends Component {

// render() {
function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.info}>UX Designer / Mobile developer</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                    {/* <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Personal information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Enrolled courses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Welcome')}>
                        <Text>Logout</Text>
                    </TouchableOpacity> */}

                    <StackMenu navigation={navigation} />

                </View>
            </View>
        </View>
    );
}
//     }
// }

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 100,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 30
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 5,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});

export default Account
