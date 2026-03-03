import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../../../common/theme/colors';
import { Spacing } from '../../../../common/theme/spacing';
import { FontSize, FontWeight, LetterSpacing } from '../../../../common/theme/typography';

type Props = {
    phoneNumber: string;
    setPhoneNumber: (v: string) => void;
    onSubmit: () => void;
    phoneFocused: boolean;
    setPhoneFocused: (v: boolean) => void;
    inputBorderColor: Animated.AnimatedInterpolation<string>;
    inputBgColor: Animated.AnimatedInterpolation<string>;
};

/**
 * Phone number input row, Get-OTP button, OR divider, and Google sign-in button.
 */
export default function PhoneInputForm({
    phoneNumber,
    setPhoneNumber,
    onSubmit,
    phoneFocused,
    setPhoneFocused,
    inputBorderColor,
    inputBgColor,
}: Props) {
    const isValid = phoneNumber.length === 10;

    return (
        <View>
            <Text style={styles.label}>Mobile Number</Text>

            {/* ── Phone Input ── */}
            <Animated.View
                style={[styles.inputWrap, { borderColor: inputBorderColor, backgroundColor: inputBgColor }]}
            >
                <View style={styles.prefix}>
                    <Text style={styles.flag}>🇮🇳</Text>
                    <Text style={styles.prefixCode}>+91</Text>
                    <View style={styles.divider} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter 10-digit number"
                    placeholderTextColor={Colors.textPlaceholder}
                    keyboardType="number-pad"
                    value={phoneNumber}
                    onChangeText={t => setPhoneNumber(t.replace(/[^0-9]/g, ''))}
                    maxLength={10}
                    onFocus={() => setPhoneFocused(true)}
                    onBlur={() => setPhoneFocused(false)}
                />
                {isValid && (
                    <View style={styles.checkmark}>
                        <Ionicons name="checkmark" size={moderateScale(12)} color={Colors.white} />
                    </View>
                )}
            </Animated.View>

            {/* ── Get OTP Button ── */}
            <TouchableOpacity
                style={[styles.btn, !isValid && styles.btnDisabled]}
                onPress={onSubmit}
                activeOpacity={0.85}
                disabled={!isValid}
            >
                <LinearGradient
                    colors={isValid ? [Colors.brandCyan, Colors.brandDark] : [Colors.disabledStart, Colors.disabledEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                >
                    <Text style={styles.btnText}>Get OTP</Text>
                    <View style={styles.btnIcon}>
                        <Ionicons
                            name="arrow-forward"
                            size={moderateScale(14)}
                            color={isValid ? Colors.white : Colors.disabledText}
                        />
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            {/* ── OR Divider ── */}
            <View style={styles.orRow}>
                <View style={styles.orLine} />
                <View style={styles.orBadge}>
                    <Text style={styles.orText}>OR</Text>
                </View>
                <View style={styles.orLine} />
            </View>

            {/* ── Google Sign-In ── */}
            <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8}>
                <View style={styles.googleIconCircle}>
                    <AntDesign name="google" size={moderateScale(14)} color={Colors.google} />
                </View>
                <Text style={styles.googleText}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: FontSize.xxs,
        fontWeight: FontWeight.bold,
        color: Colors.textLabel,
        marginBottom: Spacing.vLG,
        letterSpacing: LetterSpacing.normal,
        textTransform: 'uppercase',
    },
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Spacing.radiusMD,
        paddingHorizontal: Spacing.xl,
        height: verticalScale(54),
        borderWidth: 1.8,
        marginBottom: Spacing.v16,
    },
    prefix: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Spacing.xs,
    },
    flag: {
        fontSize: moderateScale(18),
        marginRight: Spacing.sm,
    },
    prefixCode: {
        fontSize: FontSize.md,
        fontWeight: FontWeight.bold,
        color: Colors.textPrimary,
    },
    divider: {
        width: 1.5,
        height: verticalScale(20),
        backgroundColor: Colors.borderSubtle,
        marginLeft: Spacing.lg,
    },
    input: {
        flex: 1,
        fontSize: FontSize.lg,
        color: Colors.textPrimary,
        fontWeight: FontWeight.medium,
        marginLeft: Spacing.sm,
        letterSpacing: LetterSpacing.phone,
    },
    checkmark: {
        width: scale(22),
        height: scale(22),
        borderRadius: scale(11),
        backgroundColor: Colors.success,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderRadius: Spacing.radiusMD,
        overflow: 'hidden',
        marginBottom: Spacing.v18,
        shadowColor: Colors.brandCyan,
        shadowOffset: { width: 0, height: verticalScale(6) },
        shadowOpacity: 0.3,
        shadowRadius: scale(14),
        elevation: 8,
    },
    btnDisabled: {
        shadowOpacity: 0,
        elevation: 0,
    },
    btnGradient: {
        height: verticalScale(52),
        borderRadius: Spacing.radiusMD,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: Colors.white,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.bold,
        letterSpacing: LetterSpacing.wide,
    },
    btnIcon: {
        width: scale(26),
        height: scale(26),
        borderRadius: scale(13),
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Spacing.lg,
    },
    orRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.v18,
    },
    orLine: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.borderSubtle,
    },
    orBadge: {
        backgroundColor: Colors.muted,
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing.vSM,
        borderRadius: Spacing.radiusSM,
        marginHorizontal: Spacing.lg,
    },
    orText: {
        color: Colors.disabledText,
        fontSize: FontSize.xxs,
        fontWeight: FontWeight.bold,
        letterSpacing: LetterSpacing.label,
    },
    googleBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderColor: Colors.borderSubtle,
        borderRadius: Spacing.radiusMD,
        paddingVertical: verticalScale(13),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
    },
    googleIconCircle: {
        width: scale(30),
        height: scale(30),
        borderRadius: scale(15),
        backgroundColor: Colors.googleBg,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.lg,
    },
    googleText: {
        color: Colors.textSecondary,
        fontWeight: FontWeight.bold,
        fontSize: FontSize.md,
        letterSpacing: LetterSpacing.tight,
    },
});
