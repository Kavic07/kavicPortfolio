// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

export default class Errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Errorboundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong, but surprisingly still works</h2>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
