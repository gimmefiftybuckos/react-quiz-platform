export interface IQuestion {
   id: string;
   answers: string[];
   rightAnswers: number[];
   problem: string;
   type: string;
   time?: number;
   valid?: boolean;
}

export interface IQuize {
   id: string;
   questions: IQuestion[];
}

export enum RoutesCatalog {
   HOME = '/',
   CREATE = '/create',
   QUIZ = '/quiz/:id',
}

export enum QuestionTypes {
   CHECKBOX = 'checkbox',
   RADIO = 'radio',
   INPUT = 'input',
   TEXTFIELD = 'textfield',
}
