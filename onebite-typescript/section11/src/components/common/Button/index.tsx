import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    width?: number;
    height?: number;
    backgroundColor?: string;
    borderRadius?: string;
    onClick: () => void;
}

const Btn = styled.button`
    outline: none;
    border: 0;
    cursor: pointer;
`



const Button = ({ children, width = 50, height = 40, backgroundColor = "#ececec", borderRadius = '5px', onClick}: ButtonProps) => {
    const buttonStyle = {
        width,
        height,
        backgroundColor,
        borderRadius,
    }
    
    return (
        <Btn style={buttonStyle} onClick={onClick}>{children}</Btn>
    )
}

export default Button;