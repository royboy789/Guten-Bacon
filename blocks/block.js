

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

import Settings from './components/Settings';
import Display from './components/Display';

registerBlockType( 'learn-gutenberg/ex2-react', {
    title: __( 'Learn Gutenberg Example 2: React', 'learn-gutenberg' ),
    category: 'widgets',
    supportHTML: false,
    attributes: {
        who: {
            selector: 'p',
            attribute: 'who',
        },
    },
    edit({attributes, setAttributes, className, focus, id}) {
        //Function to set attribute "who"
        //A reference to this function is passed to React component as prop
        //Function exits in this scope, so it can update attributes and flow changes down to Component
        const settingsChangeHandler = ( event ) => {
            setAttributes( { who: event.target.value } );
        };


        //return using WordPress createElement
        return el(
            'div',
            { className: className },
            [

                el(
                    'div',
                    {},
                    <Settings
                        id="learn-gutenberg-ex2"
                        changeHandler={settingsChangeHandler}
                        value={attributes.who}
                    />
                ),
                el(
                    'div',
                    {},
                    <Display
                        className={className}
                        who={attributes.who}
                    />
                )
            ]
        );
	},

    save: function(attributes,className) {
        el(
            'p',
            {
                className:className,
                who: attributes.who
            }
        );
    }
} );
