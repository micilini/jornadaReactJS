import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    console.log(error);
    return (
        <p>Algo deu errado!</p>
    );
}

export { ErrorBoundary, ErrorFallback };