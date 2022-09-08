import { Input } from '@/components/Form/Input';
import { VStack } from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function FormInputs() {
  return (
    <>
      <VStack
        spacing="3"
      >
        <Input
          name="email"
          placeholder="E-mail"
          icon={<MdEmail color="#9a9ea3"/>}
        />
        <Input
          name="password"
          placeholder="Senha"
          icon={<FaLock color="#9a9ea3"/>}
        />
      </VStack>
    </>
  )
}