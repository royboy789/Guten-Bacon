const { Component } = wp.element;
const { __ } = wp.i18n;


export default class Display extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <p
                className={this.props.className}
                who={this.props.who}
            >
                {this.props.who}
            </p>
        );

    }

}
