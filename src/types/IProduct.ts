interface IProduct {
  gameTitle: string;
  gameGenre: string[];
  gameTheme: string[];
  headerImg: string;
  screenshotList: string[];
  userReviewRows: {
    ReviewSummary: string;
    ResponsiveHidden: string;
  }[];
  price: number;
  discountPrice: number | null;
  releaseDate: string;
  devCompany: string;
  descriptionShort: string;
  category: string[];
  sysRequirementsMinimum: {
    OS?: string;
    Processor?: string;
    Memory?: string;
    Graphics?: string;
    DirectX?: string;
    Network?: string;
    Storage?: string;
    'VR Support'?: string;
  };
  sysRequirementsMinimumFill: {
    OS?: string;
    Processor?: string;
    Memory?: string;
    Graphics?: string;
    DirectX?: string;
    Network?: string;
    Storage?: string;
    'VR Support'?: string;
  };
  sysRequirementsRecommended: {
    OS?: string;
    Processor?: string;
    Memory?: string;
    Graphics?: string;
    DirectX?: string;
    Network?: string;
    Storage?: string;
    'VR Support'?: string;
  };
  descriptionLong: string[];
}

export default IProduct;
