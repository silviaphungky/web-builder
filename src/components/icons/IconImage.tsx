const IconImage = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20L20 20C20.5523 20 21 19.5523 21 19L21 7C21 6.44772 20.5523 6 20 6L3 6L3 19C3 19.5523 3.44772 20 4 20Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6L10.2929 4.29289C10.1054 4.10536 9.851 4 9.58579 4H4C3.44772 4 3 4.44772 3 5V6"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17.9997L8.22999 11.898C8.63274 11.4282 9.36128 11.4332 9.75746 11.9086L13.299 16.1585C13.6754 16.6102 14.3585 16.6412 14.7743 16.2254L16.21 14.7897C16.6314 14.3683 17.3256 14.4067 17.698 14.8721L21 18.9997"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="matrix(-1 0 0 1 16 9)"
        fill={color || '#A4AABA'}
      />
    </svg>
  )
}

export default IconImage
