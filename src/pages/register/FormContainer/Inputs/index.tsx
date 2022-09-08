import { Input } from '@/components/Form/Input';
import { useToken, VStack } from '@chakra-ui/react';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function FormInputs() {
  const [gray300]= useToken("colors", [
    'gray.300', 
  ]);

  return (
    <>
      <VStack
        spacing="3"
      >
        <Input
          name="email"
          placeholder="E-mail"
          icon={<MdEmail color={`${gray300}`} />}
        />
        <Input
          name="username"
          placeholder="Username"
          icon={<FaUser color={`${gray300}`} />}
        />
        <Input
          name="password"
          placeholder="Senha"
          icon={<FaLock color={`${gray300}`} />}
        />
      </VStack>
    </>
  )
}