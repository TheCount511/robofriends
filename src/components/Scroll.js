import React from 'react';


const Scroll = (props) =>{

return (<div style={
				{	overflowY: 'scroll',
 					marginTop: '10px',
 					paddingTop: '10px',
 					borderTop: ' #4AD4C5 2px solid', 
 					height: '500px' 
 				}}
 				>
	{props.children}
</div>);};











export default Scroll;