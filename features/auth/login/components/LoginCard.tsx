import React from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';
import { Colors, scale, verticalScale } from '../../../../common/theme/colors';
import { Spacing } from '../../../../common/theme/spacing';
import OTPVerification from './OTPVerification';
import PhoneInputForm from './PhoneInputForm';

type Props = {
    otpSent: boolean;
    cardFade: Animated.Value;
    cardSlide: Animated.Value;

    // PhoneInputForm
    phoneNumber: string;
    setPhoneNumber: (v: string) => void;
    onSubmit: () => void;
    phoneFocused: boolean;
    setPhoneFocused: (v: boolean) => void;
    inputBorderColor: Animated.AnimatedInterpolation<string>;
    inputBgColor: Animated.AnimatedInterpolation<string>;

    // OTPVerification
    otp: string[];
    otpRefs: React.MutableRefObject<TextInput | null>[];
    onOtpChange: (val: string, idx: number) => void;
    onVerify: () => void;
    onChangeNumber: () => void;
    otpFade: Animated.Value;
    otpSlide: Animated.Value;
    otpBoxSize: number;
};

/**
 * White card wrapper that renders either PhoneInputForm or OTPVerification
 * depending on whether an OTP has been requested.
 */
export default function LoginCard({
    otpSent,
    cardFade,
    cardSlide,
    phoneNumber,
    setPhoneNumber,
    onSubmit,
    phoneFocused,
    setPhoneFocused,
    inputBorderColor,
    inputBgColor,
    otp,
    otpRefs,
    onOtpChange,
    onVerify,
    onChangeNumber,
    otpFade,
    otpSlide,
    otpBoxSize,
}: Props) {
    return (
        <Animated.View
            style={[styles.card, { opacity: cardFade, transform: [{ translateY: cardSlide }] }]}
        >
            {!otpSent ? (
                <PhoneInputForm
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    onSubmit={onSubmit}
                    phoneFocused={phoneFocused}
                    setPhoneFocused={setPhoneFocused}
                    inputBorderColor={inputBorderColor}
                    inputBgColor={inputBgColor}
                />
            ) : (
                <OTPVerification
                    otp={otp}
                    otpRefs={otpRefs}
                    onOtpChange={onOtpChange}
                    onVerify={onVerify}
                    onChangeNumber={onChangeNumber}
                    phoneNumber={phoneNumber}
                    otpFade={otpFade}
                    otpSlide={otpSlide}
                    otpBoxSize={otpBoxSize}
                />
            )}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: Spacing.radiusXL,
        paddingHorizontal: Spacing.xxl,
        paddingVertical: Spacing.v24,
        shadowColor: Colors.brandCyan,
        shadowOffset: { width: 0, height: verticalScale(6) },
        shadowOpacity: 0.08,
        shadowRadius: scale(20),
        elevation: 10,
    },
});
