import React from 'react'

export default function WidgetListItem (props) {
  const {widget, showDetails, deleteWidget, showEditForm} = props
  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' id={`show-${widget.id}`} onClick={() => showDetails(widget)}>details</a> {' | '}
      <a href='#' id={`delete-${widget.id}`} onClick={() => deleteWidget(widget)}>delete</a> {' | '}
      <a href='#' id={`edit-${widget.id}`} onClick={() => showEditForm(widget)}>edit</a>
    </div>
  )
}
