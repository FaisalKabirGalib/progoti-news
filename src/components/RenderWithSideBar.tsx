import { FC, PropsWithChildren } from 'react';
import According from './According';

export interface IRenderWithSideBarProps extends PropsWithChildren {
}

const RenderWithSideBar: FC<IRenderWithSideBarProps> = ({ children }) => {
    return (
        <div className="lg:grid md:grid-cols-4 md:gap-x-4">
            {children}
            <div className='xs:hidden lg:block md:hidden '>
                <According />
            </div>

        </div>
    );
}
export default RenderWithSideBar
