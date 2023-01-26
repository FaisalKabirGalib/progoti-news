import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import Headers from './Headers';

export interface IBaseLayoutsProps extends PropsWithChildren {
}

const BaseLayouts: FC<IBaseLayoutsProps> = ({ children }) => (
    <div className='mx-10'>
        <Headers />
        {children || <Outlet />}

    </div>
)
export default BaseLayouts
