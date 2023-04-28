# TempApi.PApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createp**](PApi.md#createp) | **POST** /p | Creates the data
[**deletep**](PApi.md#deletep) | **DELETE** /p/{pId} | Delete the element
[**getAllp**](PApi.md#getAllp) | **GET** /p/getAll | Get all the data
[**getp**](PApi.md#getp) | **GET** /p/{pId} | Get the element
[**updatep**](PApi.md#updatep) | **PUT** /p/{pId} | Updates the element



## createp

> P createp(P)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PApi();
let P = new TempApi.P(); // P | data to be created
apiInstance.createp(P, (error, data, response) => {
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
 **P** | [**P**](P.md)| data to be created | 

### Return type

[**P**](P.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletep

> deletep(pId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PApi();
let pId = "pId_example"; // String | the Id parameter
apiInstance.deletep(pId, (error, data, response) => {
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
 **pId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllp

> [P] getAllp()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PApi();
apiInstance.getAllp((error, data, response) => {
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

[**[P]**](P.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getp

> P getp(pId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PApi();
let pId = "pId_example"; // String | the Id parameter
apiInstance.getp(pId, (error, data, response) => {
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
 **pId** | **String**| the Id parameter | 

### Return type

[**P**](P.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatep

> P updatep(pId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PApi();
let pId = "pId_example"; // String | the Id parameter
let opts = {
  'P': new TempApi.P() // P | data to be updated
};
apiInstance.updatep(pId, opts, (error, data, response) => {
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
 **pId** | **String**| the Id parameter | 
 **P** | [**P**](P.md)| data to be updated | [optional] 

### Return type

[**P**](P.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

