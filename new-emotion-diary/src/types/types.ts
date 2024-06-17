export type State = {
  id: string;
  createdDate: Date;
  emotionId?: number;
  content?: string;
};

export type Input = {
  createdDate: Date;
  emotionId: number;
  content: string;
};
