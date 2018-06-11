import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'


export default class List extends Component {

  componentWillMount = () => {
  }
  

  render () {
    return (
      <View className='list'>
        { 
          this.props.list.map((v) => {
            return <Text key={v.id}>{ v.value }</Text>
          })
        }
      </View>
    )
  }
}