let apiDoctorApi = new TempApi.DoctorApi();import TempApi from '../src/index';let apiRoomApi = new TempApi.RoomApi();let apiEquipmentApi = new TempApi.EquipmentApi();document.getElementById('irx98z').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/AddDoctor' ;}};const onClickPaginationButtoni5hn7 = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
      if (
        pagination.children[i].classList.value.includes("active") === true
      ) {
        pagination.children[i].classList.remove("active");
      }
    }

    let numberOfFrontButtons =  findTypeOfPaginationi5hn7(pagination);
    pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");

  apiDoctorApi.getAlldoctor((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i5hn7").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else {
            subDataElements[index].style.display = "";
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dGender']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dGender;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dGender'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dGender;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dSpecial']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dSpecial;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dSpecial'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dSpecial;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dAge']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dAge;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dAge'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dAge;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dLeave']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dLeave;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dLeave'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dLeave;
        
      }
     } catch (e) { console.log(e) };
            map.set(subDataElements[i-(chunk-1) * subDataElements.length].getAttribute('id'), data[data.length-i-1])
        }
        
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    })
    }});}

    const findTypeOfPaginationi5hn7 = (pagination) => {

      let firstChild = pagination.children[0];
      let secondChild = pagination.children[1];

      if (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) &&
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 2;
      } else if  (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) ||
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 1;
      }
      else{
        return 0;
      }

    }
  

    const returnChunkIndexi5hn7 = (chunk, numberOfPages, cause) => {

      if(cause === '+'){
        if(chunk < numberOfPages){
          return chunk + 1;
        }
        else{
          return chunk;
        }
      }
      else if(cause === '-'){
        if(chunk > 2){
          return chunk - 1;
        }
        else{
          return 1;
        }
      }
    }
  document.getElementById('is9up').onclick = (event) => {
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
    {   location.href= '/addRoom' ;}};const onClickPaginationButtoniw4x6o = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
      if (
        pagination.children[i].classList.value.includes("active") === true
      ) {
        pagination.children[i].classList.remove("active");
      }
    }

    let numberOfFrontButtons =  findTypeOfPaginationiw4x6o(pagination);
    pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");

  apiRoomApi.getAllroom((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iw4x6o").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else {
            subDataElements[index].style.display = "";
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rFloor']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rFloor;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rFloor'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rFloor;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rAisle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rAisle;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rAisle'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rAisle;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rEmpty']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rEmpty;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rEmpty'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rEmpty;
        
      }
     } catch (e) { console.log(e) };
            map.set(subDataElements[i-(chunk-1) * subDataElements.length].getAttribute('id'), data[data.length-i-1])
        }
        
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    })
    }});}

    const findTypeOfPaginationiw4x6o = (pagination) => {

      let firstChild = pagination.children[0];
      let secondChild = pagination.children[1];

      if (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) &&
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 2;
      } else if  (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) ||
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 1;
      }
      else{
        return 0;
      }

    }
  

    const returnChunkIndexiw4x6o = (chunk, numberOfPages, cause) => {

      if(cause === '+'){
        if(chunk < numberOfPages){
          return chunk + 1;
        }
        else{
          return chunk;
        }
      }
      else if(cause === '-'){
        if(chunk > 2){
          return chunk - 1;
        }
        else{
          return 1;
        }
      }
    }
  document.getElementById('itg77g').onclick = (event) => {
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
    {   location.href= '/addEquipment' ;}};const onClickPaginationButtonitz4rs = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
      if (
        pagination.children[i].classList.value.includes("active") === true
      ) {
        pagination.children[i].classList.remove("active");
      }
    }

    let numberOfFrontButtons =  findTypeOfPaginationitz4rs(pagination);
    pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");

  apiEquipmentApi.getAllequipment((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("itz4rs").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else {
            subDataElements[index].style.display = "";
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqType']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqType;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqType'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqType;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqCost']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqCost;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqCost'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqCost;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqFix']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqFix;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqFix'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqFix;
        
      }
     } catch (e) { console.log(e) };
            map.set(subDataElements[i-(chunk-1) * subDataElements.length].getAttribute('id'), data[data.length-i-1])
        }
        
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    })
    }});}

    const findTypeOfPaginationitz4rs = (pagination) => {

      let firstChild = pagination.children[0];
      let secondChild = pagination.children[1];

      if (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) &&
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 2;
      } else if  (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) ||
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 1;
      }
      else{
        return 0;
      }

    }
  

    const returnChunkIndexitz4rs = (chunk, numberOfPages, cause) => {

      if(cause === '+'){
        if(chunk < numberOfPages){
          return chunk + 1;
        }
        else{
          return chunk;
        }
      }
      else if(cause === '-'){
        if(chunk > 2){
          return chunk - 1;
        }
        else{
          return 1;
        }
      }
    }
  document.getElementById('iuynuo').onclick = (event) => {
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
  );const map = new Map();let chunk = 1;  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dGender']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dGender;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dGender'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dGender;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dSpecial']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dSpecial;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dSpecial'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dSpecial;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dAge']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dAge;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dAge'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dAge;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dLeave']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dLeave;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dLeave'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dLeave;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
  let numberOfPages = Math.ceil(data.length/subDataElements.length);
  let pagination = document.getElementById("i5hn7").querySelector('[pagination-list="true"]');

    let paginationAttributes = [
      "pagination-first",
      "pagination-last",
      "pagination-previous",
      "pagination-next",
    ];

    for (let i = 0; i < pagination.children.length; ) {
      let foundAttr = false;

      paginationAttributes.forEach((attr) => {
        if (pagination.children[i].attributes.getNamedItem(attr) !== null) {
          foundAttr = true;
        }
      });
      if (foundAttr === false) {
        pagination.removeChild(pagination.children[i]);
      } else {
        i++;
      }
    }

    for (let i = 0; i < numberOfPages; i++) {
      let child = document.createElement("li");
      child.classList.add("page-item");
      if (i === numberOfPages - 1) {
        child.classList.add("active");
      }
      let insideChild = document.createElement("a");
      insideChild.classList.add("page-link");
      let textnode = document.createTextNode(numberOfPages - i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute("href", "#!");
      child.appendChild(insideChild);
      child.onclick = function () {
        if (chunk !== numberOfPages - i) {
          chunk = numberOfPages - i;
          onClickPaginationButtoni5hn7(chunk, pagination);
        }
      };

      let numberOfFrontButtons =  findTypeOfPaginationi5hn7(pagination);
      pagination.insertBefore(child, pagination.children[numberOfFrontButtons]);

    }

    for (let i = 0; i < pagination.children.length; i++) {
      let child = pagination.children[i];
      if ( child.getAttribute("pagination-first") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== 1){
            chunk = 1;
            onClickPaginationButtoni5hn7(1, pagination);
          }
        };
      }

      if ( child.getAttribute( "pagination-last" ) === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== numberOfPages){
            chunk = numberOfPages;
            onClickPaginationButtoni5hn7( numberOfPages, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-previous") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== returnChunkIndexi5hn7(chunk,numberOfPages,'-')){
            chunk = returnChunkIndexi5hn7(chunk,numberOfPages,'-');
            onClickPaginationButtoni5hn7(chunk, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-next") === "true" && numberOfPages > 0) {
        child.onclick = function () {
          if(chunk !== returnChunkIndexi5hn7(chunk,numberOfPages,'+')){
            chunk = returnChunkIndexi5hn7(chunk,numberOfPages,'+');
            onClickPaginationButtoni5hn7(chunk, pagination);
          }
        };
      }
    };
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiRoomApi.getAllroom((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iw4x6o").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();let chunk = 1;  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rFloor']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rFloor;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rFloor'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rFloor;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rAisle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rAisle;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rAisle'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rAisle;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'rEmpty']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].rEmpty;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'rEmpty'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].rEmpty;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
  let numberOfPages = Math.ceil(data.length/subDataElements.length);
  let pagination = document.getElementById("iw4x6o").querySelector('[pagination-list="true"]');

    let paginationAttributes = [
      "pagination-first",
      "pagination-last",
      "pagination-previous",
      "pagination-next",
    ];

    for (let i = 0; i < pagination.children.length; ) {
      let foundAttr = false;

      paginationAttributes.forEach((attr) => {
        if (pagination.children[i].attributes.getNamedItem(attr) !== null) {
          foundAttr = true;
        }
      });
      if (foundAttr === false) {
        pagination.removeChild(pagination.children[i]);
      } else {
        i++;
      }
    }

    for (let i = 0; i < numberOfPages; i++) {
      let child = document.createElement("li");
      child.classList.add("page-item");
      if (i === numberOfPages - 1) {
        child.classList.add("active");
      }
      let insideChild = document.createElement("a");
      insideChild.classList.add("page-link");
      let textnode = document.createTextNode(numberOfPages - i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute("href", "#!");
      child.appendChild(insideChild);
      child.onclick = function () {
        if (chunk !== numberOfPages - i) {
          chunk = numberOfPages - i;
          onClickPaginationButtoniw4x6o(chunk, pagination);
        }
      };

      let numberOfFrontButtons =  findTypeOfPaginationiw4x6o(pagination);
      pagination.insertBefore(child, pagination.children[numberOfFrontButtons]);

    }

    for (let i = 0; i < pagination.children.length; i++) {
      let child = pagination.children[i];
      if ( child.getAttribute("pagination-first") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== 1){
            chunk = 1;
            onClickPaginationButtoniw4x6o(1, pagination);
          }
        };
      }

      if ( child.getAttribute( "pagination-last" ) === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== numberOfPages){
            chunk = numberOfPages;
            onClickPaginationButtoniw4x6o( numberOfPages, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-previous") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== returnChunkIndexiw4x6o(chunk,numberOfPages,'-')){
            chunk = returnChunkIndexiw4x6o(chunk,numberOfPages,'-');
            onClickPaginationButtoniw4x6o(chunk, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-next") === "true" && numberOfPages > 0) {
        child.onclick = function () {
          if(chunk !== returnChunkIndexiw4x6o(chunk,numberOfPages,'+')){
            chunk = returnChunkIndexiw4x6o(chunk,numberOfPages,'+');
            onClickPaginationButtoniw4x6o(chunk, pagination);
          }
        };
      }
    };
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiEquipmentApi.getAllequipment((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("itz4rs").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();let chunk = 1;  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqType']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqType;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqType'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqType;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqCost']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqCost;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqCost'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqCost;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eqFix']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eqFix;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eqFix'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eqFix;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
  let numberOfPages = Math.ceil(data.length/subDataElements.length);
  let pagination = document.getElementById("itz4rs").querySelector('[pagination-list="true"]');

    let paginationAttributes = [
      "pagination-first",
      "pagination-last",
      "pagination-previous",
      "pagination-next",
    ];

    for (let i = 0; i < pagination.children.length; ) {
      let foundAttr = false;

      paginationAttributes.forEach((attr) => {
        if (pagination.children[i].attributes.getNamedItem(attr) !== null) {
          foundAttr = true;
        }
      });
      if (foundAttr === false) {
        pagination.removeChild(pagination.children[i]);
      } else {
        i++;
      }
    }

    for (let i = 0; i < numberOfPages; i++) {
      let child = document.createElement("li");
      child.classList.add("page-item");
      if (i === numberOfPages - 1) {
        child.classList.add("active");
      }
      let insideChild = document.createElement("a");
      insideChild.classList.add("page-link");
      let textnode = document.createTextNode(numberOfPages - i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute("href", "#!");
      child.appendChild(insideChild);
      child.onclick = function () {
        if (chunk !== numberOfPages - i) {
          chunk = numberOfPages - i;
          onClickPaginationButtonitz4rs(chunk, pagination);
        }
      };

      let numberOfFrontButtons =  findTypeOfPaginationitz4rs(pagination);
      pagination.insertBefore(child, pagination.children[numberOfFrontButtons]);

    }

    for (let i = 0; i < pagination.children.length; i++) {
      let child = pagination.children[i];
      if ( child.getAttribute("pagination-first") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== 1){
            chunk = 1;
            onClickPaginationButtonitz4rs(1, pagination);
          }
        };
      }

      if ( child.getAttribute( "pagination-last" ) === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== numberOfPages){
            chunk = numberOfPages;
            onClickPaginationButtonitz4rs( numberOfPages, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-previous") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== returnChunkIndexitz4rs(chunk,numberOfPages,'-')){
            chunk = returnChunkIndexitz4rs(chunk,numberOfPages,'-');
            onClickPaginationButtonitz4rs(chunk, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-next") === "true" && numberOfPages > 0) {
        child.onclick = function () {
          if(chunk !== returnChunkIndexitz4rs(chunk,numberOfPages,'+')){
            chunk = returnChunkIndexitz4rs(chunk,numberOfPages,'+');
            onClickPaginationButtonitz4rs(chunk, pagination);
          }
        };
      }
    };
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};