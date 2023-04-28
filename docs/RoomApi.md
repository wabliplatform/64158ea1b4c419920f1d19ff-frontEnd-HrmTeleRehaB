# TempApi.RoomApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createroom**](RoomApi.md#createroom) | **POST** /room | Creates the data
[**deleteroom**](RoomApi.md#deleteroom) | **DELETE** /room/{roomId} | Delete the element
[**getAllroom**](RoomApi.md#getAllroom) | **GET** /room/getAll | Get all the data
[**getroom**](RoomApi.md#getroom) | **GET** /room/{roomId} | Get the element
[**updateroom**](RoomApi.md#updateroom) | **PUT** /room/{roomId} | Updates the element



## createroom

> Room createroom(room)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RoomApi();
let room = new TempApi.Room(); // Room | data to be created
apiInstance.createroom(room, (error, data, response) => {
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
 **room** | [**Room**](Room.md)| data to be created | 

### Return type

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteroom

> deleteroom(roomId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RoomApi();
let roomId = "roomId_example"; // String | the Id parameter
apiInstance.deleteroom(roomId, (error, data, response) => {
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
 **roomId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllroom

> [Room] getAllroom()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RoomApi();
apiInstance.getAllroom((error, data, response) => {
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

[**[Room]**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getroom

> Room getroom(roomId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RoomApi();
let roomId = "roomId_example"; // String | the Id parameter
apiInstance.getroom(roomId, (error, data, response) => {
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
 **roomId** | **String**| the Id parameter | 

### Return type

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateroom

> Room updateroom(roomId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RoomApi();
let roomId = "roomId_example"; // String | the Id parameter
let opts = {
  'room': new TempApi.Room() // Room | data to be updated
};
apiInstance.updateroom(roomId, opts, (error, data, response) => {
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
 **roomId** | **String**| the Id parameter | 
 **room** | [**Room**](Room.md)| data to be updated | [optional] 

### Return type

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

