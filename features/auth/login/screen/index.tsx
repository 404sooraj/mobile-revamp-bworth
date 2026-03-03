import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { Colors, scale, verticalScale } from '../../../../common/theme/colors';
import Footer from '../components/Footer';
import HeaderGradient from '../components/HeaderGradient';
import LoginCard from '../components/LoginCard';
import LogoSection from '../components/LogoSection';
import TrustBadges from '../components/TrustBadges';
import { useLoginForm } from '../hooks/useLoginForm';

const { height } = Dimensions.get('window');

type Props = {
    onLoginSuccess: () => void;
};

/**
 * Login screen assembler.
 * Calls useLoginForm for all logic and composes presentational components.
 */
export default function LoginScreen({ onLoginSuccess }: Props) {
    const form = useLoginForm(onLoginSuccess);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.root}>
                <StatusBar style="dark" />

                <HeaderGradient
                    headerFade={form.headerFade}
                    headerSlide={form.headerSlide}
                />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.kav}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.main}>
                            <LogoSection
                                logoFade={form.logoFade}
                                logoScale={form.logoScale}
                            />

                            <TrustBadges />

                            <LoginCard
                                otpSent={form.otpSent}
                                cardFade={form.cardFade}
                                cardSlide={form.cardSlide}
                                phoneNumber={form.phoneNumber}
                                setPhoneNumber={form.setPhoneNumber}
                                onSubmit={form.handleGenerateOTP}
                                phoneFocused={form.phoneFocused}
                                setPhoneFocused={form.setPhoneFocused}
                                inputBorderColor={form.inputBorderColor}
                                inputBgColor={form.inputBgColor}
                                otp={form.otp}
                                otpRefs={form.otpRefs}
                                onOtpChange={form.handleOtpChange}
                                onVerify={form.handleVerifyOTP}
                                onChangeNumber={form.handleChangeNumber}
                                otpFade={form.otpFade}
                                otpSlide={form.otpSlide}
                                otpBoxSize={form.otpBoxSize}
                            />
                        </View>

                        <Footer footerFade={form.footerFade} />
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    kav: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: scale(22),
        paddingBottom: verticalScale(30),
        minHeight: height,
        justifyContent: 'space-between',
    },
    main: {
        flex: 1,
    },
});
