import { __ } from '@wordpress/i18n'; 
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';


export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'Create Simple Block Udemy – fsdfds hello from the editor!',
				'create-simple-block-udemy'
			) }
		</p>
	);
}
