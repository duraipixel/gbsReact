import '../errors/styles.scss';
function NotFound() {
  return (
    <div className="error-body text-center">
      <div class="number">404</div>
      <div class="text">
        <span>Ooops...</span>
        <div>page not found</div>
      </div>
    </div>
  )
}

export default NotFound