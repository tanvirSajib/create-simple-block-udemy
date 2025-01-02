import { __ } from '@wordpress/i18n'; 
import {
	useBlockProps,
	RichText,
	BlockControls,	
	AlignmentToolbar,	
} from '@wordpress/block-editor';

import './editor.scss';



export default function Edit( props ) {
	const {
		attributes,
		setAttributes,			
	} = props;
	const { text, alignment } = attributes;	


	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	


	return (
		<>


		<BlockControls >
			<AlignmentToolbar 
			value={alignment}
			onChange={onChangeAlignment} 
			/>
		</BlockControls>

		
		<RichText 
		{ ...useBlockProps({
			className: `text-box-align-${ alignment }`,			
		}) } 
		placeholder={__('Your Text', 'text-domain')} 
		tagName='h4' 
		allowedFormats={[]} 
		onChange={onChangeText}
		value={text}		
		/>	

		</>		
	);
}

