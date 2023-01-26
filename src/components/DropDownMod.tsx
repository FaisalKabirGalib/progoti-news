import { Dropdown, DropdownProps } from 'flowbite-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IDropDownModProps extends DropdownProps {
    levelAndRoute: IlavelAndRoute[]

}

export interface IlavelAndRoute {
    level: string,
    to: string
}

const DropDownMod: FC<IDropDownModProps> = ({ levelAndRoute, ...restProps }) => {
    const navigator = useNavigate()
    return (
        <Dropdown
            {...restProps}
        >

            {levelAndRoute.map((item, index) => {
                return (
                    <Dropdown.Item
                        key={index}
                        onClick={() => navigator(item.to)}
                    >
                        {item.level}
                    </Dropdown.Item>
                )
            })
            }
        </Dropdown>
    );
}
export default DropDownMod
