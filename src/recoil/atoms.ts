import {atom} from "recoil";
import {DashboardView, AppView} from "../constants/enums";

export const selectedMessages = atom<number[]>({
    key: 'SelectedMessages',
    default: [],
})

export const favoriteMessages = atom<number[]>({
    key: 'favoriteMessages',
    default: [],
})

export const dashboardView = atom<DashboardView>({
    key: 'DashboardView',
    default: DashboardView.DASHBOARD
})

export const appView = atom<AppView>({
    key: 'AppView',
    default: AppView.AUTH
})

export const isOpenSideBar = atom<boolean>({
    key: 'IsOpenNav',
    default: false
})