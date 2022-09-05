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
      <BreadcrumbItem color="gray.300" {...rest}>
        <NextLink href={link}>
          <BreadcrumbLink>{title}</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </>
  );
}