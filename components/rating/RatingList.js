import PropTypes from 'prop-types'
import RatingItem from './RatingItem'

const RatingList = ({ score }) => {
  const calculateScore = (i) => {
    let color = 'text-gray-400'

    if (i <= Math.round(score)) {
      color = 'text-yellow-500'
    }

    return color
  }

  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        return <RatingItem key={`star-${i}`} color={calculateScore(i + 1)} />
      })}
    </div>
  )
}

RatingList.propTypes = {
  score: PropTypes.number.isRequired
}

export default RatingList
