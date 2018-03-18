import React from 'react';

import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Header from 'grommet/components/Header';
import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';
import Edit from 'grommet/components/icons/base/Edit';

import FieldHeader from './FieldHeader';

class AccordionObjectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layerActive: false
    };

    this._onClick = this._onClick.bind(this);
  }


  _onClick() {
    this.setState({ layerActive: true })
  }

  render() {
    if (this.props.idSchema['$id'] == "root" ) {
      return (
        <Box>
          {this.props.properties.map(prop => prop.content )}
        </Box>
      );
    }
    else {
      return (
        <Box className="grommetux-form-field">
          <Accordion animate={false} openMulti={true}>
            <AccordionPanel
              heading={
                <FieldHeader
                  title={this.props.title}
                  required={this.props.required}
                  description={this.props.description}
                  />
                }
            >
              <Box pad="small">
                {this.props.properties.map(prop => prop.content )}
              </Box>
            </AccordionPanel>
          </Accordion>
          </Box>
      );
    }
  }
}

            // <AccordionPanel heading={(
            //   <div>
            //     <Title>{this.props.title}{this.props.required ? "*" : null}</Title>
            //     {this.props.description ? <Paragraph size='small'>{this.props.description}</Paragraph> : null}
            //   </div>)}>
            //   <Box pad="small">
            //     {this.props.properties.map(prop => prop.content )}
            //   </Box>
            // </AccordionPanel>

export default AccordionObjectField;