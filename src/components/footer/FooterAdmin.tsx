/*eslint-disable*/

import { Flex, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const textColor = useColorModeValue('gray.400', 'white');
  
  const footerLinks = [
    { text: 'Support', href: 'mailto:hello@simmmple.com' },
    { text: 'License', href: 'https://www.simmmple.com/licenses' },
    { text: 'Terms of Use', href: 'https://simmmple.com/terms-of-service' },
    { text: 'Blog', href: 'https://www.blog.simmmple.com/' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Flex
      zIndex='3'
      flexDirection={{ base: 'column', xl: 'row' }}
      alignItems={{ base: 'center', xl: 'start' }}
      justifyContent='space-between'
      px={{ base: '30px', md: '50px' }}
      pb='30px'
    >
      <Text
        color={textColor}
        textAlign={{ base: 'center', xl: 'start' }}
        mb={{ base: '20px', xl: '0px' }}
      >
        &copy; {currentYear}
        <Text as='span' fontWeight='500' ms='4px'>
          Horizon UI. All Rights Reserved. Made with love by
          <Link mx='3px' color={textColor} href='https://www.simmmple.com' target='_blank' fontWeight='700'>
            Simmmple!
          </Link>
        </Text>
      </Text>
      <List display='flex'>
        {footerLinks.map((link, index) => (
          <ListItem key={index} me={{ base: '20px', md: '44px' }}>
            <Link fontWeight='500' color={textColor} href={link.href}>
              {link.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
