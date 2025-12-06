import { IconType } from 'react-icons';
import React from 'react';

export const Icon: React.FC<{ icon: IconType; className?: string }> = ({ icon: IconComp, className }) => (
    <IconComp className={className} />
);