let apiDoctorApi = new TempApi.DoctorApi();import TempApi from '../src/index';document.getElementById('idkix').onclick = (event) => {
    event.preventDefault();
    let doctorId = window.location.pathname.replace('/UpdateDoctor/','');let doctor = new TempApi.Doctor();doctor['dName'] = document.querySelector("[annotationname = 'dName']").value;doctor['dSpecial'] = document.querySelector("[annotationname = 'dSpecial']").value;doctor['dAge'] = document.querySelector("[annotationname = 'dAge']").value;doctor['dGender'] = document.querySelector("[annotationname = 'dGender']").value;doctor['dLeave'] = document.querySelector("[annotationname = 'dLeave']").value; let opts = {doctor};apiDoctorApi.updatedoctor( doctorId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = dName]').value = response.body.query.dName ;document.querySelector('[annotationname = dSpecial]').value = response.body.query.dSpecial ;document.querySelector('[annotationname = dAge]').value = response.body.query.dAge ;document.querySelector('[annotationname = dGender]').value = response.body.query.dGender ;document.querySelector('[annotationname = dLeave]').value = response.body.query.dLeave ;{   location.href= '/Page2' ;}}});};document.getElementById('iwry7').onclick = (event) => {
    event.preventDefault();
    let doctorId = window.location.pathname.replace('/UpdateDoctor/','');
      if(doctorId === '/UpdateDoctor' || doctorId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iwry7")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            doctorId = value._id;
            parentId = key;
          }
        });
      }
    apiDoctorApi.deletedoctor( doctorId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Page2' ;}}});};window.onload = () => {let doctorId = window.location.pathname.replace('/UpdateDoctor/','');apiDoctorApi.getdoctor( doctorId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = dName]').value = response.body.query.dName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dSpecial]').value = response.body.query.dSpecial; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dAge]').value = response.body.query.dAge; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dGender]').value = response.body.query.dGender; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dLeave]').value = response.body.query.dLeave; } catch (e) { console.log(e) };}});};