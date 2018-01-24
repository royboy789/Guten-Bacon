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
        content: {
            selector: 'div#bacon-wrapper p',
            default: '<p>Select Options</p>'
        }
    },
    edit({attributes, setAttributes, className, focus, id}) {

        const getBacon = () => {
            let url = 'https://baconipsum.com/api/?type=' + attributes.type + '&paras=' + attributes.paras + '&start-with-lorem=1';
            jQuery.get( url ).done((res) => {
               setAttributes({content: res})
            });
        };

        const changeHandler = ( event ) => {
            getBacon();
            let newAttr = {};
            newAttr[event.target.id] = event.target.value;
            setAttributes( newAttr );
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



        return (
            <div id={id}>
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
        console.log( attributes );
        return (
            <div className={attributes.className} id="bacon-wrapper" type={attributes.type} paras={attributes.paras}>
                {attributes.content.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
        );
    }
} );