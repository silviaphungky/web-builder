const IconLeadsPage = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#leads)">
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
          d="M15 20C15 18.8954 16.567 18 18.5 18C20.433 18 22 18.8954 22 20"
          stroke={color || '#A4AABA'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 16C23.1773 16.3366 24 17.1054 24 18"
          stroke={color || '#A4AABA'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16C13.8227 16.3366 13 17.1054 13 18"
          stroke={color || '#A4AABA'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13C17.6716 13 17 13.6716 17 14.5C17 15.3284 17.6716 16 18.5 16Z"
          stroke={color || '#A4AABA'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.4 14C22.7682 13.6853 23 13.2279 23 12.7188C23 11.7695 22.1941 11 21.2 11C20.739 11 20.3185 11.1655 20 11.4377"
          stroke={color || '#A4AABA'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6 14C14.2318 13.6853 14 13.2279 14 12.7188C14 11.7695 14.8059 11 15.8 11C16.261 11 16.6815 11.1655 17 11.4377"
          stroke={color || '#A4AABA'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="leads">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconLeadsPage
