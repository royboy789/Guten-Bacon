const { Component } = wp.element;
const { __ } = wp.i18n;


export default class Settings extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <label
                    //user htmlFor to set "for" html attribute
                    htmlFor={this.props.id}
                >
                    {__( 'Who', 'text-domain')}
                </label>
                <input
                    id={this.props.id}
                    type="text"
                    onChange={this.props.changeHandler}
                    value={this.props.value}
                />
            </div>
        );

    }

}
