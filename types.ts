
export enum ProductType {
  AGENT = 'Agent',
  AUTOMATION = 'Automation',
  WORKFLOW = 'Workflow',
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  description: string;
  longDescription: string;
  price: number;
  author: string;
  tags: string[];
  imageUrl: string;
  systemInstruction: string;
  testPrompt: string;
}
