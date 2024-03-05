import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
dh = Dimensions.get('window').height
dw = Dimensions.get('window').width
export default function Profile({ navigation }) {
    return (
        <>
            <View style={styles.container}>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#fff', paddingBottom: 30 }}>
                <View style={styles.box}>
                    <FontAwesome name="user-o" size={70} color="black" />
                </View>
                <View style={{ marginTop: 20, }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#ff406c', width: dw / 1.8, padding: 7, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Login')
                        }}><Text style={{ color: '#fff', fontSize: 16 }}>Login </Text></TouchableOpacity>
                        <Text style={{ color: '#fff', fontSize: 16 }}>/</Text>
                        <TouchableOpacity><Text style={{ color: '#fff', fontSize: 16 }}> SignUp </Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#f5f5f5', marginTop: 40, }}>
                <TouchableOpacity style={styles.a}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View >
                            <FontAwesome5 name="box" size={34} color="black" />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Orders</Text>
                            <Text style={{ fontSize: 10, fontWeight: '400' }}>Check your order status</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 60 }}>
                        <AntDesign name="right" size={24} color="black" />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.b}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View >
                            <SimpleLineIcons name="earphones-alt" size={24} color="black" />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Help Center</Text>
                            <Text style={{ fontSize: 10, fontWeight: '400' }}>Help regarding your recent order</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 60 }}>
                        <AntDesign name="right" size={24} color="black" />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.c}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View >
                            <FontAwesome5 name="heart" size={34} color="black" />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Wishlist</Text>
                            <Text style={{ fontSize: 10, fontWeight: '400' }}>Your most loved styles</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 60 }}>
                        <AntDesign name="right" size={24} color="black" />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.c}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View >
                            <MaterialIcons name="qr-code-scanner" size={24} color="black" />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Scan for Coupon</Text>

                        </View>
                    </View>
                    <View style={{ marginLeft: 60 }}>
                        <AntDesign name="right" size={24} color="black" />
                    </View>

                </TouchableOpacity>

                <View style={styles.op}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>FAQs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>ABOUT US</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>TERMS OF USE </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>PRIVACY POLICY </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text>
                    App Version 2.44v
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

        height: dh / 7.4,
        backgroundColor: '#545766',
        width: dw / 1,
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: 'whitesmoke',
        marginLeft: 30,
        marginTop: -50,
        elevation: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    a: {
        flexDirection: 'row',
        paddingHorizontal: 20
        ,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4,
        backgroundColor: '#fff'
    },
    b: {
        flexDirection: 'row',
        paddingHorizontal: 20
        ,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 2,
        elevation: 4,
        backgroundColor: '#fff'

    },
    c: {
        flexDirection: 'row',
        paddingHorizontal: 20
        ,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 2,
        elevation: 4,
        backgroundColor: '#fff'

    },
    op: {

        paddingHorizontal: 20
        ,
        height: 150,

        marginTop: 10,
        elevation: 4,
        backgroundColor: '#fff',
        justifyContent: 'center'

    },
})