import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const {
		text,
		alignment,		
	} = attributes;	

	const classes = classnames( `text-box-align-${ alignment }`);
	
	return (
		<RichText.Content { ...useBlockProps.save({
			className: classes,	
		}) } value={text} tagName='h4' />
			
	);
}
