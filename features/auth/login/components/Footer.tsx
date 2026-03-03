import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../../common/theme/colors';
import { Spacing } from '../../../../common/theme/spacing';
import { FontSize, LetterSpacing } from '../../../../common/theme/typography';

type Props = {
    footerFade: Animated.Value;
};

/** Terms of Service and Privacy Policy text at the bottom of the login screen. */
export default function Footer({ footerFade }: Props) {
    return (
        <Animated.View style={[styles.footer, { opacity: footerFade }]}>
            <Text style={styles.text}>
                By continuing, you agree to our{' '}
                <Text style={styles.link}>Terms of Service</Text>
                {' '}&{' '}
                <Text style={styles.link}>Privacy Policy</Text>
            </Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    footer: {
        marginTop: Spacing.v24,
        paddingHorizontal: Spacing.lg,
    },
    text: {
        textAlign: 'center',
        fontSize: FontSize.xs,
        color: Colors.disabledText,
        lineHeight: 18,
        letterSpacing: LetterSpacing.tight,
    },
    link: {
        color: Colors.brandCyan,
        fontWeight: '700',
    },
});
