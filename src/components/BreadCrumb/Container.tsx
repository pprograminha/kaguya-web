import { Breadcrumb } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BreadCrumbItem } from './Item';

interface BreadCrumbItemData {
  link: string;
  title: string;
}

export interface BreadCrumbContainerProps {
  items: BreadCrumbItemData[];
  currentItem: BreadCrumbItemData;
}

export function BreadCrumbContainer({
  items,
  currentItem
}: BreadCrumbContainerProps) {
  return (
    <>
      <Breadcrumb
        spacing="2"
        separator={<MdOutlineKeyboardArrowRight size={20} />}
        mx={["4", "6"]}
      >
        {items.map((item, index) => (
          <BreadCrumbItem
            key={`${item.link}-${index}`}
            link={item.link}
            title={item.title}
          />
        ))}

        <BreadCrumbItem
          link={currentItem.link}
          title={currentItem.title}
          isCurrentPage
          color="pink.500"
        />
      </Breadcrumb>
    </>
  )
}