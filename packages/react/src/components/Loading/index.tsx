import { InsidePath, LoadingContainer, OutsideCircle } from './style'

interface Props {
  size?: boolean
}

export const Loading = ({ size }: Props) => {
  return (
    <LoadingContainer sizeHeight={size}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 57 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Property_1=4">
          <OutsideCircle
            cx="28.0308"
            cy="28.0616"
            r="24"
            stroke="#E0E0E0"
            strokeWidth="8"
          />
          <InsidePath
            d="M36.6707 5.67071C40.2042 7.03418 43.3649 9.21458 45.8943 12.0336C48.4237 14.8527 50.25 18.2303 51.2238 21.8904C52.1977 25.5505 52.2915 29.3891 51.4976 33.0924C50.7037 36.7958 49.0446 40.2586 46.6559 43.1978"
            stroke="#006B54"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </LoadingContainer>
  )
}
