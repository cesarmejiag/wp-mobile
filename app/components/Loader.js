import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
import { Overlay } from 'react-native-elements'

function Loader(props) {
    const { isVisible, text } = props;

    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0, 0, 0, 0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#717171" />
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#fff"
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#717171",
        textTransform: "uppercase",
        marginTop: 10
    }
});

export default Loader