import test from 'ava'
import React, { Fragment } from 'react'

import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Knit, {
  withSeparator,
  withOxfordComma,
  withTag,
} from './index.js'

configure({ adapter: new Adapter() })

test('Should join with comma by default', t => {
  const result = shallow(<Knit items={['a','b','c']} />)

  t.is(result.contains(<Fragment>a, b, c</Fragment>), true)
})

test('Oxford comma', t => {
  const result = shallow(<Knit items={['a','b','c']} render={withOxfordComma()} />)

  t.is(result.contains(<Fragment>a, b, and c</Fragment>), true)
})

test('Custom renderer', t => {
  const result = shallow(
    <Knit
      items={['a','b','c']}
      render={({ item, index, last }) => (
        <p key={index}>{item}{ !last && ', ' }</p>
      )}
    />
  )

  t.is(result.contains(<Fragment>
    <p>a, </p>
    <p>b, </p>
    <p>c</p>
  </Fragment>), true)
})

test('Create withTag and classname', t => {
  const result = shallow(
    <Knit
      items={['Joe']}
      wrap="p"
      render={withTag('span', {className: 'user'})}
    />
  )

  t.is(result.contains(<p>
    <span className="user">Joe</span>
  </p>), true)
})
