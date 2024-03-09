import { View, Text, Dimensions, TouchableOpacity, TextInput, StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather, Entypo } from '@expo/vector-icons';
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
dh = Dimensions.get('window').height
dw = Dimensions.get('window').width

export default function Home({ navigation }) {
    return (
        <View style={styles.parent}>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 5, fontSize: 14, fontWeight: '500', borderRightWidth: 2 }}>
                        Myntra <AntDesign style={{ fontWeight: '700' }} name="down" size={14} color="#e0849e" /></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingLeft: 10, paddingRight: 5 }}>
                            <FontAwesome5 name="crown" size={23} color="#ab9866" />
                        </Text>
                        <Text style={{ fontSize: 9, fontWeight: '900' }}>BECOME{`\n`}<Text style={{ fontSize: 12, color: '#ab9866' }}>
                            INSIDER </Text><Text><AntDesign name="right" size={14} color="black" /></Text> </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={{ paddingRight: 10 }}>
                        <FontAwesome name="bell-o" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={{ paddingRight: 10 }}>
                        <FontAwesome name="heart-o" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 10 }} y>
                        <Feather name="shopping-bag" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
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
                            <FontAwesome5 name="microsoft" size={24} color="black" />
                        </TouchableOpacity>
                    </ScrollView>

                </View>

                <View style={styles.cont}>
                    <ScrollView horizontal={true}>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.box}>
                                <Image style={styles.img2} source={require('../img/beauty-pr-removebg-preview.png')}></Image>

                            </TouchableOpacity>
                            <Text>Explore</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.box}>
                                <Image style={styles.img1} source={require('../img/men_img-removebg-preview.png')}></Image>

                            </TouchableOpacity>
                            <Text>Men</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.box}>
                                <Image style={styles.img1} source={require('../img/women-img-removebg-preview.png')}></Image>

                            </TouchableOpacity>
                            <Text>Women</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.box}>
                                <Image style={styles.img1} source={require('../img/kids-img-removebg-preview.png')}></Image>

                            </TouchableOpacity>
                            <Text>Kids</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.box}>
                                <Image style={styles.img1} source={require('../img/shoes-img-removebg-preview.png')}></Image>

                            </TouchableOpacity>
                            <Text>Shoes</Text>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <Image style={{ height: 100, resizeMode: 'contain', width: '100%' }} source={require('../img/img3.jpg')}></Image>
                </View>

                <View style={{ marginTop: -8 }}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity>
                            <Image style={{ height: 300, width: dw, resizeMode: 'cover' }} source={require('../img/img1.jpg')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image style={{ height: 300, width: dw, resizeMode: 'cover' }} source={require('../img/img6.jpg')}></Image>

                        </TouchableOpacity>


                    </ScrollView>

                </View>
                <View >
                    <ScrollView horizontal={true}>
                        <TouchableOpacity>
                            <Image style={{ height: 70, width: dw, resizeMode: 'contain' }} source={require('../img/img2.jpg')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image style={{ height: 70, width: dw, resizeMode: 'contain' }} source={require('../img/img4.jpg')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image style={{ height: 70, width: dw, resizeMode: 'contain' }} source={require('../img/img5.jpg')}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image style={{ height: 70, width: dw, resizeMode: 'contain' }} source={require('../img/img7.jpg')}></Image>

                        </TouchableOpacity>


                    </ScrollView>

                </View>

                <View style={styles.offer}>
                    <Image style={{ height: 60, width: dw / 1, objectFit: 'cover' }} source={require('../img/coupons conunter.jpg')}></Image>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                            <Image style={{ height: 120, width: dw / 1, resizeMode: 'contain' }} source={require('../img/code.jpg')}></Image>
                        </View>
                        <View>
                            <Image style={{ height: 120, width: dw / 1, resizeMode: 'contain' }} source={require('../img/code2.jpg')}></Image>

                        </View>
                    </ScrollView>

                </View>
                <View style={{ marginTop: 10, marginBottom: 20 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Image style={{ height: 60, width: dw / 1, objectFit: 'cover' }} source={require('../img/crazy.jpg')}></Image>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity>
                            <Image style={{ height: 250, width: 200, resizeMode: 'contain' }} source={require('../img/belt.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ height: 250, width: 200, resizeMode: 'contain' }} source={require('../img/airpod.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ height: 250, width: 200, resizeMode: 'contain' }} source={require('../img/pumashoes.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ height: 250, width: 200, resizeMode: 'contain' }} source={require('../img/watches.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ height: 250, width: 200, resizeMode: 'contain' }} source={require('../img/bags.jpg')}></Image>
                        </TouchableOpacity>
                    </ScrollView>

                </View>


            </ScrollView>

            <View style={{ backgroundColor: '#fff', height: 60, bottom: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, elevation: 5, }}>
                <TouchableOpacity >
                    <Image style={{ height: 40, width: 40, resizeMode: 'cover' }} source={require('../img/myntra-logo-m-png-3.png')}></Image>
                    <Text style={styles.txt}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ height: 40, width: 40, resizeMode: 'contain', marginLeft: 13 }} source={require('../img/fwd-removebg-preview.png')}></Image>
                    <Text style={styles.txt}>
                        Hot Trends
                    </Text></TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="lightning-bolt-outline" size={35} color="black" />
                    <Text style={styles.txt}>New</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Brands')
                }}>
                    <Image style={{ height: 35, width: 40, resizeMode: 'contain' }} source={require('../img/star_13692233.png')}></Image>
                    <Text style={styles.txt}>
                        Brands
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile')
                }}>
                    <FontAwesome name="user-o" size={30} color="black" />
                    <Text style={styles.txt}>User</Text>
                </TouchableOpacity>

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
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    rect: {
        borderWidth: 1,
        borderRadius: 50,
        width: dw / 3.8,
        flexDirection: 'row',

        alignItems: 'center',
        marginLeft: 5,
        paddingHorizontal: 5,
        height: 40
    },
    scroll: {
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row',
        marginRight: 10,

    },
    cir: {
        height: 40,
        width: 40,
        borderRadius: 25,
        borderWidth: 2,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    cont: {

        marginLeft: 10,
        flexDirection: 'row',
        height: dh / 6.2,

    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: '#d0b2ce',
        borderRadius: 15,

        marginTop: 20,
        marginRight: 10

    },
    img1: {
        height: 120,
        width: 100,
        resizeMode: 'cover',
        marginTop: -20,

    },
    img2: {
        height: 100,
        width: 100,

        resizeMode: 'cover',



    }
    ,
    txt: {
        fontSize: 10,
        fontWeight: '500'
    },
    offer: {

    }
})