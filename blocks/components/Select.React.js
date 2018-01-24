const { __ } = wp.i18n;
const { Component } = wp.element;
const el = wp.element.createElement;

export default class Select extends Component {


    constructor( props ) {
        super( ...props );
    };


    render() {
        return(
            <div className="bacon-field-wrapper">
                <label htmlFor={this.props.id}>{__( this.props.label + '?', 'text-domain' )}</label>
                <select onChange={this.props.changeCallback} value={this.props.value} id={this.props.id}>
                    {this.props.options.map((item, index) => {
                        return <option key={index} value={item.value}>{item.label}</option>
                    })}
                </select>
            </div>
        )
    }
}