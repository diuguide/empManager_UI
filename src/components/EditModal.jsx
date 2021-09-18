import {Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ handleClose, show}) => {
    return(
        <Modal show={show} onHide={handleClose}>
       <Form>
           <Form.Group>
               <Form.Label>First Name</Form.Label>
               <Form.Control type="text" />
           </Form.Group>
           <Form.Group>
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" />
           </Form.Group><Form.Group>
               <Form.Label>Email</Form.Label>
               <Form.Control type="text" />
           </Form.Group>
       </Form>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default EditModal;