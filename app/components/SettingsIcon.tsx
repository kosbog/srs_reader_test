
interface SettingsIconProps {
  icon: React.ReactNode;
  title: string;
}

export const SettingsIcon: React.FC<SettingsIconProps> = ({ icon, title }) => {
  return (
    <div className="flex w-full max-w-90 flex-col items-center p-1 text-center font-medium text-button-text dark:text-light-helper">
      {icon}
      <span className="text-xs font-medium tracking-wide">
        {title}
      </span>
    </div>
  )
}
