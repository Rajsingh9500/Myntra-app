import { View, Text, Dimensions, TouchableOpacity, TextInput, StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
dh = Dimensions.get('window').height
dw = Dimensions.get('window').width

export default function Home() {
    return (
        <View style={styles.parent}>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: '500', borderRightWidth: 2 }}>
                        Myntra <AntDesign style={{ fontWeight: '700' }} name="down" size={16} color="#e0849e" /></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingLeft: 10, paddingRight: 5 }}>
                            <FontAwesome5 name="crown" size={26} color="#ab9866" />
                        </Text>
                        <Text style={{ fontSize: 11, fontWeight: '900' }}>BECOME{`\n`}<Text style={{ fontSize: 14, color: '#ab9866' }}>
                            INSIDER </Text><Text><AntDesign name="right" size={16} color="black" /></Text> </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={{ paddingRight: 10 }}>
                        <FontAwesome name="bell-o" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 10 }}>
                        <FontAwesome name="heart-o" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 10 }} y>
                        <Feather name="shopping-bag" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.search}>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="search" size={24} color="black" />
                    <TextInput style={{ paddingLeft: 15 }} placeholder='Search here'></TextInput>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome style={{ paddingRight: 15 }} name="camera" size={24} color="black" />
                    <FontAwesome style={{ paddingRight: 15 }} name="microphone" size={24} color="black" />
                </View>
            </View>
            <View style={styles.scroll}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity style={styles.rect}>
                        <Image style={styles.img} source={require('../img/Logo1-removebg-preview.png')}></Image>
                        <Text>Fashion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rect}>
                        <Image style={styles.img} source={require('../img/logo2-removebg-preview.png')}></Image>
                        <Text>Beauty</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rect}>
                        <Image style={styles.img} source={require('../img/logo3-removebg-preview.png')}></Image>
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cir}>
                        <FontAwesome5 name="microsoft" size={30} color="black" />
                    </TouchableOpacity>
                </ScrollView>

            </View>
            <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'}></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#fff',
        height: dh
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center',
        height: dh / 15,
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 10
    },
    img: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    rect: {
        borderWidth: 2,
        borderRadius: 50,
        padding: 2,
        width: dw / 3.5,
        flexDirection: 'row',

        alignItems: 'center',
        marginLeft: 5,
        paddingHorizontal: 5
    },
    scroll: {
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row',
        marginRight: 10,

    },
    cir: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }

})