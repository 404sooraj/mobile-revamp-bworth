import { Colors, scale } from '@/common/theme';
import { useEffect, useRef, useState } from 'react';
import { Alert, Animated, Dimensions, TextInput } from 'react-native';
// import { Colors, scale } from '../../../common/theme/colors';

const { width } = Dimensions.get('window');

/**
 * Owns all state, animated values, and handlers for the Login screen.
 * Components are kept "dumb" — they only receive what they need via props.
 */
export function useLoginForm(onLoginSuccess: () => void) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [phoneFocused, setPhoneFocused] = useState(false);

    // ── OTP input refs ──────────────────────────────────────────────────
    const otpRefs = [
        useRef<TextInput | null>(null),
        useRef<TextInput | null>(null),
        useRef<TextInput | null>(null),
        useRef<TextInput | null>(null),
    ];

    // ── Entrance animations ──────────────────────────────────────────────
    const headerSlide = useRef(new Animated.Value(-30)).current;
    const headerFade = useRef(new Animated.Value(0)).current;
    const logoScale = useRef(new Animated.Value(0.6)).current;
    const logoFade = useRef(new Animated.Value(0)).current;
    const cardSlide = useRef(new Animated.Value(50)).current;
    const cardFade = useRef(new Animated.Value(0)).current;
    const footerFade = useRef(new Animated.Value(0)).current;

    // ── OTP transition ──────────────────────────────────────────────────
    const otpFade = useRef(new Animated.Value(0)).current;
    const otpSlide = useRef(new Animated.Value(25)).current;

    // ── Input glow ──────────────────────────────────────────────────────
    const inputGlow = useRef(new Animated.Value(0)).current;

    // Entrance
    useEffect(() => {
        Animated.stagger(150, [
            Animated.parallel([
                Animated.timing(headerFade, { toValue: 1, duration: 600, useNativeDriver: true }),
                Animated.spring(headerSlide, { toValue: 0, friction: 8, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.spring(logoScale, { toValue: 1, friction: 5, tension: 50, useNativeDriver: true }),
                Animated.timing(logoFade, { toValue: 1, duration: 500, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.timing(cardFade, { toValue: 1, duration: 500, useNativeDriver: true }),
                Animated.spring(cardSlide, { toValue: 0, friction: 7, useNativeDriver: true }),
            ]),
            Animated.timing(footerFade, { toValue: 1, duration: 400, useNativeDriver: true }),
        ]).start();
    }, []);

    // Input focus glow
    useEffect(() => {
        Animated.timing(inputGlow, {
            toValue: phoneFocused ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [phoneFocused]);

    // OTP transition
    useEffect(() => {
        if (otpSent) {
            otpFade.setValue(0);
            otpSlide.setValue(25);
            Animated.parallel([
                Animated.timing(otpFade, { toValue: 1, duration: 400, useNativeDriver: true }),
                Animated.spring(otpSlide, { toValue: 0, friction: 7, useNativeDriver: true }),
            ]).start();
        }
    }, [otpSent]);

    // ── Handlers ────────────────────────────────────────────────────────
    const handleGenerateOTP = () => {
        if (phoneNumber.length < 10) {
            Alert.alert('Invalid Number', 'Please enter a valid 10-digit mobile number.');
            return;
        }
        setOtpSent(true);
        Alert.alert('OTP Sent ✓', `A 4-digit code was sent to +91 ${phoneNumber}.\nUse 8888 for demo.`);
    };

    const handleOtpChange = (val: string, idx: number) => {
        const updated = [...otp];
        updated[idx] = val;
        setOtp(updated);
        if (val && idx < 3) otpRefs[idx + 1].current?.focus();
        if (!val && idx > 0) otpRefs[idx - 1].current?.focus();
    };

    const handleVerifyOTP = () => {
        const code = otp.join('');
        if (code === '8888') {
            onLoginSuccess();
        } else {
            Alert.alert('Wrong OTP', 'Invalid code. Try 8888 for demo.');
        }
    };

    const handleChangeNumber = () => {
        setOtpSent(false);
        setOtp(['', '', '', '']);
    };

    // ── Derived values ───────────────────────────────────────────────────
    const combinedOtp = otp.join('');

    const inputBorderColor = inputGlow.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E8ECF0', Colors.brandCyan],
    });
    const inputBgColor = inputGlow.interpolate({
        inputRange: [0, 1],
        outputRange: ['#F7F8FA', '#F0FAFF'],
    });

    const otpBoxSize = Math.min(scale(60), (width - scale(120)) / 4);

    return {
        // State
        phoneNumber,
        setPhoneNumber,
        otpSent,
        otp,
        phoneFocused,
        setPhoneFocused,
        // Refs
        otpRefs,
        // Animated values
        headerFade,
        headerSlide,
        logoFade,
        logoScale,
        cardFade,
        cardSlide,
        footerFade,
        otpFade,
        otpSlide,
        inputGlow,
        // Derived
        combinedOtp,
        inputBorderColor,
        inputBgColor,
        otpBoxSize,
        // Handlers
        handleGenerateOTP,
        handleOtpChange,
        handleVerifyOTP,
        handleChangeNumber,
    };
}
