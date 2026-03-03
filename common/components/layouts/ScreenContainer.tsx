import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
    ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
    children: React.ReactNode;
    scroll?: boolean;
    style?: ViewStyle;
};

export default function Screen({
    children,
    scroll = false,
    style,
}: ScreenProps) {
    const Content = scroll ? ScrollView : View;

    return (
        <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <Content
                    style={[styles.container, style]}
                    contentContainerStyle={scroll ? styles.flex : undefined}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </Content>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
    },
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});