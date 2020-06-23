import React, {Component, Fragment} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
require('./TextOverImage.scss');

// const TextOverImageEditConfig = {
//     emptyLabel: 'Text Over Image',
//     isEmpty: function(props) {
//         return !props.imgPath || props.imgPath.trim().length < 1 || props.imgText.trim().length < 1;
//     }
// }
export default class TextOverImage extends Component{
    get textImage(){
        if(!this.props.imgText){
          return 'Add something';
        }else{
          return this.props.imgText;
        }
    }
    render(){
        const htmlDom2 = React.createElement(this.textImage, {}, '');
        return (
            <Fragment>
            <div className="container">
                <img src="../../images/nature.jpg" alt="Nature" style="width:100%;"/>
                <div className="text-block">
                    <p>{htmlDom2}</p>
                </div>
            </div>
        </Fragment>
        )
            
    }
}

MapTo('my-aem-project/components/content/textOverImage')(TextOverImage);