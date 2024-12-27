import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        content: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
      }}
    >
      <button onClick={onClose} style={{ marginBottom: "10px" }}>
        Close
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;