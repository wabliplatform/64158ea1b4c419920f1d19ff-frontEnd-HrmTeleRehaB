let apiDoctorApi = new TempApi.DoctorApi();import TempApi from '../src/index';let apiRoomApi = new TempApi.RoomApi();let apiEquipmentApi = new TempApi.EquipmentApi();document.getElementById('irx98z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/AddDoctor' ;}};document.getElementById('is9up').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("is9up")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateDoctor/' + transitionId;}};document.getElementById('i3wrh').onclick = (event) => {
    event.preventDefault();
    let doctorId = window.location.pathname.replace('/Page2/','');
      if(doctorId === '/Page2' || doctorId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i3wrh")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            doctorId = value._id;
            parentId = key;
          }
        });
      }
    apiDoctorApi.deletedoctor( doctorId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i3wrh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/Page2/' + transitionId;}}});};document.getElementById('ijg0kt').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ijg0kt")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateDoctor/' + transitionId;}};document.getElementById('iwvwsn').onclick = (event) => {
    event.preventDefault();
    let doctorId = window.location.pathname.replace('/Page2/','');
      if(doctorId === '/Page2' || doctorId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iwvwsn")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            doctorId = value._id;
            parentId = key;
          }
        });
      }
    apiDoctorApi.deletedoctor( doctorId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('ixfnyh').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ixfnyh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateDoctor/' + transitionId;}};document.getElementById('ibfesn').onclick = (event) => {
    event.preventDefault();
    let doctorId = window.location.pathname.replace('/Page2/','');
      if(doctorId === '/Page2' || doctorId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ibfesn")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            doctorId = value._id;
            parentId = key;
          }
        });
      }
    apiDoctorApi.deletedoctor( doctorId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('it2g8l').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("it2g8l")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateDoctor/' + transitionId;}};document.getElementById('ihowb9').onclick = (event) => {
    event.preventDefault();
    let doctorId = window.location.pathname.replace('/Page2/','');
      if(doctorId === '/Page2' || doctorId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ihowb9")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            doctorId = value._id;
            parentId = key;
          }
        });
      }
    apiDoctorApi.deletedoctor( doctorId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('ifnofp').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ifnofp")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateDoctor/' + transitionId;}};document.getElementById('iyze7i').onclick = (event) => {
    event.preventDefault();
    let doctorId = window.location.pathname.replace('/Page2/','');
      if(doctorId === '/Page2' || doctorId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iyze7i")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            doctorId = value._id;
            parentId = key;
          }
        });
      }
    apiDoctorApi.deletedoctor( doctorId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('io2z9z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addRoom' ;}};document.getElementById('itg77g').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("itg77g")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateRoom/' + transitionId;}};document.getElementById('itoweo').onclick = (event) => {
    event.preventDefault();
    let roomId = window.location.pathname.replace('/Page2/','');
      if(roomId === '/Page2' || roomId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("itoweo")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            roomId = value._id;
            parentId = key;
          }
        });
      }
    apiRoomApi.deleteroom( roomId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('ibf7dl').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ibf7dl")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateRoom/' + transitionId;}};document.getElementById('ixktv2').onclick = (event) => {
    event.preventDefault();
    let roomId = window.location.pathname.replace('/Page2/','');
      if(roomId === '/Page2' || roomId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ixktv2")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            roomId = value._id;
            parentId = key;
          }
        });
      }
    apiRoomApi.deleteroom( roomId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('ifwqos').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ifwqos")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateRoom/' + transitionId;}};document.getElementById('i0eoqi').onclick = (event) => {
    event.preventDefault();
    let roomId = window.location.pathname.replace('/Page2/','');
      if(roomId === '/Page2' || roomId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i0eoqi")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            roomId = value._id;
            parentId = key;
          }
        });
      }
    apiRoomApi.deleteroom( roomId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('ifuvc1').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/updateRoom' ;}};document.getElementById('i9f29k').onclick = (event) => {
    event.preventDefault();
    let roomId = window.location.pathname.replace('/Page2/','');
      if(roomId === '/Page2' || roomId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i9f29k")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            roomId = value._id;
            parentId = key;
          }
        });
      }
    apiRoomApi.deleteroom( roomId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('igbrgk').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("igbrgk")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateRoom/' + transitionId;}};document.getElementById('ik3av2').onclick = (event) => {
    event.preventDefault();
    let roomId = window.location.pathname.replace('/Page2/','');
      if(roomId === '/Page2' || roomId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ik3av2")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            roomId = value._id;
            parentId = key;
          }
        });
      }
    apiRoomApi.deleteroom( roomId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('izyqyg').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/addEquipment' ;}};document.getElementById('iuynuo').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iuynuo")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateEquipment/' + transitionId;}};document.getElementById('iyv8cj').onclick = (event) => {
    event.preventDefault();
    let equipmentId = window.location.pathname.replace('/Page2/','');
      if(equipmentId === '/Page2' || equipmentId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iyv8cj")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            equipmentId = value._id;
            parentId = key;
          }
        });
      }
    apiEquipmentApi.deleteequipment( equipmentId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('i0km7x').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i0km7x")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateEquipment/' + transitionId;}};document.getElementById('i0trj6').onclick = (event) => {
    event.preventDefault();
    let equipmentId = window.location.pathname.replace('/Page2/','');
      if(equipmentId === '/Page2' || equipmentId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i0trj6")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            equipmentId = value._id;
            parentId = key;
          }
        });
      }
    apiEquipmentApi.deleteequipment( equipmentId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('il14w1').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("il14w1")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateEquipment/' + transitionId;}};document.getElementById('iqxjus').onclick = (event) => {
    event.preventDefault();
    let equipmentId = window.location.pathname.replace('/Page2/','');
      if(equipmentId === '/Page2' || equipmentId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iqxjus")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            equipmentId = value._id;
            parentId = key;
          }
        });
      }
    apiEquipmentApi.deleteequipment( equipmentId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('ixuldj').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ixuldj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateEquipment/' + transitionId;}};document.getElementById('ijz25j').onclick = (event) => {
    event.preventDefault();
    let equipmentId = window.location.pathname.replace('/Page2/','');
      if(equipmentId === '/Page2' || equipmentId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ijz25j")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            equipmentId = value._id;
            parentId = key;
          }
        });
      }
    apiEquipmentApi.deleteequipment( equipmentId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};document.getElementById('ikg1sa').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ikg1sa")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateEquipment/' + transitionId;}};document.getElementById('iird2g').onclick = (event) => {
    event.preventDefault();
    let equipmentId = window.location.pathname.replace('/Page2/','');
      if(equipmentId === '/Page2' || equipmentId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iird2g")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            equipmentId = value._id;
            parentId = key;
          }
        });
      }
    apiEquipmentApi.deleteequipment( equipmentId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};window.onload = () => {apiDoctorApi.getAlldoctor((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i5hn7").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'dName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'dName'){
        subDataElements[i].textContent = data[data.length -i -1].dName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'dGender']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dGender;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'dGender'){
        subDataElements[i].textContent = data[data.length -i -1].dGender;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'dSpecial']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dSpecial;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'dSpecial'){
        subDataElements[i].textContent = data[data.length -i -1].dSpecial;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'dAge']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dAge;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'dAge'){
        subDataElements[i].textContent = data[data.length -i -1].dAge;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'dLeave']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dLeave;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'dLeave'){
        subDataElements[i].textContent = data[data.length -i -1].dLeave;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiRoomApi.getAllroom((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iw4x6o").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'rName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'rName'){
        subDataElements[i].textContent = data[data.length -i -1].rName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'rFloor']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rFloor;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'rFloor'){
        subDataElements[i].textContent = data[data.length -i -1].rFloor;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'rAisle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rAisle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'rAisle'){
        subDataElements[i].textContent = data[data.length -i -1].rAisle;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'rEmpty']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rEmpty;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'rEmpty'){
        subDataElements[i].textContent = data[data.length -i -1].rEmpty;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiEquipmentApi.getAllequipment((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("itz4rs").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'eqName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'eqName'){
        subDataElements[i].textContent = data[data.length -i -1].eqName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'eqType']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqType;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'eqType'){
        subDataElements[i].textContent = data[data.length -i -1].eqType;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'eqCost']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqCost;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'eqCost'){
        subDataElements[i].textContent = data[data.length -i -1].eqCost;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'eqFix']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqFix;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'eqFix'){
        subDataElements[i].textContent = data[data.length -i -1].eqFix;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};