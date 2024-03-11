const IconBox = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 3L4 6.6V19.2C4 19.6774 4.1873 20.1352 4.5207 20.4728C4.8541 20.8104 5.30628 21 5.77778 21H18.2222C18.6937 21 19.1459 20.8104 19.4793 20.4728C19.8127 20.1352 20 19.6774 20 19.2V6.6L17.3333 3H6.66667Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H20"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconBox
