import { useEffect } from 'react';

const InProgress = ({ isShow = false, message = '' }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    var myModal = new bootstrap.Modal(document.getElementById('dlgInProgress'));
    if (isShow === true) myModal.show();
    else myModal.hide();
  }, [isShow]);

  return (
    <div
      class="modal fade"
      id="dlgInProgress"
      tabindex="-1"
      aria-labelledby="InProgressLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body d-flex align-items-center justify-content-center flex-column">
            <img
              src="/assets/img/loader-01.gif"
              alt="uploading..."
              style={{ width: '200px' }}
            />
            <label className="lead text-uppercase">{message}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgress;
