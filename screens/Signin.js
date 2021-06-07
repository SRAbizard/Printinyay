import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Signin = ({ navigation }) => {

    const login = () => {
        console.log("login")
    }

    return (
       <SafeAreaView>
           <View style={styles.container}>
               <Text style={styles.text1}> Silahkan Masuk </Text>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/user.png')} style={styles.icon} name="user-icon" size={20}/>
                   <TextInput style={styles.uname} placeholder='masukan username'></TextInput>
               </View>
               <View style={styles.user}>
                   <Image source={require('../assets/icons/pass.png')} style={styles.icon} name="user-icon" size={20}/>
                   <TextInput style={styles.pw} placeholder='masukan password' secureTextEntry={true}></TextInput>
               </View>
               <TouchableOpacity style={styles.btn} onPress={login}>
                   <Text style={styles.text4}>Masuk</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
               <Text style={styles.text2}>
                   Lupa password? sentuh  
                       <Text style={styles.text3}> disini</Text>
               </Text>
               </TouchableOpacity>
               <View style={styles.garis} />
               <Text style={styles.atau}>atau</Text>
               <View style={styles.garis2} />
               <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
               <Text style={styles.text5}>
                   Belum punya akun ?
                       <Text style={styles.text6}> daftar yuk</Text>
               </Text>
               </TouchableOpacity>
           </View>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        fontSize: 15,
        marginTop: 50,
    },

    text3: {
        fontSize: 15,
        color: '#0085FF',
    },

    text4: {
        fontWeight: 'bold',
        fontSize: 19
    },

    text5: {
        fontSize: 15,
    },

    text6: {
        fontSize: 15,
        color: '#F6217B',
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    uname: {
        paddingLeft: 25,
        width: 280
    },
    
    pw: {
        paddingLeft: 25,
        width: 280
    },

    btn: {
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
        elevation: 5,
    },

    garis: {
        backgroundColor: 'black',
        width: 75,
        height: 2,
        marginTop: 20,
        right: 60
    },

    garis2: {
        backgroundColor: 'black',
        width: 75,
        height: 2,
        left: 60,
        bottom: 21
    },

    atau: {
        bottom: 12,
        fontWeight: 'bold',
        fontSize: 15,
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
    }
})

export default Signin;