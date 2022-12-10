import React, { ReactNode, Component } from 'react'

import LayoutIndex from '../../View/Layout/Error/500/Index'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <LayoutIndex />
    }

    return this.props.children
  }
}

export default ErrorBoundary
