import { Button } from '@/components/Button';
import { FcGoogle } from 'react-icons/fc';

export function SignInWithGoogleButton() {
  return (
    <>
      <Button w="100%" type="button" disabled>
        <FcGoogle />
        Entrar com a Google
      </Button>
    </>
  )
}