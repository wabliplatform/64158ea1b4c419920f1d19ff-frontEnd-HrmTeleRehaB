let apiEquipmentApi = new TempApi.EquipmentApi();import TempApi from '../src/index';document.getElementById('idkix').onclick = (event) => {
    event.preventDefault();
    let equipmentId = window.location.pathname.replace('/updateEquipment/','');let equipment = new TempApi.Equipment();equipment['eqName'] = document.querySelector("[annotationname = 'eqName']").value;equipment['eqType'] = document.querySelector("[annotationname = 'eqType']").value;equipment['eqCost'] = document.querySelector("[annotationname = 'eqCost']").value;equipment['eqFix'] = document.querySelector("[annotationname = 'eqFix']").value; let opts = {equipment};apiEquipmentApi.updateequipment( equipmentId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = eqName]').value = response.body.query.eqName ;document.querySelector('[annotationname = eqType]').value = response.body.query.eqType ;document.querySelector('[annotationname = eqCost]').value = response.body.query.eqCost ;document.querySelector('[annotationname = eqFix]').value = response.body.query.eqFix ;{   location.href= '/Page2' ;}}});};document.getElementById('i3qem').onclick = (event) => {
    event.preventDefault();
    let equipmentId = window.location.pathname.replace('/updateEquipment/','');
      if(equipmentId === '/updateEquipment' || equipmentId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i3qem")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            equipmentId = value._id;
            parentId = key;
          }
        });
      }
    apiEquipmentApi.deleteequipment( equipmentId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};window.onload = () => {let equipmentId = window.location.pathname.replace('/updateEquipment/','');apiEquipmentApi.getequipment( equipmentId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = eqName]').value = response.body.query.eqName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = eqType]').value = response.body.query.eqType; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = eqCost]').value = response.body.query.eqCost; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = eqFix]').value = response.body.query.eqFix; } catch (e) { console.log(e) };}});};