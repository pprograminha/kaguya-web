import { 
  Breadcrumb, 
  BreadcrumbItemProps as ChakraBreadCrumbItemProps
} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BreadCrumbItem } from './Item';

interface BreadCrumbItemData {
  link: string;
  title?: string;
  props?: ChakraBreadCrumbItemProps;
}

export interface BreadCrumbContainerProps {
  items: BreadCrumbItemData[];
  currentItem?: BreadCrumbItemData;
  separator?: string | React.ReactElement;
}

export function BreadCrumbContainer({
  items,
  currentItem,
  separator,
}: BreadCrumbContainerProps) {
  return (
    <>
      <Breadcrumb
        spacing="2"
        separator={separator || <MdOutlineKeyboardArrowRight size={20} />}
        mx={["4", "6"]}
      >
        {items.map((item, index) => (
          <BreadCrumbItem
            key={`${item.link}-${index}`}
            link={item.link}
            title={item.title}
            {...item.props}
          />
        ))}

        <BreadCrumbItem
          link={currentItem?.link}
          title={currentItem?.title}
          isCurrentPage
          color="pink.500"
          {...currentItem?.props}
        />
      </Breadcrumb>
    </>
  )
}