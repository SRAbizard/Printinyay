import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
        // Message di Toast
        'Pesan telah terkirim ke Email Anda',
        // Interval Toast Mengilang
        ToastAndroid.LONG,
        // Posisi Toast
        ToastAndroid.TOP,
        0,
        120
    );
};

const Forgot = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Signin")}>
                    <Image source={require('../assets/icons/back.png')} style={styles.icon2} name="user-icon" size={20}/>
                    <Text style={styles.text4}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.text1}>Lupa Password</Text>
                <Text style={styles.text3}>Kami akan mengirimkan sebuah pesan ke Email Anda untuk melakukan reset</Text>
                <View style={styles.user}>
                   <Image source={require('../assets/icons/user.png')} style={styles.icon1} name="user-icon" size={20}/>
                   <TextInput style={styles.email} placeholder='masukkan email'></TextInput>
                </View>
                <TouchableOpacity style={styles.button1} onPress={() => showToast()}>
                    <Text style={styles.text2}>Submit</Text>
                </TouchableOpacity> 
                <Image source={require('../assets/images/forgot.png')} style={styles.img} />       
            </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    text1: {
        width: 271,
        fontSize: 30,
        marginTop: 100,
        justifyContent: "center",
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },

    text2: {
        fontWeight: 'bold',
        fontSize: 19
    },

    text3: {
        textAlign: 'center',
        marginBottom: 10
    },

    text4: {
        paddingLeft: 15,
        paddingBottom: 1,
        fontSize: 16
    },

    email: {
        paddingLeft: 25,
        width: 280
    },

    button1: {
        width: '70%',
        borderRadius: 10,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 19,
        backgroundColor: '#FFFF00',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },

    button2: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        height: 30,
        left: 0
    },

    icon1: {
        padding: 10,
        width: 5,
        height: 5,
        left: 10,
    },

    icon2: {
        padding: 10,
        width: 25,
        height: 25,
        left: 10,
    },

    user: {
        // flex: 1,
        marginTop: 20,
        width: 300,
        height: 43,
        borderRadius: 8,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0DEDE',
    },

    img : {
        height: 250,
        width: 250,
        marginTop: 60
    }
})

export default Forgot;