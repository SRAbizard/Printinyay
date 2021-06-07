import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import {} from 'firebase'

const Signup = ({ navigation }) => {
    const signup = () => {
        
    }
    return (
       <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate("Signin")}>
                    <Image source={require('../assets/icons/back.png')} style={styles.icon2} name="user-icon" size={20}/>
                    <Text style={styles.text5}>Login</Text>
                </TouchableOpacity>
            </View>
           <View style={styles.container}>
               <Text style={styles.text1}> Selamat Datang </Text>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/user.png')} style={styles.icon1} name="user-icon" size={20}/>
                   <TextInput style={styles.inputan} placeholder='masukan username'></TextInput>
               </View>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/phone.png')} style={styles.icon1} name="user-icon" size={20}/>
                   <TextInput style={styles.inputan} placeholder='nomor ponsel' keyboardType="numeric" ></TextInput>
               </View>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/email.png')} style={styles.icon1} name="user-icon" size={20}/>
                   <TextInput style={styles.inputan} placeholder='masukkan email'></TextInput>
               </View>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/pass.png')} style={styles.icon1} name="user-icon" size={20}/>
                   <TextInput style={styles.pw} placeholder='masukan password' secureTextEntry={true}></TextInput>
               </View>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/pass.png')} style={styles.icon1} name="user-icon" size={20}/>
                   <TextInput style={styles.pw} placeholder='konfirmasi password' secureTextEntry={true}></TextInput>
               </View>
               <TouchableOpacity style={styles.btn1}>
                   <Text style={styles.text4}> Daftar</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
               <Text style={styles.text2}>
                   Sudah punya akun?
                       <Text style={styles.text3}> sign in </Text>
               </Text>
               </TouchableOpacity>
           </View>
           
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text1: {
        marginBottom:30,
        fontSize: 30,
        marginTop: 80,
        justifyContent: "center",
        fontWeight: 'bold',
        textAlign: 'center'
    },

    text2: {
        fontSize: 15,
        marginTop: 30
    },

    text3: {
        fontSize: 15,
        color: '#0085FF',
       
    },

    text4: {
        paddingLeft: 15,
        paddingBottom: 1,
        fontSize: 19,
        fontWeight: 'bold'
    },

    text5: {
        paddingLeft: 15,
        paddingBottom: 1,
        fontSize: 16
    },

    container: {
        alignItems: 'center'
    },

    inputan: {
        paddingLeft: 25,
        width: 280
    },
    
    pw: {
        paddingLeft: 25,
        width: 280
    },

    btn1: {
        width: '70%',
        borderRadius: 10,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
        marginTop: 30,
        backgroundColor: '#FFFF00',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },

    btn2: {
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
        marginTop: 5,
        width: 300,
        height: 43,
        borderRadius: 0,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
    }
})

export default Signup;