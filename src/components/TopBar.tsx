import Typography, {TypographyType} from "./Typography";
import {useSetRecoilState} from "recoil";
import {isOpenSideBar} from "../recoil/atoms";

const TopBar = () => {
    const toggleSideBar = useSetRecoilState(isOpenSideBar);

    const toggleSide = () => toggleSideBar(prev => !prev);

  return (
      <div className="w-full h-18 bg-white py-4 px-8 flex items-center justify-between">
          <div onClick={toggleSide} className="cursor-pointer outline-none">
              <i className="bi bi-list text-xl"/>
          </div>
          <div className="flex space-x-4 items-center">
              <i className="bi cursor-pointer bi-bell-fill text-highlight text-lg"/>
              <Typography color="text-gray-400" type={TypographyType.Small}>Test User</Typography>
              <div className="h-11 w-11 bg-highlight rounded-full" />
          </div>
      </div>
  )
}

export default TopBar;