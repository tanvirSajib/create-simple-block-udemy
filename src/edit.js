import { __ } from '@wordpress/i18n'; 
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import './editor.scss';



export default function Edit({attributes, setAttributes}) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const onBackgroundColorChange = ( newBgColor ) => {
		setAttributes( { backgroundColor: newBgColor } );
	};



	return (
		<>

			<InspectorControls>
				<PanelBody
					title={ __( 'Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
				>
					
					<ColorPalette
						colors={ [
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						] }
						value={backgroundColor}
						onChange={ onBackgroundColorChange }
					/>
				</PanelBody>
			</InspectorControls>
		
		<BlockControls >
			<AlignmentToolbar 
			value={alignment}
			onChange={onChangeAlignment} 
			/>
		</BlockControls>

		
		<RichText 
		{ ...useBlockProps({
			className: `text-box-align-${ alignment }`,
			style:{
				backgroundColor: backgroundColor
			}
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
