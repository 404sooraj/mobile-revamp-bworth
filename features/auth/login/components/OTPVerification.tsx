import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../../../common/theme/colors';
import { Spacing } from '../../../../common/theme/spacing';
import { FontSize, FontWeight, LetterSpacing } from '../../../../common/theme/typography';

type Props = {
    otp: string[];
    otpRefs: React.MutableRefObject<TextInput | null>[];
    onOtpChange: (val: string, idx: number) => void;
    onVerify: () => void;
    onChangeNumber: () => void;
    phoneNumber: string;
    otpFade: Animated.Value;
    otpSlide: Animated.Value;
    otpBoxSize: number;
};

/**
 * OTP verification view: icon header, 4 input boxes, verify button, and actions.
 */
export default function OTPVerification({
    otp,
    otpRefs,
    onOtpChange,
    onVerify,
    onChangeNumber,
    phoneNumber,
    otpFade,
    otpSlide,
    otpBoxSize,
}: Props) {
    const combinedOtp = otp.join('');
    const isComplete = combinedOtp.length === 4;

    return (
        <Animated.View style={{ opacity: otpFade, transform: [{ translateY: otpSlide }] }}>

            {/* ── Header ── */}
            <View style={styles.header}>
                <View style={styles.iconCircle}>
                    <Ionicons name="chatbubble-ellipses" size={moderateScale(22)} color={Colors.brandCyan} />
                </View>
                <Text style={styles.title}>Verification Code</Text>
                <Text style={styles.subtitle}>
                    We sent a 4-digit code to{'\n'}
                    <Text style={styles.phone}>+91 {phoneNumber}</Text>
                </Text>
            </View>

            {/* ── OTP Boxes ── */}
            <View style={styles.boxes}>
                {otp.map((digit, idx) => (
                    <TextInput
                        key={idx}
                        ref={otpRefs[idx]}
                        style={[
                            styles.box,
                            { width: otpBoxSize, height: otpBoxSize + moderateScale(2) },
                            digit ? styles.boxFilled : null,
                        ]}
                        value={digit}
                        onChangeText={v => onOtpChange(v.slice(-1), idx)}
                        keyboardType="number-pad"
                        maxLength={1}
                        textAlign="center"
                        selectionColor={Colors.brandCyan}
                    />
                ))}
            </View>

            {/* ── Verify Button ── */}
            <TouchableOpacity
                style={[styles.verifyBtn, !isComplete && styles.verifyBtnDisabled]}
                onPress={onVerify}
                activeOpacity={0.85}
                disabled={!isComplete}
            >
                <LinearGradient
                    colors={isComplete ? [Colors.brandCyan, Colors.brandDark] : [Colors.disabledStart, Colors.disabledEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                >
                    <Ionicons
                        name="log-in-outline"
                        size={moderateScale(16)}
                        color={Colors.white}
                        style={{ marginRight: scale(8) }}
                    />
                    <Text style={styles.btnText}>Verify & Login</Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* ── Actions ── */}
            <View style={styles.actions}>
                <TouchableOpacity style={styles.linkBtn} onPress={onChangeNumber}>
                    <Ionicons name="arrow-back-circle-outline" size={moderateScale(14)} color={Colors.brandCyan} />
                    <Text style={styles.linkText}>Change Number</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.linkBtn}>
                    <Ionicons name="timer-outline" size={moderateScale(14)} color={Colors.disabledText} />
                    <Text style={[styles.linkText, { color: Colors.disabledText }]}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginBottom: Spacing.v24,
    },
    iconCircle: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(25),
        backgroundColor: '#E0F7FA',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Spacing.vXL,
    },
    title: {
        fontSize: FontSize.h2,
        fontWeight: FontWeight.black,
        color: Colors.textPrimary,
        marginBottom: Spacing.vSM,
    },
    subtitle: {
        fontSize: FontSize.base,
        color: Colors.textMuted,
        textAlign: 'center',
        lineHeight: moderateScale(19),
    },
    phone: {
        fontWeight: FontWeight.bold,
        color: Colors.textPrimary,
    },
    boxes: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: Spacing.lg,
        marginBottom: Spacing.v24,
    },
    box: {
        borderRadius: Spacing.radiusMD,
        backgroundColor: Colors.inputBg,
        borderWidth: 1.8,
        borderColor: Colors.borderSubtle,
        fontSize: FontSize.otp,
        fontWeight: FontWeight.black,
        color: Colors.textPrimary,
        textAlign: 'center',
    },
    boxFilled: {
        borderColor: Colors.brandCyan,
        backgroundColor: Colors.inputBgFocus,
        shadowColor: Colors.brandCyan,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 3,
    },
    verifyBtn: {
        borderRadius: Spacing.radiusMD,
        overflow: 'hidden',
        marginBottom: Spacing.v18,
        shadowColor: Colors.brandCyan,
        shadowOffset: { width: 0, height: verticalScale(6) },
        shadowOpacity: 0.3,
        shadowRadius: scale(14),
        elevation: 8,
    },
    verifyBtnDisabled: {
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
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Spacing.vSM,
    },
    linkBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xs,
        paddingVertical: Spacing.vSM,
    },
    linkText: {
        color: Colors.brandCyan,
        fontWeight: FontWeight.medium,
        fontSize: FontSize.sm,
        letterSpacing: LetterSpacing.tight,
    },
});
