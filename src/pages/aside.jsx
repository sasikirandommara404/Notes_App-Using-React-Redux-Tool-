import { NavLink } from 'react-router-dom';

export const Aside = () => {
    const getClassName = ({ isActive }) =>
        isActive
            ? 'flex items-center gap-x-1 p-1 bg-blue-500 text-white rounded-r-full'
            : 'flex items-center gap-x-1 p-1 hover:bg-blue-500 hover:text-white rounded-r-full';

    return (
        <div className='flex flex-col pl-0 pt-5 gap-y-2 w-35 h-screen border-r border-gray-200'>
            <NavLink to='/' className={getClassName}>
                <span className="material-symbols-outlined">home</span>
                Home
            </NavLink>
            <NavLink to='/achive' className={getClassName}>
                <span className="material-symbols-outlined">archive</span>
                Archive
            </NavLink>
            <NavLink to='/important' className={getClassName}>
                <span className="material-symbols-outlined">label_important</span>
                Important
            </NavLink>
            <NavLink to='/bin' className={getClassName}>
                <span className="material-symbols-outlined">delete</span>
                Bin
            </NavLink>
        </div>
    );
};
