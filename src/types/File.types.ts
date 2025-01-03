export namespace UploadFlex {
  export type FlexFile = File & {
    id: string;
    total_chunks: number;
  };
}
