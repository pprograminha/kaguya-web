import NextLink from 'next/link';
import { 
  BreadcrumbItem,
  BreadcrumbItemProps as ChakraBreadCrumbItemProps, 
  BreadcrumbLink 
} from '@chakra-ui/react';

interface BreadCrumbItemProps extends ChakraBreadCrumbItemProps {
  link: string;
  title: string;
}

export function BreadCrumbItem({
  link,
  title,
  ...rest
}: BreadCrumbItemProps) {
  return (
    <>
      <BreadcrumbItem
        color="gray.300"
        fontSize={["sm", "md"]}
        {...rest}
      >
        <NextLink href={link} passHref>
          <BreadcrumbLink>{title}</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </>
  );
}