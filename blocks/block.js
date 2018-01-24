import Input from './components/Input.React';
import Select from './components/Select.React';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

registerBlockType( 'blocks/guten-bacon', {
    title: __( 'Bacon Ispum Generator', 'learn-gutenberg' ),
    category: 'widgets',
    supportHTML: false,
    attributes: {
        type: {
            selector: 'div#bacon-wrapper',
            attribute: 'type',
            default: 'meat-and-filler'
        },
        paras: {
            selector: 'div#bacon-wrapper',
            attribute: 'paras',
            default: '2'
        },
        start_with: {
            selector: 'div#bacon-wrapper',
            attribute: 'start-with',
            default: 'false'
        },
        content: {
            selector: 'div#bacon-wrapper p',
            default: '<p>Select Options</p>'
        }
    },
    edit({attributes, setAttributes, className, focus, id}) {

        const getBacon = () => {
            let url = 'https://baconipsum.com/api/?type=' + attributes.type + '&paras=' + attributes.paras;
            console.log( attributes );
            if ( 'false' !== attributes.start_with ) {
                url += '&start-with-lorem=1';
            }
            jQuery.get( url ).done((res) => {
               setAttributes({content: res})
            });
        };

        const changeHandler = ( event ) => {
            let newAttr = {};
            newAttr[event.target.id] = event.target.value;
            setAttributes( newAttr );
            getBacon();
        };

        const typeOptions = [
            {
                value: 'meat-and-filler',
                label: 'Meat & Filler'
            },
            {
                value: 'all-meat',
                label: 'All Meat'
            }
        ];

        const startWithOptions = [
            {
                value: 'true',
                label: 'Yes'
            },
            {
                value: 'false',
                label: 'No'
            }
        ];



        return (
            <div id={id}>
                <Select
                    id="start_with"
                    changeCallback={changeHandler}
                    value={attributes.start_with}
                    options={startWithOptions}
                    label="Start With Bacon Ipsum...?"
                />
                <Select
                    id="type"
                    changeCallback={changeHandler}
                    value={attributes.type}
                    options={typeOptions}
                    label="Type of Filler"
                />
                <Input
                    id="paras"
                    type="number"
                    value={attributes.paras}
                    label="Number of Paragraphs"
                    onChange={changeHandler}
                />
            </div>
        )
    },

    save: function({attributes}) {
        return (
            <div type={attributes.type} paras={attributes.paras} start-with={attributes.start_with} className={attributes.className} id="bacon-wrapper">
                {attributes.content.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
        );
    }
} );