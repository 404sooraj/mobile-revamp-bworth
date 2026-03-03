import { moderateScale } from './colors';

// ─── Typography Scale ─────────────────────────────────────────────────────
export const FontSize = {
    xxs: moderateScale(10),
    xs: moderateScale(11),
    sm: moderateScale(12),
    base: moderateScale(13),
    md: moderateScale(14),
    lg: moderateScale(15),
    xl: moderateScale(16),
    h3: moderateScale(18),
    h2: moderateScale(20),
    h1: moderateScale(22),
    display: moderateScale(24),
    otp: moderateScale(22),     // OTP digit boxes
} as const;

// ─── Font Weights ─────────────────────────────────────────────────────────
export const FontWeight = {
    regular: '400' as const,
    medium: '600' as const,
    bold: '700' as const,
    black: '800' as const,
} as const;

// ─── Letter Spacing ──────────────────────────────────────────────────────
export const LetterSpacing = {
    tight: 0.2,
    normal: 0.3,
    wide: 0.5,
    xwide: 1,
    label: 1.5,    // OR badge, uppercase labels
    phone: 1,      // phone number digits
} as const;
