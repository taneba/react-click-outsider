import React from 'react';
interface Props {
    onClickOutside: (e: MouseEvent | TouchEvent) => void;
    children: React.ReactNode;
}
export default function ClickOutside(props: Props): JSX.Element;
export {};
