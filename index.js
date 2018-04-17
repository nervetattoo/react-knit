import React from 'react'
import T from 'prop-types'

export const withTag = (tag = 'span', props = {}) => ({ item, index, last }) => {
  return React.createElement(tag, {
    ...props,
    children: item
  })
}

export const withSeparator = (separator = ', ') => ({ item, last }) => {
  return `${item}${ !last ? separator : '' }`
}

export const withOxfordComma = (word = 'and') => ({ item, index, last, length }) => {
  switch (true) {
    case last:
      return item
    case index === length - 2:
      return `${item}, ${word} `
    default:
      return `${item}, `
  }
}

export default class Knit extends React.Component {
  static propTypes = {
    render: T.func.isRequired,
    items: T.array.isRequired,
  }

  static defaultProps = {
    items: [],
    wrap: React.Fragment,
    render: withSeparator(),
  }

  render () {
    const { render, items } = this.props
    const Wrap = this.props.wrap
    const length = items.length
    return (
      <Wrap>
        {items.map((item, index) => render({
          item,
          index,
          length,
          last: index + 1 === length,
          first: index === 0,
        }))}
      </Wrap>
    )
  }
}
