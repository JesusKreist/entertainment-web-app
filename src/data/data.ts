import axios, { AxiosError } from "axios";

export type ShowTemplate = {
  id: string;
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  youtubeUrl: string;
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

export const mapShowArrayToIsBookmarkedObject = (shows: AnyShow[]) => {
  const isBookmarkedObject: { [key: string]: boolean } = {};
  shows.forEach((show) => {
    isBookmarkedObject[show.id] = show.isBookmarked;
  });
  return isBookmarkedObject;
};

export const addShowToUserBookmarks = async (
  showId: string
): Promise<{ isSuccess: boolean }> => {
  let isSuccess = false;

  try {
    await axios.post("/api/shows/bookmarks", { showId });
    isSuccess = true;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.statusText);
    } else {
      console.log(error);
    }
  }

  return { isSuccess };
};

export const removeShowFromUserBookmarks = async (
  showId: string
): Promise<{ isSuccess: boolean }> => {
  let isSuccess = false;

  try {
    await axios.delete(`/api/shows/bookmarks/${showId}`);
    isSuccess = true;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.statusText);
    } else {
      console.log(error);
    }
  }

  return { isSuccess };
};
