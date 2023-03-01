import { FC } from "react";

export interface INotFoundProps {
}

export const NotFound: FC<INotFoundProps> = ({ }) => {
    return (
        <img src={'https://github.com/FaisalKabirGalib/Public-Assets/blob/main/no-item.jpg?raw=true'} />
    );
}
