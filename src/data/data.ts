import axios from "axios";

export type ShowTemplate = {
  id: string;
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

export type TrendingShow = ShowTemplate & {
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
};

export type AnyShow = ShowTemplate & {
  thumbnail:
    | {
        trending: {
          small: string;
          large: string;
        };
        regular: {
          small: string;
          medium: string;
          large: string;
        };
      }
    | {
        regular: {
          small: string;
          medium: string;
          large: string;
        };
      };
};

export type Movie = AnyShow & {
  category: "Movie";
};

export type Series = AnyShow & {
  category: "TV Series";
};

export type BookmarkedShow = AnyShow & {
  isBookmarked: true;
};

export const dataFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);
