type LinkHandler = () => void;

type ConfirmationFunction = (linkName?: string) => {
  title: string;
  message: string;
};

interface ZenLinkDropdownOptionProps {
  title: string;
  Icon?: React.ComponentType<any>;
  isDanger?: boolean;
  confirmation?: ConfirmationFunction;
  handler: LinkHandler;
}