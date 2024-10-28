export interface IQuestion {
   id: number;
   answers: string[];
   rightAnswers: number[] | string[];
   problem: string;
   type: QuestionTypes;
   time?: number;
   valid?: boolean | null;
}

export interface IQuize {
   id: string;
   name: string;
   questions: IQuestion[];
}

export enum RoutesCatalog {
   HOME = '/',
   CREATE = '/create',
   QUIZ = '/quiz/:id',
}

export enum QuestionTypes {
   NONE = '',
   CHECKBOX = 'checkbox',
   RADIO = 'radio',
   INPUT = 'input',
   TEXTFIELD = 'textfield',
}
