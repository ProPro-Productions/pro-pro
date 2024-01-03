import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessageContainer from "./components/ErrorMessageContainer";

function fallbackRender({}) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return <ErrorMessageContainer />;
}

const ErrorBoundaryProPro = () => {
  return <ErrorBoundary fallbackRender={fallbackRender}></ErrorBoundary>;
};

export default ErrorBoundaryProPro;
