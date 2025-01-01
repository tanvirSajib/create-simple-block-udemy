import { __ } from '@wordpress/i18n'; 
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';


export default function Edit({attributes, setAttributes}) {
	const {text} = attributes;
	return (
		<RichText 
		{ ...useBlockProps() } 
		placeholder={__('Your Text', 'text-domain')} 
		tagName='h4' 
		allowedFormats={['core/bold']} 
		onChange={(val) => setAttributes({text:val})}
		value={text}
		/>			
	);
}
