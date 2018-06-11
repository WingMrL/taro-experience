import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import Index from './pages/index'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/course-list/index',
      'pages/user-center-me/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666',
      selectedColor: '#ff7258',
      list: [{
        pagePath: 'pages/course-list/index',
        text: '课程列表'
      }, {
        pagePath: 'pages/user-center-me/index',
        text: '我'
      }]
    },
  }

  componentDidMount () { }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
