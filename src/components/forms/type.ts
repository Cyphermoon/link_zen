export interface FormControlProps {
    label: string;
    labelId: string;
    children: React.ReactNode;
  }
  
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string
  }
  
  
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    name: string
  }