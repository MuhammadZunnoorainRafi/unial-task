export type FormState = {
  errors: {
    heading?: string[];
    cardOneTitle?: string[];
    cardOneDesc?: string[];
    cardTwoTitle?: string[];
    cardTwoDesc?: string[];
    cardThreeTitle?: string[];
    cardThreeDesc?: string[];
    image?: string[];
    video?: string[];
    gigFile?: string[];
    _form?: string[];
  };
};

export type LeftScreenData = {
  heading: string;
  cardOneTitle: string;
  cardOneDesc: string;
  cardTwoTitle: string;
  cardTwoDesc: string;
  cardThreeTitle: string;
  cardThreeDesc: string;
};

export type ImageCarouselData = {
  image: string;
  video: string;
  gigFile: string;
};

export type TData = {
  id: string;
  heading: string;
  cardOneTitle: string;
  cardOneDesc: string;
  cardTwoTitle: string;
  cardTwoDesc: string;
  cardThreeTitle: string;
  cardThreeDesc: string;
  image: string;
  video: string;
  gigFile: string;
};

export type TOrganized = {
  id: number;
  title: string;
  desc: string;
  image: string;
  arrow: string;
}[];

export type TCloudinary = {
  public_id: string;
};
