import clsx from 'clsx';

export function getListItemClass(isDanger?: boolean) {
    return clsx(
        'text-base lg:text-sm text-primary-700 px-3 py-1.5 rdx-highlighted:bg-accent-200 rdx-highlighted:text-white outline-none lg:border-none lg:rounded-md cursor-pointer capitalize flex items-center space-x-2  ',
        isDanger && 'flex items-center space-x-3 text-red-500 rdx-highlighted:text-white rdx-highlighted:bg-red-500'
    );
}
