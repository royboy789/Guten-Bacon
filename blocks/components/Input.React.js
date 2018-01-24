const { __ } = wp.i18n;
const { Component } = wp.element;
const el = wp.element.createElement;

export default class Input extends Component {

    constructor( props ) {
        super( ...arguments );
    }

    render() {
        return (
            <div className="bacon-field-wrapper">
                <label htmlFor={this.props.id}>{__( this.props.label + '?', 'text-domain' )}</label>
                <input id={this.props.id} type={this.props.type} onChange={this.props.onChange} value={this.props.value} label={this.props.label} />
            </div>
        )
    }
}