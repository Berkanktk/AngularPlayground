export interface Post {
  id?: number;
  text: string;
  author: string;
  platform?: string;
  followers?: number;
  likes?: number;
  retweets?: number;
  replies?: number;
}
