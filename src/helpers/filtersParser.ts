import type { ISearchFormData, IFieldData } from '@/types/serverData.types';

export const createRequestString = (filters: ISearchFormData) => {
  let requestString = '';
  const data: Array<string> = [];
  const fieldsData = Object.entries(filters);
  fieldsData.forEach((fieldData: [string, IFieldData]) => {
    const [prop, fieldValue] = fieldData;
    if (Array.isArray(fieldValue)) {
      const anyValue = fieldValue.find((item: IFieldData) => {
        return item.name === 'any';
      });
      if (!fieldValue.length || anyValue) {
        return;
      }
      const nameValuesArray: string[] = fieldValue.map((item) => `${prop}=${item.name}`);
      const noAnyValues = nameValuesArray.filter((item) => {
        return item !== 'any';
      });
      const nameValuesString = noAnyValues.join('&');
      data.push(`${nameValuesString}`);
    } else {
      if (fieldValue && fieldValue.name !== 'any') {
        data.push(`${prop}=${fieldValue.name}`);
      }
    }
  });
  requestString += data.join('&');
  return requestString;
};
