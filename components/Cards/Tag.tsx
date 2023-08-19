import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Tag({ tag, type }: { tag: string, type: string }) {
  const commonButtonProps = {
    variant: "ghost",
    color: "gray.500",
    fontFamily: "heading",
    border: "1px solid",
    borderColor: "gray.200",
    boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.1)",
    transform: 'translateY(5px)',
    transition: "box-shadow .15s ease-in-out, transform .15s ease-in-out",
  };

  if (type === 'blog') {
    return (
      <NextLink href={'/tag/' + tag}>
        <Button
          {...commonButtonProps}
          bgColor='white'
          _hover={{
            bgColor: 'gray.50',
            transform: 'translateY(0)',
            cursor: 'pointer'
          }}
        >
          {tag}
        </Button>
      </NextLink>
    );
  } else {
    return (
      <Button
        {...commonButtonProps}
        bg='gray.50'
        _hover={{
          cursor: 'default'
        }}
      >
        {tag}
      </Button>
    );
  }
}
