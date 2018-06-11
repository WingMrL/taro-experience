import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Counter from '../../sections/course-list/counter'
import List from '../../sections/course-list/list'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: '1',
        value: 1
      }, {
        id: '2',
        value: 2
      }]
    };
  }

  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmout () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { list } = this.state;
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Text className='icon-selected'></Text>
        <Counter />
        <Counter />
        <List list={list} />
      </View>
    )
  }
}

