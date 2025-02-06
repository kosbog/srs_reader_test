'use client';

import { Drawer } from 'vaul';
import { Settings } from './Settings';
import { PropsWithChildren } from 'react';

export const VaulDrawer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Drawer.Root modal={false}>
      <Drawer.Trigger>
        {children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 flex 
          h-fit flex-col rounded-t-[10px] border
        bg-white px-6 pb-8 pt-3 shadow-modal_mobile outline-none dark:border-none dark:bg-[#232323] md:dark:border-[#853D61]">
          <Settings />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}