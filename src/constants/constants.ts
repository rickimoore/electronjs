import {DashboardView} from "./enums";

export const VIEW = {
    DASHBOARD: {
        key: DashboardView.DASHBOARD,
        icon: 'bi-clock',
        label: 'Dashboard'
    },
    PRODUCTS: {
        key: DashboardView.PRODUCT,
        icon: 'bi-border-all',
        label: 'Products'
    },
    INBOX: {
        key: DashboardView.INBOX,
        icon: 'bi-chat-right',
        label: 'Inbox'
    },
    ORDERS: {
        key: DashboardView.ORDERS,
        icon: 'bi-list-check',
        label: 'Order List'
    },
    SETTINGS: {
        key: DashboardView.SETTINGS,
        icon: 'bi-gear',
        label: 'Settings'
    }
}

export const PRIMARY_VIEWS = [
    VIEW.DASHBOARD, VIEW.PRODUCTS, VIEW.INBOX
]

export const SECONDARY_VIEWS = []