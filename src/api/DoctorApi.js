/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Doctor from '../model/Doctor';

/**
* Doctor service.
* @module api/DoctorApi
* @version 1.0.0
*/
export default class DoctorApi {

    /**
    * Constructs a new DoctorApi. 
    * @alias module:api/DoctorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createdoctor operation.
     * @callback module:api/DoctorApi~createdoctorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Doctor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Doctor} doctor data to be created
     * @param {module:api/DoctorApi~createdoctorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Doctor}
     */
    createdoctor(doctor, callback) {
      let postBody = doctor;
      // verify the required parameter 'doctor' is set
      if (doctor === undefined || doctor === null) {
        throw new Error("Missing the required parameter 'doctor' when calling createdoctor");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Doctor;
      return this.apiClient.callApi(
        '/doctor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletedoctor operation.
     * @callback module:api/DoctorApi~deletedoctorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} doctorId the Id parameter
     * @param {module:api/DoctorApi~deletedoctorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletedoctor(doctorId, callback) {
      let postBody = null;
      // verify the required parameter 'doctorId' is set
      if (doctorId === undefined || doctorId === null) {
        throw new Error("Missing the required parameter 'doctorId' when calling deletedoctor");
      }

      let pathParams = {
        'doctorId': doctorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/doctor/{doctorId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlldoctor operation.
     * @callback module:api/DoctorApi~getAlldoctorCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Doctor>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/DoctorApi~getAlldoctorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Doctor>}
     */
    getAlldoctor(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Doctor];
      return this.apiClient.callApi(
        '/doctor/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getdoctor operation.
     * @callback module:api/DoctorApi~getdoctorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Doctor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} doctorId the Id parameter
     * @param {module:api/DoctorApi~getdoctorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Doctor}
     */
    getdoctor(doctorId, callback) {
      let postBody = null;
      // verify the required parameter 'doctorId' is set
      if (doctorId === undefined || doctorId === null) {
        throw new Error("Missing the required parameter 'doctorId' when calling getdoctor");
      }

      let pathParams = {
        'doctorId': doctorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Doctor;
      return this.apiClient.callApi(
        '/doctor/{doctorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatedoctor operation.
     * @callback module:api/DoctorApi~updatedoctorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Doctor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} doctorId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Doctor} opts.doctor data to be updated
     * @param {module:api/DoctorApi~updatedoctorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Doctor}
     */
    updatedoctor(doctorId, opts, callback) {
      opts = opts || {};
      let postBody = opts['doctor'];
      // verify the required parameter 'doctorId' is set
      if (doctorId === undefined || doctorId === null) {
        throw new Error("Missing the required parameter 'doctorId' when calling updatedoctor");
      }

      let pathParams = {
        'doctorId': doctorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Doctor;
      return this.apiClient.callApi(
        '/doctor/{doctorId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
