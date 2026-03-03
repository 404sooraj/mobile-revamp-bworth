// Login screen route — Expo Router renders this directly, so props cannot be
// passed in from outside. We own the onLoginSuccess callback here and thread
// it down into the feature component.
import { useRouter } from 'expo-router';
import LoginScreen from '../../features/auth/login/screen';

export default function LoginRoute() {
    const router = useRouter();

    const handleLoginSuccess = () => {
        router.replace('/(main)/index');
    };

    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
}

