const MyModal = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Open Modal
      </button>
      <div
        class="modal fade "
        data-bs-backdrop="static"
        tabindex="-1"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium nisi nunc, sit amet tincidunt ipsum faucibus
              vitae. Pellentesque eget odio tristique, mattis elit id. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              pretium nisi nunc, sit amet tincidunt ipsum faucibus vitae.
              Pellentesque eget odio tristique, mattis elit id. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
              nisi nunc, sit amet tincidunt ipsum faucibus vitae. Pellentesque
              eget odio tristique, mattis elit id. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum pretium nisi nunc, sit
              amet tincidunt ipsum faucibus vitae. Pellentesque eget odio
              tristique, mattis elit id. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum pretium nisi nunc, sit amet tincidunt
              ipsum faucibus vitae. Pellentesque eget odio tristique, mattis
              elit id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium nisi nunc, sit amet tincidunt ipsum faucibus
              vitae. Pellentesque eget odio tristique, mattis elit id. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              pretium nisi nunc, sit amet tincidunt ipsum faucibus vitae.
              Pellentesque eget odio tristique, mattis elit id.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-subtle"
                data-bs-dismiss="modal"
              >
                Secondary Action
              </button>
              <button type="button" class="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
