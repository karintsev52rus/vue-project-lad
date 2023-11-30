export interface IFieldData {
  _id: string;
  label: string;
  name: string;
}

export interface ICityData extends IFieldData {
  mainList: boolean;
}

export interface IAdvertTypes {
  fromMusicians: IFieldData;
  fromGroups: IFieldData;
}

export interface IFiltersData {
  cities: ICityData[];
  instruments: IFieldData[];
  styles: IFieldData[];
}

export interface ISearchFormProps extends IFiltersData {
  advertTypes: IAdvertTypes;
}

export interface ISearchFormData {
  city: ICityData | null;
  instrument: IFieldData | null;
  style: IFieldData[];
  advertType: IFieldData | null;
}

export interface INewFormData extends ISearchFormData {
  advertDescription: string;
}

export interface INewAdvertData extends INewFormData {
  publishedDate: Date;
  userId: string;
  contacts?: any[];
}

export interface IAdvert {
  id: string;
  publishedDate: string;
  userId: string;
  advertType: IFieldData;
  city: ICityData;
  style: IFieldData[];
  instrument: IFieldData;
  likes: string[];
  advertDescription: string;
  authorName: string;
  authorAge: number;
  authorAvatar: null | string;
}

export interface IUserData {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export interface INewAdvertResponse {
  advertId?: string;
  message: string;
}
