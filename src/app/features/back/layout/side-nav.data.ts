import { 
    faHouseUser,
    faUsers,
    faUserPlus,
    faClipboard,
    faPlusCircle,
    faThLarge
} from "@fortawesome/free-solid-svg-icons"


export const SIDE_BAR_ITEMS = [
    {
        label: '',
        menus: [
            {
                title: 'Home',
                icon: faHouseUser,
                navigateTo: 'dashboard'
            }
        ]
    },
    {
        label: 'Users',
        menus: [
            {
                title: 'Manage users',
                icon: faUsers,
                navigateTo: 'users'
            },
            {
                title: 'Add new user',
                icon: faUserPlus,
                navigateTo: 'add-user'
            }
        ]
    },
    {
        label: 'Posts',
        menus: [
            {
                title: 'Manage posts',
                icon: faClipboard,
                navigateTo: 'posts'
            },
            {
                title: 'Add new post',
                icon: faPlusCircle,
                navigateTo: 'add-post'
            }
        ]
    },
    {
        label: 'Categories',
        menus: [
            {
                title: 'Manage categories',
                icon: faThLarge,
                navigateTo: 'categories'
            },
            {
                title: 'Add new category',
                icon: faPlusCircle,
                navigateTo: 'add-category'
            },
            {
                title: 'Sub categories',
                icon: faThLarge,
                navigateTo: 'sub-categories'
            },
            {
                title: 'Add new sub category',
                icon: faPlusCircle,
                navigateTo: 'add-sub-category'
            }
        ]
    },
]