import { Dimensions } from 'react-native';
import { scale, verticalScale } from './colors';

const { height } = Dimensions.get('window');

// ─── Spacing Tokens ───────────────────────────────────────────────────────
// All values are derived from the responsive scale helpers so they stay
// proportional across screen sizes.
export const Spacing = {
    // Horizontal padding
    pagePaddingH: scale(22),

    // Common gaps
    xs: scale(4),
    sm: scale(6),
    md: scale(8),
    lg: scale(10),
    xl: scale(12),
    xxl: scale(20),

    // Vertical rhythm
    vXS: verticalScale(4),
    vSM: verticalScale(5),
    vMD: verticalScale(6),
    vLG: verticalScale(8),
    vXL: verticalScale(12),
    v14: verticalScale(14),
    v16: verticalScale(16),
    v18: verticalScale(18),
    v24: verticalScale(24),
    v30: verticalScale(30),

    // Screen-relative
    headerHeight: height * 0.36,
    logoTopOffset: height * 0.07,

    // Border radii
    radiusSM: scale(10),
    radiusMD: scale(14),
    radiusLG: scale(20),
    radiusXL: scale(24),
    radiusCard: scale(28),
    radiusChip: scale(20),
    radiusFull: scale(90),
} as const;
