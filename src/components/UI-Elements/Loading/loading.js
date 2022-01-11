import React from 'react'
import { LockBody, ReleaseBody, Spinner, Picture } from './loading-styles'
const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  )
}

Loading.ReleaseBody = () => <ReleaseBody />

export default Loading
