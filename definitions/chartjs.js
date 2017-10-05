// @flow
const DisplayFormats = {
  millisecond: 'h:mm:ss.SSS a',
  second: 'h:mm:ss a',
  minute: 'h:mm a',
  hour: 'hA',
  day: 'MMM D',
  week: 'll',
  month: 'MMM YYYY',
  quarter: '[Q]Q - YYYY',
  year: 'YYYY',
};

declare module 'chart.js' {
  declare type AxisCallbacks = {
    beforeUpdate?: Function,
    beforeSetDimensions?: Function,
    afterSetDimensions?: Function,
    beforeDataLimits?: Function,
    afterDataLimits?: Function,
    beforeBuildTicks?: Function,
    afterBuildTicks?: Function,
    beforeTickToLabelConversion?: Function,
    afterTickToLabelConversion?: Function,
    beforeCalculateTickRotation?: Function,
    afterCalculateTickRotation?: Function,
    beforeFit?: Function,
    afterFit?: Function,
    afterUpdate?: Function,
  };

  declare type Axis = {
    display?: boolean,
    callbacks?: AxisCallbacks,
    weight?: number,
  };

  declare type PaddingOptions = {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
  };

  declare type AxisGridLineConfiguration = {
    display?: boolean,
    color?: string | Array<string>,
    borderDash?: Array<number>,
    borderDashOffset?: number,
    lineWidth?: number | Array<number>,
    drawBorder?: boolean,
    drawOnChartArea?: boolean,
    drawTicks?: boolean,
    tickMarkLength?: number,
    zeroLineWidth?: number,
    zeroLineColor?: string,
    zeroLineBorderDash?: Array<number>,
    zeroLineBorderDashOffset?: number,
    offsetGridLines?: boolean,
  };

  declare type CanvasLineCap = 'butt' | 'round' | 'square';

  declare type CanvasLineJoin = 'bevel' | 'miter' | 'round';

  declare type FontStyle = 'bold' | 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';

  declare type Position = 'top' | 'left' | 'bottom' | 'right';

  declare type FontOptions = {
    fontColor?: string,
    fontFamily?: string,
    fontSize?: number,
    fontStyle?: FontStyle,
  };

  declare type AxisScaleLabelConfiguration = FontOptions & {
    display?: boolean,
    labelString?: string,
    lineHeight?: number,
    padding?: number | PaddingOptions,
  };

  declare type AxisCommonTickOptions = FontOptions & {
    callback?: Function,
  };

  declare type AxisTickConfiguration = AxisCommonTickOptions & {
    display?: boolean,
    reverse?: boolean,
    minor?: Object,
    major?: Object,
  };

  declare type AxisMinorTickConfiguration = AxisCommonTickOptions;

  declare type AxisMajorTickConfiguration = AxisCommonTickOptions;

  declare type CartesianAxisType = 'category' | 'linear' | 'logarithmic' | 'time';

  declare type MinMax = {
    min?: number,
    max?: number,
  };

  declare type CartesianAxisTickConfiguration = {
    autoSkip?: boolean,
    autoSkipPadding?: number,
    labelOffset?: number,
    maxRotation?: number,
    minRotation?: number,
    mirror?: boolean,
    padding?: number,
  };

  declare type CartesianAxis = {
    type?: CartesianAxisType,
    position?: Position,
    offset?: boolean,
    id?: string,
    gridLines?: AxisGridLineConfiguration,
    scaleLabel?: AxisScaleLabelConfiguration,
  };

  declare type CategoryCartesianAxisTickConfiguration = CartesianAxisTickConfiguration & MinMax & {
    labels?: Array<string>;
};

  declare type CategoryCartesianAxis = CartesianAxis & {
    ticks?: CategoryCartesianAxisTickConfiguration,
  };

  declare type LinearCartesianAxisTickConfiguration = CartesianAxisTickConfiguration & MinMax & {
    beginAtZero?: boolean,
    maxTicksLimit?: number,
    stepSize?: number,
    suggestedMax?: number,
    suggestedMin?: number,
  };

  declare type LinearCartesianAxis = CartesianAxis & {
    ticks?: LinearCartesianAxisTickConfiguration,
  };

  declare type LogarithmicCartesianAxis = CartesianAxis & {
    ticks?: MinMax,
  };

  declare type ScaleBounds = 'data' | 'ticks';

  declare type ScaleDistribution = 'linear' | 'series';

  declare type TicksSource = 'auto' | 'data' | 'labels';

  declare type TimeUnit = $Keys<typeof DisplayFormats>;

  declare type TimeCartesianAxisTickConfiguration = CartesianAxisTickConfiguration & {
    source?: TicksSource
  };

  declare type TimeCartesianAxis = CartesianAxis & {
    callback?: Function,
    distribution?: ScaleDistribution,
    bounds?: ScaleBounds,
    ticks: TimeCartesianAxisTickConfiguration,
    time: {
      displayFormats?: typeof DisplayFormats,
      isoWeekday?: boolean,
      max?: string,
      min?: string,
      parser?: string | Function,
      round?: string,
      tooltipFormat?: string,
      unit?: string,
      stepSize?: number,
      minUnit?: TimeUnit,
    },
  };

  declare type LinearAngleLineConfiguration = {
    display?: boolean,
    color?: string,
    lineWidth?: number,
  };

  declare type PointLabelConfiguration = FontOptions & {
    callback?: Function,
  };

  declare type LinearRadialAxisTickConfiguration = MinMax & {
    backdropColor?: string,
    backdropPaddingX?: number,
    backdropPaddingY?: number,
    beginAtZero?: boolean,
    maxTicksLimit?: number,
    stepSize?: number,
    suggestedMax?: number,
    suggestedMin?: number,
    showLabelBackdrop?: boolean,
  };

  declare type LinearRadialAxis = {
    angleLines: LinearAngleLineConfiguration,
    gridLines: AxisGridLineConfiguration,
    pointLabels: PointLabelConfiguration,
    ticks: LinearRadialAxisTickConfiguration,
  }

  declare type AnimationEasing =
    'linear'
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint'
    | 'easeInSine'
    | 'easeOutSine'
    | 'easeInOutSine'
    | 'easeInExpo'
    | 'easeOutExpo'
    | 'easeInOutExpo'
    | 'easeInCirc'
    | 'easeOutCirc'
    | 'easeInOutCirc'
    | 'easeInElastic'
    | 'easeOutElastic'
    | 'easeInOutElastic'
    | 'easeInBack'
    | 'easeOutBack'
    | 'easeInOutBack'
    | 'easeInBounce'
    | 'easeOutBounce'
    | 'easeInOutBounce';

  declare type AnimationConfiguration = {
    duration?: number,
    easing?: AnimationEasing,
    onProgress?: Function,
    onComplete?: Function,
  };

  declare type ElementShapeOptions = {
    backgroundColor?: string,
    borderWidth?: number,
    borderColor?: string,
  }

  declare type ElementPointStyle =
    'circle'
    | 'cross'
    | 'crossRot'
    | 'dash'
    | 'line'
    | 'rect'
    | 'rectRounded'
    | 'rectRot'
    | 'star'
    | 'triangle';

  declare type ElementPointConfiguration = ElementShapeOptions & {
    radius?: number,
    pointStyle?: ElementPointStyle,
    hitRadius?: number,
    hoverRadius?: number,
    hoverBorderWidth?: number,
  };

  declare type ElementFill = 'zero' | 'top' | 'bottom';

  declare type ElementLineConfiguration = ElementShapeOptions & {
    tension?: number,
    borderCapStyle?: CanvasLineCap,
    borderDash?: Array<number>,
    borderDashOffset?: number,
    borderJoinStyle?: CanvasLineJoin,
    capBezierPoints?: number,
    fill?: boolean | ElementFill,
    stepped?: boolean,
  };

  declare type ElementRectangleConfiguration = ElementShapeOptions & {
    borderSkipped?: Position,
  };

  declare type ElementArcConfiguration = ElementShapeOptions;

  declare type LayoutConfiguration = {
    padding?: number | PaddingOptions,
  };

  declare type LegendItem = {
    text: string,
    fillStyle: string,
    hidden: boolean,
    lineCap: CanvasLineCap,
    lineDash: Array<number>,
    lineDashOffset: number,
    lineJoin: CanvasLineJoin,
    lineWidth: number,
    strokeStyle: string,
    pointStyle: string,
  };

  declare type LegendLabelConfiguration = FontOptions & {
    boxWidth?: number,
    padding?: number,
    generateLabels?: Function,
    filter?: Function,
    usePointStyle?: boolean,
  };

  declare type LegendConfiguration = {
    display?: boolean,
    position?: Position,
    fullWidth?: boolean,
    onClick?: (e: any, legendItem: LegendItem) => void,
    onHover?: Function,
    reverse?: boolean,
    labels?: Object,
};

  declare type TitleConfiguration = FontOptions & {
    display?: boolean,
    position?: Position,
    padding?: number,
    lineHeight?: number,
    text?: string | Array<string>,
  };

  declare type TooltipPositionMode = 'average' | 'nearest';

  declare type TooltipItem = {
    xLabel: string,
    yLabel: string,
    datasetIndex: number,
    index: number,
    x: number,
    y: number,
  };

  declare type TooltipModel = {
    dataPoints: Array<TooltipItem>,
    xPadding: number,
    yPadding: number,
    xAlign: string,
    yAlign: string,
    x: number,
    y: number,
    width: number,
    height: number,
    caretX: number,
    caretY: number,
    body: Array<Object>,
    beforeBody: Array<string>,
    afterBody: Array<string>,
    bodyFontColor: string,
    _bodyFontFamily: string,
    _bodyFontStyle: string,
    _bodyAlign: string,
    bodyFontSize: number,
    bodySpacing: number,
    title: Array<string>,
    titleFontColor: string,
    _titleFontFamily: string,
    _titleFontStyle: string,
    titleFontSize: number,
    _titleAlign: string,
    titleSpacing: number,
    titleMarginBottom: number,
    footer: Array<string>,
    footerFontColor: string,
    _footerFontFamily: string,
    _footerFontStyle: string,
    footerFontSize: number,
    _footerAlign: string,
    footerSpacing: number,
    footerMarginTop: number,
    caretSize: number,
    cornerRadius: number,
    backgroundColor: string,
    labelColors: Array<string>,
    opacity: number,
    legendColorBackground: string,
    displayColors: boolean,
  }

  declare type TooltipCallbacks = {
    beforeTitle?: (tooltipItems: Array<TooltipItem>, data: any) => void,
    title?: (tooltipItems: Array<TooltipItem>, data: any) => void,
    afterTitle?: (tooltipItems: Array<TooltipItem>, data: any) => void,
    beforeBody?: (tooltipItems: Array<TooltipItem>, data: any) => void,
    beforeLabel?: (tooltipItem: TooltipItem, data: any) => void,
    label?: (tooltipItem: TooltipItem, data: any) => void,
    labelColor?: (tooltipItem: TooltipItem, chart: any) => void,
    labelTextColor?: (tooltipItem: TooltipItem, chart: any) => void,
    afterLabel?: (tooltipItem: TooltipItem, data: any) => void,
    afterBody?: (tooltipItems: Array<TooltipItem>, data: any) => void,
    beforeFooter?: (tooltipItems: Array<TooltipItem>, data: any) => void,
    footer?: (tooltipItems: Array<TooltipItem>, data: any) => void,
    afterFooter?: (tooltipItems: Array<TooltipItem>, data: any) => void,
};

  declare type TooltipConfiguration = {
    enabled?: boolean,
    custom?: Function,
    mode?: string,
    intersect?: boolean,
    position?: TooltipPositionMode,
    callbacks?: TooltipCallbacks,
    itemSort?: Function,
    filter?: Function,
    backgroundColor?: string,
    titleFontFamily?: string,
    titleFontSize?: number,
    titleFontStyle?: FontStyle,
    titleFontColor?: string,
    titleSpacing?: number,
    titleMarginBottom?: number,
    bodyFontFamily?: string,
    bodyFontSize?: number,
    bodyFontStyle?: FontStyle,
    bodyFontColor?: string,
    bodySpacing?: number,
    footerFontFamily?: string,
    footerFontSize?: number,
    footerFontStyle?: FontStyle,
    footerFontColor?: string,
    footerSpacing?: number,
    footerMarginTop?: number,
    xPadding?: number,
    yPadding?: number,
    caretPadding?: number,
    caretSize?: number,
    cornerRadius?: number,
    multiKeyBackground?: string,
    displayColors?: boolean,
    borderColor?: string,
    borderWidth?: number,
  };

  declare type InteractionEventType =
    'mousemove'
    | 'mouseout'
    | 'click'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  declare type InteractionEvent = {
    events?: Array<InteractionEventType>,
    onHover?: ?Function,
    onClick?: ?Function,
  };

  declare type InteractionMode = 'point' | 'nearest' | 'index' | 'dataset' | 'x' | 'y';

  declare type Interaction = {
    mode?: InteractionMode,
    intersect?: boolean,
    axis?: 'x' | 'y' | 'xy',
    animationDuration?: number,
  };

  declare type DevicePixelRatio = {
    devicePixelRatio: number,
  };

  declare type GlobalFontOptions = {
    defaultFontColor?: string,
    defaultFontFamily?: string,
    defaultFontSize?: number,
    defaultFontStyle?: FontStyle,
  };

  declare type ChartType =
    'area'
    | 'bar'
    | 'bubble'
    | 'doughnut'
    | 'line'
    | 'mixed'
    | 'polar'
    | 'radar'
    | 'scatter';
}
