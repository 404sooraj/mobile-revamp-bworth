import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { Colors, scale, verticalScale } from '../../../../common/theme/colors';
import { Spacing } from '../../../../common/theme/spacing';

const { height } = Dimensions.get('window');

type Props = {
    headerFade: Animated.Value;
    headerSlide: Animated.Value;
};

/**
 * Animated curved gradient banner that sits behind the entire screen.
 * Decorative circles provide a subtle depth effect.
 */
export default function HeaderGradient({ headerFade, headerSlide }: Props) {
    return (
        <Animated.View
            style={[
                styles.wrap,
                { opacity: headerFade, transform: [{ translateY: headerSlide }] },
            ]}
        >
            <LinearGradient
                colors={[Colors.brandCyan, '#0891B2', Colors.brandDark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <View style={styles.circle3} />
            </LinearGradient>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Spacing.headerHeight,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        borderBottomLeftRadius: scale(40),
        borderBottomRightRadius: scale(40),
    },
    circle1: {
        position: 'absolute',
        width: scale(180),
        height: scale(180),
        borderRadius: scale(90),
        backgroundColor: Colors.overlayMD,
        top: verticalScale(-40),
        right: scale(-30),
    },
    circle2: {
        position: 'absolute',
        width: scale(120),
        height: scale(120),
        borderRadius: scale(60),
        backgroundColor: Colors.overlaySM,
        top: verticalScale(60),
        left: scale(-20),
    },
    circle3: {
        position: 'absolute',
        width: scale(80),
        height: scale(80),
        borderRadius: scale(40),
        backgroundColor: Colors.overlayXS,
        bottom: verticalScale(20),
        right: scale(50),
    },
});
