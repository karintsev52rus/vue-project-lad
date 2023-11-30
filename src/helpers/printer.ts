import type { IFieldData } from '@/types/serverData.types';

export const printDate = (date: string) => {
  const publishedDate = new Date(date);
  const printDate = publishedDate.toLocaleDateString('ru');
  return printDate;
};

export const printStyles = (styles: IFieldData[]) => {
  const styleLabels = styles.map((style) => {
    return style.label;
  });
  return styleLabels.toString();
};
