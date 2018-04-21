import React from 'react'

import WidgetForm from './WidgetForm'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

import * as api from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      editedWidget: null,
      detailsVisible: false,
      addWidgetVisible: false,
      editWidgetVisible: false
    }
    this.renderWidgets = this.renderWidgets.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.deleteWidget = this.deleteWidget.bind(this)
    this.showEditForm = this.showEditForm.bind(this)
    this.showAddWidget = this.showAddWidget.bind(this)
    this.addWidget = this.addWidget.bind(this)
    this.hideAddWidget = this.hideAddWidget.bind(this)
    this.editWidget = this.editWidget.bind(this)
    this.hideEditWidget = this.hideEditWidget.bind(this)
    this.hideDetails = this.hideDetails.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
    api.getWidgets(this.renderWidgets)
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  hideAddWidget () {
    this.setState({addWidgetVisible: false})
  }

  hideEditWidget () {
    this.setState({editWidgetVisible: false})
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  deleteWidget (widget) {
    api.deleteWidget(widget, (error) => {
      (error) ? this.setState({error}) : this.refreshList()
    })
  }

  showEditForm (widget) {
    this.setState({
      editWidgetVisible: true,
      editedWidget: widget
    })
  }

  addWidget (widget) {
    api.appendWidget(widget, (error) => {
      error ? this.setState({error}) : this.refreshList()
    })
  }

  editWidget (widget) {
    api.updateWidget(widget, (error) => {
      error ? this.setState({error}) : this.refreshList()
      this.setState({editWidgetVisible: false})
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Widgets FTW!</h1>

        <WidgetList
          showDetails={this.showDetails}
          widgets={this.state.widgets}
          deleteWidget={this.deleteWidget}
          showEditForm={this.showEditForm}
        />

        <p><a id='show-widget-link' href='#'
          onClick={this.showAddWidget}>Add widget</a></p>

        {this.state.addWidgetVisible && <WidgetForm
          save={this.addWidget}
          cancel={this.hideAddWidget}
        />}

        {this.state.editWidgetVisible && <WidgetForm
          save={this.editWidget}
          cancel={this.hideEditWidget}
          widget={this.state.editedWidget}
        />}

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget} />}
      </div>
    )
  }
}
