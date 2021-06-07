import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

const ConfirmationPass = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text1}>Konfirmasi Password Baru</Text>
                <View style={styles.user}>
                   <Image source={require('../assets/icons/pass.png')} style={styles.icon} name="user-icon" size={20}/>
                   <TextInput style={styles.pw} placeholder='password baru' secureTextEntry={true}></TextInput>
               </View>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/pass.png')} style={styles.icon} name="user-icon" size={20}/>
                   <TextInput style={styles.pw} placeholder='konfirmasi password baru' secureTextEntry={true}></TextInput>
               </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text2}>Change</Text>
                </TouchableOpacity> 
                <Image source={require('../assets/images/confpass.png')} style={styles.img} />       
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
        marginBottom: 20
    },

    text2: {
        fontWeight: 'bold',
        fontSize: 19
    },

    pw: {
        paddingLeft: 20,
    },

    button: {
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

    icon: {
        padding: 10,
        width: 5,
        height: 5,
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
        height: 300,
        width: 300,
        marginTop: 30
    }
})

export default ConfirmationPass;