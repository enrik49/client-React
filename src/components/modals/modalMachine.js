import React, { useState } from 'react';

import Modal from 'react-modal';

const ModalMachine = ({machine}) => {
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


    const [modalIsOpen,setIsOpen] = useState(false);
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
    let method_req = 'POST';
    let id = '';
    
    if(machine.id){
      method_req = 'PUT';      
      id = '/' + machine.id;
    }

    let jsonMachine = JSON.stringify({ 
      'brand': brand,
      'model': model,
      'manufacturer': manufacturer,
      'price': price
    });

    fetch('http://localhost:8000/api/machine'+id,{
      method: method_req,
      headers: {'Content-Type':'application/json'},
      body: jsonMachine
    })
    .then(()=> {
      window.location.reload();
    })
    .catch((error) => {
      console.error(error)
    })
  }
  
  let buttonType = "Update";
  if(typeof machine === 'undefined'){
    buttonType = "Create";
    machine = {
      brand: "",
      model:"",
      manufacturer:"",
      price:""
    }
    //setBrand(brand => );
    /*setModel(model => machine.model);
    setManufacturer(manufacturer => machine.manufacturer);
    setPrice(price => machine.price);*/
  }

  const [brand, setBrand] = useState(machine.brand);
  const [model, setModel] = useState(machine.model);
  const [manufacturer, setManufacturer] = useState(machine.manufacturer);
  const [price, setPrice] = useState(machine.price);

  function handleBrand(e){
    setBrand(brand => e.target.value);
  }

  function handleModel(e){
    setModel(model => e.target.value);
  }

  function handleManufacturer(e){
    setManufacturer(manufacturer => e.target.value);
  }

  function handlePrice(e){
    setPrice(price => e.target.value);
  }

    return (
        <div>
        <button onClick={openModal}>{buttonType} Machine</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{buttonType} machine</h2>
            <table>
              <tbody>
              <tr>
                <td>Brand: <input name="brand" value={brand} onChange={handleBrand}/></td>
              </tr>
              <tr>
              <td>Model: <input name="model" value={model} onChange={handleModel}/></td>
              </tr>
              <tr>
              <td>Manufacturer: <input name="manufacturer" value={manufacturer} onChange={handleManufacturer}/></td>
              </tr>
              <tr>
              <td>Price: <input name="price" value={price} onChange={handlePrice}/></td>
              </tr>
              </tbody>
            </table>
            <button onClick={sendRequest}>{buttonType}</button>
        </Modal>
      </div>
    )
  };
  
export default ModalMachine