const IconQMark = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16Z"
        fill={color || '#A4AABA'}
      />
      <path
        d="M10.5858 8.11441C10.9754 7.72478 11.4858 7.52952 11.9965 7.52863C12.5095 7.52773 13.0228 7.72299 13.4142 8.11441C13.8047 8.50493 14 9.01678 14 9.52863C14 10.0405 13.8047 10.5523 13.4142 10.9428C13.0228 11.3343 12.5095 11.5295 11.9965 11.5286L12 12.5286"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconQMark
