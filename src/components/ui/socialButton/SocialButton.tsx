import { FC, ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  provider: string;
}
const SocialButton: FC<SocialButtonProps>  = ({ icon, provider }) => (
    <button
      className="flex items-center justify-center space-x-2 py-3 px-4 border rounded-lg hover:bg-gray-50 transition-colors"
      type="button"
    >
      {icon}
      <span className="text-sm font-medium text-gray-700">{provider}</span>
    </button>
  );

  export default SocialButton;