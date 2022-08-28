import Typography from "../Typography";
import {FC, KeyboardEvent} from "react";
import {useRecoilValue} from "recoil";
import {isOpenSideBar} from "../../recoil/atoms";

export type IconType = 'bi-clock' | 'bi-heart' | 'bi-chat-right' | 'bi-border-all' | 'bi-list-check' | 'bi-list-task' | 'bi-gift' | 'bi-calendar-week' | 'bi-clipboard' | 'bi-people' | 'bi-cash-stack' | 'bi-bar-chart' | 'bi-power' | 'bi-gear';

export interface SideBarItemProps {
    icon: IconType,
    text: string,
    onClick: () => void,
    isActive?: boolean,
}
const SideBarItem:FC<SideBarItemProps> = ({icon, onClick, text, isActive}) => {
    const isOpen = useRecoilValue(isOpenSideBar);
    const catchKeyUpEvent = (e: KeyboardEvent<HTMLLIElement>) => {
        if(e.keyCode === 13) {
            onClick();
        }
    }

  return (
      <li tabIndex={0} onClick={onClick} onKeyUp={catchKeyUpEvent} className="w-full h-12 relative group flex items-center cursor-pointer justify-center box-border pb-2">
          <div className={`absolute h-10 w-2 bg-highlight top-0 left-0 rounded group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
          <div className={`w-3/4 px-4 space-x-4 box-border flex ${!isOpen ? 'justify-center' : ''} group-hover:bg-highlight ${isActive ? 'bg-highlight text-white' : 'bg-white'} group-hover:text-white  items-center h-full rounded-md`}>
              <i className={`${icon}`}/>
              <Typography color={isActive ? 'text-white' : 'text-textPrimary'} className={`${!isOpen ? 'hidden' : ''} group-hover:text-white`}>{text}</Typography>
          </div>
      </li>
  )
}

export default SideBarItem;