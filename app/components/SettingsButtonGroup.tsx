import { Button } from "flowbite-react";

interface SettingsButtonGroupProps {
  options: string[];
  activeIndex?: number;
  onChange: (index: number) => void;
}

export const SettingsButtonGroup: React.FC<SettingsButtonGroupProps> = ({
  options, activeIndex, onChange,
}) => {
  return (
    <Button.Group className='w-214 rounded-full bg-light-button dark:bg-dark-button'>
      {options.map((option, index) => {
        const activeClasses = activeIndex === undefined
          ? 'light-regular-button dark-regular-button'
          : activeIndex === index ? "light-active-button dark-active-button" : "light-regular-button dark-regular-button";

        return (
          <>
            <Button
              key={option}
              className={`
            no-ring flex basis-1/2 items-center text-xs transition-none
            ${activeClasses}
            ${index === 0 ? "rounded-l-full" : ""} ${index === options.length - 1 ? "rounded-r-full" : ""}
          `}
              onClick={() => onChange(index)}
            >
              {option}
            </Button>
            {/* Divider */}
            {index === 0 && <div className="my-2 w-px bg-[#E1E3E6] dark:bg-[#FFFFFF0F]"></div>}
          </>
        )
      })}
    </Button.Group>
  );
};