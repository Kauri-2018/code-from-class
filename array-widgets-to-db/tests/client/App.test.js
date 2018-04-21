import React from 'react'
import {shallow, mount} from 'enzyme'

import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('Shows heading', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe('Widgets FTW!')
})

test('Renders widget list', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('.widget-list').exists()).toBeTruthy()
})

test('Renders add form when clicked', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('.widget-form').exists()).toBeFalsy()
  wrapper.find('#show-widget-link').simulate('click')
  expect(wrapper.find('.widget-form').exists()).toBeTruthy()
})

test('Shows widget details', () => {
  const widgets = [{name: 'red', id: 1}, {name: 'blue', id: 2}]
  const wrapper = mount(<App />)
  wrapper.setState({widgets})
  expect(wrapper.find('.widget-details').exists()).toBeFalsy()

  wrapper.find('#show-1').simulate('click')
  expect(wrapper.find('.widget-details').exists()).toBeTruthy()
})

test('Shows delete widget link', () => {
  const widgets = [{name: 'red', id: 1}, {name: 'blue', id: 2}]
  const wrapper = mount(<App />)
  wrapper.setState({widgets})

  expect(wrapper.find('.widget-list-item #delete-1').exists()).toBeTruthy()
})

test('Delete function called when delete link clicked', () => {
  const widgets = [{name: 'red', id: 1}, {name: 'blue', id: 2}]
  const wrapper = mount(<App />)
  const app = wrapper.instance()
  const spy = jest
    .spyOn(app, 'deleteWidget')
    .mockImplementation(() => {})
  wrapper.setState({widgets})

  wrapper.find('#delete-1').simulate('click')

  expect(spy).toHaveBeenCalled()
})

test('Show Edit Form function called when edit link clicked', () => {
  const widgets = [{name: 'red', id: 1}, {name: 'blue', id: 2}]
  const wrapper = mount(<App />)
  const app = wrapper.instance()
  const spy = jest
    .spyOn(app, 'showEditForm')
    .mockImplementation(() => {})
  wrapper.setState({widgets})

  wrapper.find('#edit-1').simulate('click')

  expect(spy).toHaveBeenCalled()
})
