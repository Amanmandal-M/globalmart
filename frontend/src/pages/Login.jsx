import React from 'react';import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
  } from '@chakra-ui/react'
  import {Link} from "react-router-dom"
  

export default function Login() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
              <Heading fontSize={'2xl'}>Sign in to your account</Heading>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder='Enter your email'/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder='Enter your password'/>
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.500'}>Forgot password?</Text>
                </Stack>
                <Button colorScheme={'blue'} variant={'solid'}>
                  Sign in
                </Button>
              </Stack>
              
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                  <Text color={'blue.500'}> <Link to="/signup">Dont have an accocunt?</Link></Text>
                </Stack>
               
              </Stack>


            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://cdn.dribbble.com/users/2675757/screenshots/15151563/media/8647117ba7efa39d75838e66e49dcaea.gif'
              }
            />
          </Flex>
        </Stack>
      )
}
