import PropTypes from 'prop-types'

const TouchSpin = ({ handleNumberUp, handleNumberDown, quantity }) => {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleNumberDown}
        type="button"
        className="p-2 rounded-full border border-gray-400 self-baseline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <div className="">{quantity}</div>
      <button
        onClick={handleNumberUp}
        type="button"
        className="p-2 rounded-full border border-gray-400 self-baseline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}

TouchSpin.propTypes = {
  handleNumberUp: PropTypes.func,
  handleNumberDown: PropTypes.func,
  quantity: PropTypes.number.isRequired
}

export default TouchSpin
