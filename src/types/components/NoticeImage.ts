export interface NoticeImageProps {
  uri: string;
}

export interface NoticeImageViewProps {
  uri: string;
  hasFailed: boolean;
  onError: () => void;
}
