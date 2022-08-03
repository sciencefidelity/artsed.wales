import { NextPage } from "next"

interface ErrorProps {
  statusCode: number
}

/**
 * Error: The Error page
 * @param statusCode - the status code of the error
 * @returns The JSX Code for the Error Page
 */
const Error: NextPage<ErrorProps> = ({ statusCode }: ErrorProps) => (
  <div>
    <h1>Error: {statusCode}</h1>
  </div>
)

Error.getInitialProps = ({ res }) => {
  const statusCode = res?.statusCode || 500

  return { statusCode }
}

export default Error
