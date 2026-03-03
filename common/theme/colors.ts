import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// ─── Responsive Scaling ────────────────────────────────────────────────────
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;

// ─── Brand Palette ────────────────────────────────────────────────────────
export const Colors = {
    brandCyan: '#14A3C7',
    brandDark: '#0B7A99',

    // Neutrals
    white: '#FFFFFF',
    background: '#F5F7FA',
    inputBg: '#F7F8FA',
    inputBgFocus: '#F0FAFF',
    border: '#E8ECF0',
    borderSubtle: '#E5E7EB',
    muted: '#F3F4F6',

    // Text
    textPrimary: '#111827',
    textSecondary: '#374151',
    textMuted: '#6B7280',
    textPlaceholder: '#B0B8C4',
    textLabel: '#374151',

    // Semantic
    success: '#10B981',
    google: '#EA4335',
    googleBg: '#FEF2F2',

    // Trust badge accent colours
    trustVerified: '#10B981',
    trustEncrypted: '#6366F1',
    trustInstant: '#F59E0B',

    // Disabled gradient
    disabledStart: '#D1D5DB',
    disabledEnd: '#C0C5CC',
    disabledText: '#9CA3AF',

    // Semi-transparent overlays used in header decorations
    overlayXS: 'rgba(255,255,255,0.05)',
    overlaySM: 'rgba(255,255,255,0.06)',
    overlayMD: 'rgba(255,255,255,0.08)',
} as const;

export type ColorKey = keyof typeof Colors;
