import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, moderateScale, scale } from '../../../../common/theme/colors';
import { Spacing } from '../../../../common/theme/spacing';
import { FontSize, FontWeight, LetterSpacing } from '../../../../common/theme/typography';

const BADGES = [
    { icon: 'shield-checkmark', text: 'Verified', color: Colors.trustVerified },
    { icon: 'lock-closed', text: 'Encrypted', color: Colors.trustEncrypted },
    { icon: 'flash', text: 'Instant', color: Colors.trustInstant },
] as const;

/** Three small pill badges that reinforce trust (Verified / Encrypted / Instant). */
export default function TrustBadges() {
    return (
        <View style={styles.row}>
            {BADGES.map((b, i) => (
                <View key={i} style={styles.chip}>
                    <View style={[styles.iconWrap, { backgroundColor: b.color + '14' }]}>
                        <Ionicons name={b.icon} size={moderateScale(11)} color={b.color} />
                    </View>
                    <Text style={styles.label}>{b.text}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: Spacing.v18,
        flexWrap: 'wrap',
        gap: Spacing.sm,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.vMD,
        borderRadius: Spacing.radiusChip,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
        gap: Spacing.xs,
    },
    iconWrap: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: FontSize.xxs,
        fontWeight: FontWeight.bold,
        color: Colors.textSecondary,
        letterSpacing: LetterSpacing.normal,
    },
});
