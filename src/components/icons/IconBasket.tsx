const IconBasket = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.42883 11.3578C3.20562 10.1301 4.14876 9 5.39657 9H18.6037C19.8515 9 20.7947 10.1301 20.5715 11.3578L19.2987 18.3578C19.1258 19.3087 18.2976 20 17.331 20H6.6693C5.70273 20 4.87447 19.3088 4.70156 18.3578L3.42883 11.3578Z"
        stroke={color || '#A4AABA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconBasket
