import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../store/actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

export default class Counter extends Component {

  handleAdd = () => {
    this.props.add();
  }

  handleDec = () => {
    this.props.dec();
  }

  handleAsyncInc = () => {
    this.props.asyncAdd();
  }

  render () {
    const { counter } = this.props;
    return (
      <View className='todo'>
        <Button className='add_btn' onClick={this.handleAdd}>+</Button>
        <Button className='dec_btn' onClick={this.handleDec}>-</Button>
        <Button className='dec_btn' onClick={this.handleAsyncInc}>async</Button>
        <View>{ counter.num }</View>
      </View>
    )
  }
}