import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
dh = Dimensions.get('window').height
dw = Dimensions.get('window').width
export default function Login({ navigation }) {
    return (

        <View>

            <View style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: 'whitesmoke', elevation: 5, height: 90, marginTop: 10, }}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile')
                }} style={{ flexDirection: 'row' }}>
                    <AntDesign style={{ paddingTop: 10 }} name="arrowleft" size={30} color="black" />
                    <Text style={{ fontSize: 24, fontWeight: '600' }}>

                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.container} source={require('../img/flat.jpg')}></Image>


            <View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20 }}>
                        Login & Signup
                    </Text>




                </View>
                <View style={{ borderWidth: 1, padding: 10, width: dw / 1.1, justifyContent: 'center', marginHorizontal: 20, marginTop: 20 }}>
                    <TextInput placeholder='Enter your Mobile number'></TextInput>
                </View>

                <Text style={{ fontSize: 12, fontWeight: '500', marginTop: 30, paddingHorizontal: 20 }}>By continuing, I agree<Text style={{ color: '#ff5b99' }}> Terms of use</Text> &<Text style={{ color: '#ff5b99' }}> Privacy Policy</Text></Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>CONTINUE</Text>
            </TouchableOpacity>

            <View style={{ marginHorizontal: 20, marginTop: 50 }}>
                <Text>
                    Have troubled in Logging in ? <Text style={{ color: '#ff5b99', fontWeight: '600' }}>Get Help</Text>
                </Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: dh / 4,
        width: dw / 1,
        resizeMode: 'contain'
    },
    btn: {
        height: 70,
        backgroundColor: '#ff5b99',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    txt: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '800'
    }
})