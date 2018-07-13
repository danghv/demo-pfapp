import styled from 'styled-components';
import * as React from 'react'

import createPFElement from '../helpers/createElement';

const S = styled.section`

	border: green 1px dashed;
	min-height: 50px;
	margin: 20px;

`

class Section extends React.Component<{ extraProps: object, children: string[] }> {
    static type = 'Section'

    render() {
        return <S {...this.props.extraProps}>
            {this.props.children}
        </S>
    }

}

export default createPFElement({})(Section)