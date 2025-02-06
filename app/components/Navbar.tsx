'use client'

import { BsListOl } from "react-icons/bs";
import { IoLibraryOutline, IoExpand, IoShareSocialOutline, IoSettingsOutline, IoArrowBackOutline, IoEllipsisHorizontal } from "react-icons/io5";
import { useScroll } from '../hooks/useScroll';
import { Button } from './Button';
import Link from 'next/link';
import { Avatar } from 'flowbite-react';
import { Settings } from "./Settings";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const VaulDrawerCSR = dynamic(() => import("./Drawer").then((mod) => mod.VaulDrawer), { ssr: false });

interface NavbarProps {
  isMobile: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isMobile }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const isVisible = useScroll(isMobile);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 4, left: rect.left - 335 });
    }
    setIsOpenModal(!isOpenModal);
  }

  const renderSettingsButton = () => (
    isMobile ? (
      <VaulDrawerCSR>
        <Button
          className="action-button no-ring no-hover-bg dark:bg-transparent"
          size="sm"
          onClick={toggleModal}
          icon={<IoSettingsOutline className="size-6" />} />
      </VaulDrawerCSR>
    ) : (
      <div ref={buttonRef}>
        <Button
          className="action-button no-ring no-hover-bg dark:bg-transparent"
          size="sm"
          color="gray"
          onClick={toggleModal}
          icon={<IoSettingsOutline className="size-6" />} />
      </div>

    )
  );

  return (
    <nav className={`
      fixed inset-x-0 top-0 z-50 bg-white shadow-sm shadow-[#00000014] transition-transform duration-300 dark:bg-dark-secondary
      ${!isVisible ? '-translate-y-40' : 'translate-y-0'}
    `}>
      {!isMobile && isOpenModal && (
        <div
          className="absolute flex h-fit w-full max-w-380 flex-col rounded-[10px] border-none bg-white px-6 py-8 shadow-modal outline-none md:dark:bg-[#232323]"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}>
          <Settings />
        </div>
      )}

      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left side */}
          <div className="flex items-center space-x-6">
            <Button
              size="sm"
              className="action-button no-ring bg-transparent dark:bg-transparent dark:hover:text-white"
              color="gray"
              as={Link}
              href='/'
              icon={<IoArrowBackOutline className="size-6" />} />
            <div className='hidden items-center space-x-8 md:flex'>
              <h1 className="text-16 font-medium tracking-wide text-button-text dark:text-light-helper">
                The Book of Boba Fett
              </h1>
              <div className="flex items-center">
                <Avatar
                  className='mr-2'
                  size="xs"
                  img="https://i.pinimg.com/736x/27/d3/10/27d3103d6cbcf55bdb6c24622190f4c5.jpg"
                  alt="avatar of Jese"
                  rounded />
                <span className='text-14 mr-2 tracking-wide text-button-text dark:text-light-helper'>
                  Boba Fett
                </span>
                <Button
                  size="xs"
                  className='border border-[#00000033] bg-transparent text-light-helper-1 shadow-none transition-none dark:border-[#D1D1D11F] dark:bg-transparent dark:text-white'
                  color="#71747A">
                  Підписатися
                </Button>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-1">
            <Button
              className="action-button no-ring no-hover-bg"
              color="gray"
              onClick={() => null}
              icon={<BsListOl className="size-6" />} />
            <Button
              className="action-button no-ring no-hover-bg"
              size="sm"
              color="gray"
              onClick={() => null}
              icon={<IoLibraryOutline className="size-6" />} />
            <Button
              className="action-button no-ring no-hover-bg hidden md:block"
              size="sm"
              color="gray"
              onClick={() => null}
              icon={<IoExpand className="size-6" />} />
            <Button
              className="action-button no-ring no-hover-bg hidden md:block"
              size="sm"
              color="gray"
              onClick={() => null}
              icon={<IoShareSocialOutline className="size-6" />} />
            {renderSettingsButton()}
            <Button
              className="action-button no-ring no-hover-bg"
              size="sm"
              color="gray"
              onClick={() => null}
              icon={<IoEllipsisHorizontal className="size-6" />} />
          </div>
        </div>
      </div>
    </nav>
  );
};