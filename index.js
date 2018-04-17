import React from 'react'
import T from 'prop-types'

export function commas ({ item, last, separator }) {
  return <span>{item}{ !last && separator }</span>
}

export default class ReactStitch extends Component {
  static propTypes = {
    render: T.func.required,
    items: T.array.required,
    separator: T.string,
  }

  static defaultProps = {
    items: [],
    separator: ', ',
    render: commas,
  }

  render () {
    const { render, items, separator } = this.props
    const length = items.length
    return (
      <React.Fragment>
        {items.map((item, index) => render({
          item,
          index,
          separator,
          last: index + 1 === length,
          first: index === 0,
        }))}
      </React.Fragment>
    )
  }
}
