export type LinkHandler = () => void;

export type ConfirmationFunction = (linkName?: string) => {
  title: string;
  message: string;
};

export interface ZenLinkDropdownOptionProps {
  title: string;
  Icon?: React.ComponentType<any>;
  isDanger?: boolean;
  confirmation?: ConfirmationFunction;
  handler: LinkHandler;
}