function Modal({presentModal, beast}) {
    return (
        <div className="modalBox">
            <div onClick={() => (presentModal(null))} className="modal">
                <h2>{beast.title}</h2>
                <img src={beast.image_url} alt={beast.title} />
                <div>"I'm coming too.  Tim said I had to."</div>
            </div>
        </div>
    );
}

export default Modal;