import { __ } from '@wordpress/i18n'; 
import { useBlockProps, RichText,BlockControls } from '@wordpress/block-editor';
import './editor.scss';
import { ToolbarDropdownMenu, ToolbarButton, ToolbarGroup} from "@wordpress/components";


export default function Edit({attributes, setAttributes}) {
	const {text} = attributes;
	return (
		<>
		<BlockControls group='inline'>
			Inlin controls
		</BlockControls>
		<BlockControls group='block'>
			Block Controls
		</BlockControls>
		<BlockControls 
		group='other'
		controls={[
			{
				title: 'Button 1',
				icon: 'admin-generic',
				isActive: true,
				onClick:() => console.log('Button 1 Clicked')
			},
			{
				title: 'Button 2',
				icon: 'admin-collapse',
				onClick:() => console.log("Button 2 Clicked")
			}
		]} 
		>
			{ text &&  (

			<ToolbarGroup>
				<p>Some text</p>

						<ToolbarButton
							title={ __( 'Align Left', 'text-box' ) }
							icon="editor-alignleft"
							onClick={ () => console.log( 'Align Left' ) }
						/>
						<ToolbarButton
							title={ __( 'Align Center', 'text-box' ) }
							icon="editor-aligncenter"
							onClick={ () => console.log( 'Align center' ) }
						/>
						<ToolbarButton
							title={ __( 'Align Right', 'text-box' ) }
							icon="editor-alignright"
							onClick={ () => console.log( 'Align Right' ) }
						/>
					


						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={ __( 'More Alignments', 'text-box' ) }
							controls={ [
								{
									title: __( 'Wide', 'text-box' ),
									icon: 'align-wide',
								},
								{
									title: __( 'Full', 'text-box' ),
									icon: 'align-full-width',
								},
							] }
						/>

			</ToolbarGroup>
	)}
		</BlockControls>

		
		<RichText 
		{ ...useBlockProps() } 
		placeholder={__('Your Text', 'text-domain')} 
		tagName='h4' 
		allowedFormats={[]} 
		onChange={(val) => setAttributes({text:val})}
		value={text}
		/>	

		</>		
	);
}
