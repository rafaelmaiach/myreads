import shouldUpdate from 'recompose/shouldUpdate';
import shallowEqual from 'recompose/shallowEqual';

const onlyUpdateForValues = shouldUpdate(
  (props, nextProps) => !shallowEqual(props.values, nextProps.values),
);

export default onlyUpdateForValues;
