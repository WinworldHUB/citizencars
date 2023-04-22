import { useEffect } from 'react';

export const INPROGRESS_WORKING = 0;
export const INPROGRESS_SUCCESS = 1;
export const INPROGRESS_FAILED = 2;

const InProgress = ({ message = '', state = INPROGRESS_WORKING }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    var myModal = new bootstrap.Modal(document.getElementById('dlgInProgress'));
    if (message) myModal.show();
    else myModal.hide();
  }, [message]);

  const getInprogressImage = () => {
    switch (state) {
      case INPROGRESS_SUCCESS:
        return '/assets/img/loader.gif';

      case INPROGRESS_FAILED:
        return '/assets/img/loader.gif';

      default:
        return '/assets/img/loader.gif';
    }
  };

  const getInprogressAlt = () => {
    switch (state) {
      case INPROGRESS_SUCCESS:
        return 'completed with success';

      case INPROGRESS_FAILED:
        return 'completed with failure';

      default:
        return 'working...';
    }
  };

  return (
    <div
      className="modal fade"
      id="dlgInProgress"
      tabIndex="-1"
      aria-labelledby="InProgressLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {message && (
            <div className="modal-body d-flex align-items-center justify-content-center flex-column">
              <img src={getInprogressImage()} alt={getInprogressAlt()} />
              <label className="lead text-uppercase">{message}</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InProgress;
