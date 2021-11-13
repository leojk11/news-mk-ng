import { 
    faHouseUser,
    faUsers,
    faUserPlus,
    faClipboard,
    faPlusCircle,
    faThLarge,
    faUserTag
} from "@fortawesome/free-solid-svg-icons"


export const SIDE_BAR_ITEMS = [
    {
        label: '',
        admin_role: 'all',
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
        admin_role: 'all',
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
        admin_role: 'all',
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
        admin_role: 'all',
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
    {
        label: 'Admin',
        admin_role: 'HEAD ADMIN',
        menus: [
            {
                title: 'Manage admins',
                icon: faUsers,
                navigateTo: 'admins' 
            },
            {
                title: 'Add new admin',
                icon: faPlusCircle,
                navigateTo: 'add-admin' 
            },
            {
                title: 'Manage admin roles',
                icon: faUserTag,
                navigateTo: 'admin-roles' 
            },
            {
                title: 'Add new admin role',
                icon: faUserTag,
                navigateTo: 'add-admin-role' 
            }
        ]
    }
]