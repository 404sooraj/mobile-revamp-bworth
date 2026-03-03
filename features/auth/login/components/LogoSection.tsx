import React from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Colors, scale, verticalScale } from '../../../../common/theme/colors';
import { Spacing } from '../../../../common/theme/spacing';
import { FontSize, FontWeight, LetterSpacing } from '../../../../common/theme/typography';

const { height } = Dimensions.get('window');

type Props = {
    logoFade: Animated.Value;
    logoScale: Animated.Value;
};

/**
 * Animated logo card with welcome heading and subtitle.
 * Positioned to sit over the gradient header.
 */
export default function LogoSection({ logoFade, logoScale }: Props) {
    return (
        <Animated.View
            style={[
                styles.container,
                { opacity: logoFade, transform: [{ scale: logoScale }] },
            ]}
        >
            <View style={styles.logoCard}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.welcome}>Welcome Back</Text>
            <Text style={styles.sub}>Sign in to your BWORTH account</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: Spacing.logoTopOffset,
        marginBottom: Spacing.v16,
    },
    logoCard: {
        width: scale(100),
        height: scale(100),
        borderRadius: Spacing.radiusCard,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: verticalScale(10) },
        shadowOpacity: 0.12,
        shadowRadius: scale(20),
        elevation: 16,
        marginBottom: Spacing.v14,
        overflow: 'hidden',
    },
    logo: {
        width: scale(82),
        height: scale(45),
    },
    welcome: {
        fontSize: FontSize.display,
        fontWeight: FontWeight.black,
        color: Colors.white,
        letterSpacing: LetterSpacing.normal,
        marginBottom: Spacing.vXS,
    },
    sub: {
        fontSize: FontSize.base,
        color: 'rgba(255,255,255,0.85)',
        fontWeight: FontWeight.regular,
        letterSpacing: LetterSpacing.tight,
    },
});
