import '../errors/styles.scss';
function NotFound() {
  return (
    <div className="error-body text-center">
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <div>page not found</div>
      </div>
    </div>
  )
}

export default NotFound