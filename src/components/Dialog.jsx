const Dialog = ({
  children,
  id,
  title,
  actionTitle,
  onAction,
  onCanceled,
  isShowClose = true,
}) => {
  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onCanceled}
            ></button>
          </div>
          <div class="modal-body">{children}</div>
          <div class="modal-footer d-flex justify-content-between">
            {isShowClose && (
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onCanceled}
              >
                Close
              </button>
            )}
            <button
              type="button"
              class="btn btn-primary"
              onClick={onAction}
              data-bs-dismiss="modal"
            >
              {actionTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
