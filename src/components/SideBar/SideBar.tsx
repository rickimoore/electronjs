import Typography, {TypographyType} from "../Typography";
import SideBarItem, {IconType} from "./SideBarItem";
import {PRIMARY_VIEWS, SECONDARY_VIEWS} from "../../constants/constants";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {appView, dashboardView, isOpenSideBar} from "../../recoil/atoms";
import {AppView} from "../../constants/enums";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UniSwapLogo from "../../assets/uniswap.svg"

const SideBar = () => {
    const [view, setView] = useRecoilState(dashboardView);
    const setAppView = useSetRecoilState(appView);

    const isOpen = useRecoilValue(isOpenSideBar);

  return (
      <div className={`${isOpen ? 'w-60' : 'w-20'} flex-shrink-0`}>
          <div className={`w-full flex flex-col items-center justify-center text-center ${isOpen ? 'p-8' : ''}`}>
              <img className="w-32 h-32" src={UniSwapLogo} alt=""/>
              {
                  isOpen && (
                      <Typography type={TypographyType.Small}>(Not Really Tho lolz)</Typography>
                  )
              }
          </div>
          <ul>
              {PRIMARY_VIEWS.map(({icon, label, key}) => (
                  <SideBarItem key={key} isActive={view === key} icon={icon as IconType} onClick={() => setView(key)} text={label} />
              ))}
          </ul>
          <hr className="h1 border-b w-full my-4"/>
          <ul>
              {SECONDARY_VIEWS.map(({icon, label, key}) => (
                  <SideBarItem key={key} isActive={view === key} icon={icon as IconType} onClick={() => setView(key)} text={label} />
              ))}
          </ul>
          <div className="w-full cursor-pointer mt-4 flex justify-center">
              <div onClick={() => setAppView(AppView.AUTH)} className={`flex ${!isOpen ? 'justify-center' : ''} space-x-4 px-4 w-3/4`}>
                  <i className="bi bi-power"/>
                  <Typography className={!isOpen ? 'hidden' : ''}>Logout</Typography>
              </div>
          </div>
      </div>
  )
}

export default SideBar;