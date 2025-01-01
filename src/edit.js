import { __ } from '@wordpress/i18n'; 
import { useBlockProps, RichText,BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import './editor.scss';
import {} from "@wordpress/components";


export default function Edit({attributes, setAttributes}) {
	const {text, alignment} = attributes;	
	return (
		<>
		
		<BlockControls >
			<AlignmentToolbar 
			value={alignment}
			onChange={(value) => setAttributes({alignment : value})} 
			/>
		</BlockControls>

		
		<RichText 
		{ ...useBlockProps() } 
		placeholder={__('Your Text', 'text-domain')} 
		tagName='h4' 
		allowedFormats={[]} 
		onChange={(val) => setAttributes({text:val})}
		value={text}
		style={{textAlign: alignment}}
		/>	

		</>		
	);
}
