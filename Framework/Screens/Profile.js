import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export function Profile() {
    return (
        <safeAreaView style={styles.container}>
            <Text>Profile</Text>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../../assets/Xskool-v-gold.png")}
                    style={styles.logo}
                />
                <View>
                    <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 18 }}>John Wick</Text>
                    <Text style={styles.welcomeText}>Learn, Grow, Explore!</Text>
                </View>
            </View>
            <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
                <Carousel
                    loop
                    width={screenWidth - 40}
                    height={170}
                    autoPlay={true}
                    data={carouselLinks}
                    style={{ borderRadius: 10 }}
                    scrollAnimationDuration={2000}
                    renderItem={({ index }) => (
                        <Image style={{ width: '100%', height: 170, borderRadius: 10, }} source={{ uri: carouselLinks[index] }} defaultSource={require("../../assets/slide4.png")} />
                    )}
                />

            </View>
        </safeAreaView>
    )
}

const styles = StyleSheet.create({})