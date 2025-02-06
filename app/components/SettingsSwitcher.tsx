import { ToggleSwitch } from "flowbite-react";

interface SettingsSwitcherProps {
  onToggle: () => void;
  title: string;
}

export const SettingsSwitcher: React.FC<SettingsSwitcherProps> = ({ onToggle, title }) => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div>
        <span className="text-16 font-medium tracking-wide  text-button-text dark:text-light-helper">
          {title}
        </span>
      </div>
      <ToggleSwitch
        checked={false}
        disabled
        onChange={onToggle} />
    </div>
  )
}
