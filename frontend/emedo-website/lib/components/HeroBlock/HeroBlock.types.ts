export type HeroBlock = {
  title: string;
  titleMode: 'value' | 'html';
  text: string;
  textMode: 'value' | 'html';
  imageUrl: string;
}

export type HeroBlockProperties = {
  data: HeroBlock;
};
