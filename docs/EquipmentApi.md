# TempApi.EquipmentApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createequipment**](EquipmentApi.md#createequipment) | **POST** /equipment | Creates the data
[**deleteequipment**](EquipmentApi.md#deleteequipment) | **DELETE** /equipment/{equipmentId} | Delete the element
[**getAllequipment**](EquipmentApi.md#getAllequipment) | **GET** /equipment/getAll | Get all the data
[**getequipment**](EquipmentApi.md#getequipment) | **GET** /equipment/{equipmentId} | Get the element
[**updateequipment**](EquipmentApi.md#updateequipment) | **PUT** /equipment/{equipmentId} | Updates the element



## createequipment

> Equipment createequipment(equipment)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EquipmentApi();
let equipment = new TempApi.Equipment(); // Equipment | data to be created
apiInstance.createequipment(equipment, (error, data, response) => {
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
 **equipment** | [**Equipment**](Equipment.md)| data to be created | 

### Return type

[**Equipment**](Equipment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteequipment

> deleteequipment(equipmentId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EquipmentApi();
let equipmentId = "equipmentId_example"; // String | the Id parameter
apiInstance.deleteequipment(equipmentId, (error, data, response) => {
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
 **equipmentId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllequipment

> [Equipment] getAllequipment()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EquipmentApi();
apiInstance.getAllequipment((error, data, response) => {
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

[**[Equipment]**](Equipment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getequipment

> Equipment getequipment(equipmentId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EquipmentApi();
let equipmentId = "equipmentId_example"; // String | the Id parameter
apiInstance.getequipment(equipmentId, (error, data, response) => {
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
 **equipmentId** | **String**| the Id parameter | 

### Return type

[**Equipment**](Equipment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateequipment

> Equipment updateequipment(equipmentId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.EquipmentApi();
let equipmentId = "equipmentId_example"; // String | the Id parameter
let opts = {
  'equipment': new TempApi.Equipment() // Equipment | data to be updated
};
apiInstance.updateequipment(equipmentId, opts, (error, data, response) => {
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
 **equipmentId** | **String**| the Id parameter | 
 **equipment** | [**Equipment**](Equipment.md)| data to be updated | [optional] 

### Return type

[**Equipment**](Equipment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

