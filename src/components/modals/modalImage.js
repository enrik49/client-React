import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalMachine = ({machine_id}) => {
    var subtitle;
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
 
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
 
  function closeModal(){
    setIsOpen(false);
  }

  function sendRequest(){
    let jsonImage = JSON.stringify({ 
      'type': type,
      'url': url,
      'id_machine': id
    });
    console.log(jsonImage);
    fetch('http://localhost:8000/api/image',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: jsonImage
    })
    .then(()=> {
      window.location.reload();
    })
    .catch((error) => {
      console.error(error)
    })
  }

  
  const [type, setType] = useState();
  const [url, setUrl] = useState();
  const [id, setMachine_ID] = useState(machine_id);

  function handleUrl(e){
    setUrl(url => e.target.value);
  }

  function handleType(e){
    setType(type => e.target.value);
  }
    return (
        <div>
        <button onClick={openModal}>Create Image</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 <h2 ref={_subtitle => (subtitle = _subtitle)}>Create Image</h2>
            <table>
              <tbody>
              <tr>
                <td>Url: <input name="url" onChange={handleUrl}/></td>
              </tr>
              </tbody>
            </table>
            Type: 
            <select onChange={handleType}>
                    <option value="">Select Type</option>
                    <option value="thumbnail">Thumbnail</option>
                    <option value="front_view">Front view</option>
                    <option value="lateral_view">Lateal view</option>
              </select><br/>
            <button onClick={sendRequest}>Create Image</button>
        </Modal>
      </div>
    )
  };
  
export default ModalMachine