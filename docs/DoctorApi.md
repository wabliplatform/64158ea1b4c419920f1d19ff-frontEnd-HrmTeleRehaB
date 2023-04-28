# TempApi.DoctorApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createdoctor**](DoctorApi.md#createdoctor) | **POST** /doctor | Creates the data
[**deletedoctor**](DoctorApi.md#deletedoctor) | **DELETE** /doctor/{doctorId} | Delete the element
[**getAlldoctor**](DoctorApi.md#getAlldoctor) | **GET** /doctor/getAll | Get all the data
[**getdoctor**](DoctorApi.md#getdoctor) | **GET** /doctor/{doctorId} | Get the element
[**updatedoctor**](DoctorApi.md#updatedoctor) | **PUT** /doctor/{doctorId} | Updates the element



## createdoctor

> Doctor createdoctor(doctor)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DoctorApi();
let doctor = new TempApi.Doctor(); // Doctor | data to be created
apiInstance.createdoctor(doctor, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doctor** | [**Doctor**](Doctor.md)| data to be created | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletedoctor

> deletedoctor(doctorId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DoctorApi();
let doctorId = "doctorId_example"; // String | the Id parameter
apiInstance.deletedoctor(doctorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doctorId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlldoctor

> [Doctor] getAlldoctor()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DoctorApi();
apiInstance.getAlldoctor((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Doctor]**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getdoctor

> Doctor getdoctor(doctorId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DoctorApi();
let doctorId = "doctorId_example"; // String | the Id parameter
apiInstance.getdoctor(doctorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doctorId** | **String**| the Id parameter | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatedoctor

> Doctor updatedoctor(doctorId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DoctorApi();
let doctorId = "doctorId_example"; // String | the Id parameter
let opts = {
  'doctor': new TempApi.Doctor() // Doctor | data to be updated
};
apiInstance.updatedoctor(doctorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doctorId** | **String**| the Id parameter | 
 **doctor** | [**Doctor**](Doctor.md)| data to be updated | [optional] 

### Return type

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

