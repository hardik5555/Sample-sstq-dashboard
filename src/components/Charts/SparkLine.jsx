import React from 'react';
import { Sparklinecomponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class Sparkline extends React.PureComponent {
    render (){
        const { id, height, width, color, data, type, urrentColor } = this.props;

        return(
            <Sparklinecomponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType="Numeric"
            fill={Color}
            border={{ color: currentColor, width: 2 }}
            tooltipSettings={{
                visible: true,
                // eslint-disable-next-line no-template-curly-in-string
                format: '${x} : data ${yval}',
                trackLineSettings: {
                  visible: true,
                },
              }}
              marketSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
              dartaSource={Data}
              xName='x'
              yName='yval'
              type={type}
              >
                <Inject services={[SparklineTooltip]} />
              </Sparklinecomponent>
        );
    }
}

export default SparkLine;


