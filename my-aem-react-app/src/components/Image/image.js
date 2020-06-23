import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
require('./image.scss');

const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};
export default class Image extends Component {
    get caption() {
        if(this.props.title && this.props.title.length > 0) {
            return <span className="Image-caption">{this.props.title}</span>;
        }
        return null;
    }

    get content() {
        return <img src={this.props.src} alt={this.props.alt}
            title={this.props.displayPopupTitle && this.props.title}/>
    }
    render() {
        return (<div className="Image">
                {this.content}
                {this.caption}
            </div>);
    } 
}

MapTo('my-aem-project/components/content/image')(Image, ImageEditConfig);