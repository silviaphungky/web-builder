const IconCheckoutPage = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2C13.5803 3.73011 14.7296 5.78568 15.3812 8"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11H12.3333L12.5152 12.9091M12.5152 12.9091L12.8154 16.0618C12.9181 17.1406 13.8613 17.9413 14.9424 17.8676L20.7294 17.473C21.6661 17.4091 22.4323 16.7022 22.5713 15.7737L23 12.9091H12.5152Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 22C15.7761 22 16 21.7761 16 21.5C16 21.2239 15.7761 21 15.5 21C15.2239 21 15 21.2239 15 21.5C15 21.7761 15.2239 22 15.5 22Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 22C21.7761 22 22 21.7761 22 21.5C22 21.2239 21.7761 21 21.5 21C21.2239 21 21 21.2239 21 21.5C21 21.7761 21.2239 22 21.5 22Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconCheckoutPage
