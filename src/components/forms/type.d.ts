interface FormControlProps {
    label: string;
    labelId: string;
    children: React.ReactNode;
  }
  
  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string
  }
  
  interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    name: string
  }