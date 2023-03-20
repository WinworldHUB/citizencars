const Footer = () => {
  return (
    <>
      <div className="container-fluid container-primary">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-3">
            <div className="d-flex justify-content-between">
              <span className="display-7 text-thin text-white">
                Follow us:{" "}
              </span>
              <button className="btn btn-outline-light rounded">
                <i class="fa-solid fa-envelope"></i>
              </button>
              <button className="btn btn-outline-light rounded">
                <i class="fa-brands fa-facebook"></i>
              </button>
              <button className="btn btn-outline-light rounded">
                <i class="fa-brands fa-instagram"></i>
              </button>
            </div>
          </div>
          <div className="col-md-5">&nbsp;</div>
          <div className="col-md-4 text-end">
            <div class="input-group rounded">
              <input
                type="text"
                class="form-control bg-grey"
                placeholder="Enter your email address"
              />
              <button
                class="btn btn-secondary btn-wide"
                type="button"
                id="button-addon2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content-area-fluid container-fluid">
        <table className="table-borderless">
          <tr>
            <th>Luxury Cars</th>
            <th>General</th>
            <th>Style</th>
            <th>Brands</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
          <tbody>
            <tr>
              <td>
                <a href="javascript;">Why Us</a>
                <br />
                <a href="javascript;">About Us</a>
                <br />
                <a href="javascript;">FAQs</a>
                <br />
                <a href="javascript;">Help</a>
                <br />
                <a href="javascript;">Contact</a>
                <br />
                <a href="javascript;">Wallpaper</a>
                <br />
                <a href="javascript;">Our Showroom</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Footer;
