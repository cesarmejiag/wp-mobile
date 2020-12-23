import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'

export default function Header({ title, leftButton, navigation, style }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.header, { paddingTop: insets.top }]}>
            <View style={[styles.side, styles.alignLeft, { paddingLeft: 30 }]}>
                {leftButton && <Icon
                    type="material-community"
                    name="chevron-left"
                    size={40}
                    color="#4a4a4a"
                    onPress={navigation.goBack} />}
            </View>
            <View style={styles.logoWrapper}>
                <Image
                    style={styles.logo}
                    source={require('./../../assets/img/logo.png')} />
            </View>
            <View style={styles.side}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        backgroundColor: "#B9F7FA",
        flexDirection: "row",
        height: 90,
    },
    side: {
        width: "20%"
    },
    logoWrapper: {
        alignItems: "center",
        width: "60%"
    },
    alignLeft: {
        alignItems: "flex-start"
    },
    logo: {
        height: 21,
        resizeMode: "contain",
        width: 138
    }
});