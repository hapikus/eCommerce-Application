interface IProduct {
  gameTitle: string;
  headerImg: string;
  screenshotList: string[];
  userReviewRows: {
    ReviewSummary: string;
    ResponsiveHidden: string;
  }[];
  price: string;
  releaseDate: string;
  devCompany: string;
  descriptionShort: string;
  descriptionLong: string;
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
}

export default IProduct;
