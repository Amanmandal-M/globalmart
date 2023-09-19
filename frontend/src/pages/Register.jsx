
import React from 'react';
import {Link} from "react-router-dom"
import {
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

export default function Register() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
              <Heading fontSize={'2xl'}>SignUp to Start Shopping</Heading>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="name" placeholder='Enter your name'/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email </FormLabel>
                <Input type="email" placeholder='Enter your email'/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder='Enter your password'/>
              </FormControl>
              <FormControl id="imageURL">
                <FormLabel>Avatar URL</FormLabel>
                <Input type="imageURL" placeholder='Enter your imageURL' />
              </FormControl>
         
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                  <Text color={'blue.500'}> <Link to="/login">Already have an account?</Link></Text>
                 
                </Stack>
                <Button colorScheme={'blue'} variant={'solid'}>
                  Sign Up
                </Button>
              </Stack>

         
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://images.squarespace-cdn.com/content/v1/5b48c29f9f8770367788f244/1611582700101-JMIIX69SHSXK1X96XE91/ke17ZwdGBToddI8pDm48kHKmDLrMZO7HHpcyjMqbzOMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcBVek0a0L5ZzZO5sIOvWwrqKYA-dXl4sYwgdPtOa0B174TByWOce_SwawEQNsQ9Qi/ecommerce+marketing+strategy'
               }
            />
          </Flex>
        </Stack>
      )
}
