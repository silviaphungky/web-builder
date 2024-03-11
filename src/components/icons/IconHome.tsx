const IconHome = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6585 9.70055L12.6585 3.57555C12.2815 3.24565 11.7185 3.24565 11.3415 3.57555L4.3415 9.70055C4.12448 9.89044 4 10.1648 4 10.4531V18.9994C4 19.5516 4.44772 19.9994 5 19.9994H9C9.55228 19.9994 10 19.5516 10 18.9994V14.9994C10 14.4471 10.4477 13.9994 11 13.9994H13C13.5523 13.9994 14 14.4471 14 14.9994V18.9994C14 19.5516 14.4477 19.9994 15 19.9994H19C19.5523 19.9994 20 19.5516 20 18.9994V10.4531C20 10.1648 19.8755 9.89044 19.6585 9.70055Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconHome
