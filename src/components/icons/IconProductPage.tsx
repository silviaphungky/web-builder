const IconProductPage = ({ color }: { color?: string }) => {
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
        d="M13 18.4631L15.615 15.1875C15.8164 14.9352 16.1806 14.9379 16.3787 15.1932L18.1495 17.4747C18.3377 17.7172 18.6793 17.7338 18.8872 17.5106L19.605 16.7399C19.8157 16.5136 20.1628 16.5343 20.349 16.7841L22 19"
        stroke={color || '#A4AABA'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14.5C19 14.2239 19.2239 14 19.5 14C19.7761 14 20 14.2239 20 14.5C20 14.7761 19.7761 15 19.5 15C19.2239 15 19 14.7761 19 14.5Z"
        stroke={color || '#A4AABA'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13C13 12.4477 13.4477 12 14 12H21C21.5523 12 22 12.4477 22 13V19C22 19.5523 21.5523 20 21 20H14C13.4477 20 13 19.5523 13 19V13Z"
        stroke={color || '#A4AABA'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconProductPage
