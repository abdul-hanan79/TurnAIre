export interface IconProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  export interface StatusIconProps extends IconProps {
    width: string;
  }
  
  export interface LanguageSelectorProps {
    language: string;

  }
  
  export interface CTAButtonProps {
    children: React.ReactNode;
    className?: string;
    handleClick:()=>void;
  }




//   dashboard

export interface TravelCardProps {
    imageSrc: string;
    title: string;
    location: string;
    rating: number;
    price: number;
    duration?: string;
  }
  
  export interface NavigationItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
  }
  
  export interface IconButtonProps {
    icon: string;
    label: string;
    onClick?: () => void;
  }