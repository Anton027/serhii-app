import { Wrap } from "./LightBox.styled"
import React, {useState} from 'react';
export const LightBox = ({ children, src, poster }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};
    return (
        
        <Wrap onClick={toggleIsOpen}>
            
            {children}
            {isOpen ?
				<div onClick={toggleIsOpen} style={{
					position: 'fixed',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100vw',
					backgroundColor: 'rgba(0,0,0,0.7)',
					cursor: 'pointer',
					
                }}> 
                    <video 
                        src={src}
                        poster={poster}>
                    </video>
				</div>
				: null}
        </Wrap>
    )
}