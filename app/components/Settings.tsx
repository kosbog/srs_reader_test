'use client'

import { Button, useThemeMode } from "flowbite-react";
import { AppFontsName, AppTheme, PageFlip, useAppStore } from "../store/commonStore";
import { AiOutlineFontSize } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { IoColorPaletteOutline, IoCloseOutline, IoArrowBackOutline, IoArrowForwardOutline, IoBookOutline } from "react-icons/io5";
import { SettingsButtonGroup } from "./SettingsButtonGroup";
import { SettingsIcon } from "./SettingsIcon";
import { SettingsSwitcher } from "./SettingsSwitcher";

interface SettingsProps {
  onClose?: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const {
    activeFont, activeComments, activeFlip,
    setCommentsView, setFontSize, setPageFlip
  } = useAppStore();
  const { setMode, mode } = useThemeMode();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-end md:hidden mb-4">
        <div className="absolute inset-x-0 m-auto h-1 w-8 rounded-3xl bg-[#818C9980]" />
      </div>

      {/* Comments */}
      <div className='flex flex-row items-center justify-between [&_span]:px-2 [&_span]:text-xs'>
        <SettingsIcon title="Коментарі до абзаців" icon={<FaRegComment className="size-6 pb-1" />} />
        <SettingsButtonGroup
          options={["Увімк.", "Вимк."]}
          activeIndex={activeComments ? 0 : 1}
          onChange={(index) => setCommentsView(index === 0)} />
      </div>

      {/* Font size */}
      <div className='flex flex-row items-center justify-between [&_span]:px-2 [&_span]:text-xs'>
        <SettingsIcon title="Розмір тексту" icon={<AiOutlineFontSize className="size-6 pb-1" />} />
        <SettingsButtonGroup
          options={["Менше", "Більше"]}
          onChange={(index) => setFontSize(index === 0)} />
      </div>

      {/* Theme color */}
      <div className='flex flex-row items-center justify-between [&_span]:px-2 [&_span]:text-xs'>
        <SettingsIcon title="Колір теми" icon={<IoColorPaletteOutline className="size-6 pb-1" />} />
        <SettingsButtonGroup
          options={["Темніша", "Світліша"]}
          onChange={(index) => setMode(index === 0 ? AppTheme.DARK : AppTheme.LIGHT)} />
      </div>

      {/* Font style */}
      <div className='flex flex-row items-center justify-between [&_span]:px-2 [&_span]:text-xs'>
        <SettingsIcon title="Розмір тексту" icon={<AiOutlineFontSize className="size-6 pb-1" />} />
        <Button.Group className='w-214 rounded-full bg-light-button dark:bg-dark-button '>
          <Button
            className={`no-ring light-regular-button dark-regular-button flex basis-1/4 items-center rounded-full transition-none`}
            onClick={undefined}>
            <IoArrowBackOutline className="size-5" />
          </Button>
          <div className="flex basis-full items-center justify-center text-xs font-medium dark:text-light-helper ">
            {AppFontsName[activeFont]}
          </div>
          <Button
            className={`no-ring light-regular-button dark-regular-button flex  basis-1/4 items-center rounded-full text-xs transition-none`}
            onClick={undefined}>
            <IoArrowForwardOutline className="size-5" />
          </Button>
        </Button.Group>
      </div>

      {/* Page flip */}
      <div className='flex flex-row items-center justify-between [&_span]:px-2 [&_span]:text-xs'>
        <SettingsIcon title="Гортання сторінок" icon={<IoBookOutline className="size-6 pb-1" />} />
        <SettingsButtonGroup
          options={["Зверху-вниз", "Справа-наліво"]}
          activeIndex={activeFlip === PageFlip.VERTICAL ? 0 : 1}
          onChange={(index) => setPageFlip(index === 0 ? PageFlip.VERTICAL : PageFlip.HORIZONTAL)} />
      </div>
      <div className='my-2 h-px w-full bg-[#E1E3E6] dark:bg-[#3D3D3D]' />
      <SettingsSwitcher title="Перенос тексту" onToggle={() => null} />
      <div className='my-2 hidden md:block'>
        <div className='mb-6 h-px w-full bg-[#E1E3E6] dark:bg-[#3D3D3D]' />
        <SettingsSwitcher title="Компактний режим читання" onToggle={() => null} />
      </div>
    </div>
  );
};