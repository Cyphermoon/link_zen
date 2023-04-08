import { IconType } from "react-icons";

interface SocialIconProps {
    Icon: IconType;
    title: string;
}
export const SocialIcon = ({ Icon, title }: SocialIconProps) => {
    return (
        <Icon title={title} className="text-primary hover:text-primary-300 transition-colors duration-300 text-xl" />
    );
};
