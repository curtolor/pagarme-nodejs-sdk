/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateCancelSubscriptionRequest,
  createCancelSubscriptionRequestSchema,
} from '../models/createCancelSubscriptionRequest';
import {
  CreateDiscountRequest,
  createDiscountRequestSchema,
} from '../models/createDiscountRequest';
import {
  CreateIncrementRequest,
  createIncrementRequestSchema,
} from '../models/createIncrementRequest';
import {
  CreateSubscriptionItemRequest,
  createSubscriptionItemRequestSchema,
} from '../models/createSubscriptionItemRequest';
import {
  CreateSubscriptionRequest,
  createSubscriptionRequestSchema,
} from '../models/createSubscriptionRequest';
import {
  CreateUsageRequest,
  createUsageRequestSchema,
} from '../models/createUsageRequest';
import {
  GetDiscountResponse,
  getDiscountResponseSchema,
} from '../models/getDiscountResponse';
import {
  GetIncrementResponse,
  getIncrementResponseSchema,
} from '../models/getIncrementResponse';
import {
  GetPeriodResponse,
  getPeriodResponseSchema,
} from '../models/getPeriodResponse';
import {
  GetSubscriptionItemResponse,
  getSubscriptionItemResponseSchema,
} from '../models/getSubscriptionItemResponse';
import {
  GetSubscriptionResponse,
  getSubscriptionResponseSchema,
} from '../models/getSubscriptionResponse';
import {
  GetUsageReportResponse,
  getUsageReportResponseSchema,
} from '../models/getUsageReportResponse';
import {
  GetUsageResponse,
  getUsageResponseSchema,
} from '../models/getUsageResponse';
import {
  ListCyclesResponse,
  listCyclesResponseSchema,
} from '../models/listCyclesResponse';
import {
  ListDiscountsResponse,
  listDiscountsResponseSchema,
} from '../models/listDiscountsResponse';
import {
  ListIncrementsResponse,
  listIncrementsResponseSchema,
} from '../models/listIncrementsResponse';
import {
  ListSubscriptionItemsResponse,
  listSubscriptionItemsResponseSchema,
} from '../models/listSubscriptionItemsResponse';
import {
  ListSubscriptionsResponse,
  listSubscriptionsResponseSchema,
} from '../models/listSubscriptionsResponse';
import {
  ListUsagesResponse,
  listUsagesResponseSchema,
} from '../models/listUsagesResponse';
import {
  UpdateCurrentCycleEndDateRequest,
  updateCurrentCycleEndDateRequestSchema,
} from '../models/updateCurrentCycleEndDateRequest';
import {
  UpdateCurrentCycleStatusRequest,
  updateCurrentCycleStatusRequestSchema,
} from '../models/updateCurrentCycleStatusRequest';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest';
import {
  UpdateSubscriptionAffiliationIdRequest,
  updateSubscriptionAffiliationIdRequestSchema,
} from '../models/updateSubscriptionAffiliationIdRequest';
import {
  UpdateSubscriptionBillingDateRequest,
  updateSubscriptionBillingDateRequestSchema,
} from '../models/updateSubscriptionBillingDateRequest';
import {
  UpdateSubscriptionCardRequest,
  updateSubscriptionCardRequestSchema,
} from '../models/updateSubscriptionCardRequest';
import {
  UpdateSubscriptionDueDaysRequest,
  updateSubscriptionDueDaysRequestSchema,
} from '../models/updateSubscriptionDueDaysRequest';
import {
  UpdateSubscriptionItemRequest,
  updateSubscriptionItemRequestSchema,
} from '../models/updateSubscriptionItemRequest';
import {
  UpdateSubscriptionMinimumPriceRequest,
  updateSubscriptionMinimumPriceRequestSchema,
} from '../models/updateSubscriptionMinimumPriceRequest';
import {
  UpdateSubscriptionPaymentMethodRequest,
  updateSubscriptionPaymentMethodRequestSchema,
} from '../models/updateSubscriptionPaymentMethodRequest';
import {
  UpdateSubscriptionSplitRequest,
  updateSubscriptionSplitRequestSchema,
} from '../models/updateSubscriptionSplitRequest';
import {
  UpdateSubscriptionStartAtRequest,
  updateSubscriptionStartAtRequestSchema,
} from '../models/updateSubscriptionStartAtRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SubscriptionsController extends BaseController {
  /**
   * @param subscriptionId
   * @param idempotencyKey
   * @return Response from the API call
   */
  async renewSubscription(
    subscriptionId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPeriodResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/cycles`;
    return req.callAsJson(getPeriodResponseSchema, requestOptions);
  }

  /**
   * Deletes a discount
   *
   * @param subscriptionId  Subscription id
   * @param discountId      Discount Id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteDiscount(
    subscriptionId: string,
    discountId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetDiscountResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      discountId: [discountId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/discounts/${mapped.discountId}`;
    return req.callAsJson(getDiscountResponseSchema, requestOptions);
  }

  /**
   * Gets all subscriptions
   *
   * @param page               Page number
   * @param size               Page size
   * @param code               Filter for subscription's code
   * @param billingType        Filter for subscription's billing type
   * @param customerId         Filter for subscription's customer id
   * @param planId             Filter for subscription's plan id
   * @param cardId             Filter for subscription's card id
   * @param status             Filter for subscription's status
   * @param nextBillingSince   Filter for subscription's next billing date start range
   * @param nextBillingUntil   Filter for subscription's next billing date end range
   * @param createdSince       Filter for subscription's creation date start range
   * @param createdUntil       Filter for subscriptions creation date end range
   * @return Response from the API call
   */
  async getSubscriptions(
    page?: number,
    size?: number,
    code?: string,
    billingType?: string,
    customerId?: string,
    planId?: string,
    cardId?: string,
    status?: string,
    nextBillingSince?: string,
    nextBillingUntil?: string,
    createdSince?: string,
    createdUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSubscriptionsResponse>> {
    const req = this.createRequest('GET', '/subscriptions');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      size: [size, optional(number())],
      code: [code, optional(string())],
      billingType: [billingType, optional(string())],
      customerId: [customerId, optional(string())],
      planId: [planId, optional(string())],
      cardId: [cardId, optional(string())],
      status: [status, optional(string())],
      nextBillingSince: [nextBillingSince, optional(string())],
      nextBillingUntil: [nextBillingUntil, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('code', mapped.code);
    req.query('billing_type', mapped.billingType);
    req.query('customer_id', mapped.customerId);
    req.query('plan_id', mapped.planId);
    req.query('card_id', mapped.cardId);
    req.query('status', mapped.status);
    req.query('next_billing_since', mapped.nextBillingSince);
    req.query('next_billing_until', mapped.nextBillingUntil);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    return req.callAsJson(listSubscriptionsResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  The subscription id
   * @param discountId
   * @return Response from the API call
   */
  async getDiscountById(
    subscriptionId: string,
    discountId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetDiscountResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      discountId: [discountId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/discounts/${mapped.discountId}`;
    return req.callAsJson(getDiscountResponseSchema, requestOptions);
  }

  /**
   * Creates a new subscription
   *
   * @param body            Request for creating a subscription
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createSubscription(
    body: CreateSubscriptionRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('POST', '/subscriptions');
    const mapped = req.prepareArgs({
      body: [body, createSubscriptionRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.body);
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  The subscription Id
   * @param incrementId     The increment Id
   * @return Response from the API call
   */
  async getIncrementById(
    subscriptionId: string,
    incrementId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetIncrementResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      incrementId: [incrementId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/increments/${mapped.incrementId}`;
    return req.callAsJson(getIncrementResponseSchema, requestOptions);
  }

  /**
   * Updates the metadata from a subscription
   *
   * @param subscriptionId  The subscription id
   * @param request         Request for updating the subscrption metadata
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionMetadata(
    subscriptionId: string,
    request: UpdateMetadataRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateMetadataRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/Subscriptions/${mapped.subscriptionId}/metadata`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Deletes a increment
   *
   * @param subscriptionId  Subscription id
   * @param incrementId     Increment id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteIncrement(
    subscriptionId: string,
    incrementId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetIncrementResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      incrementId: [incrementId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/increments/${mapped.incrementId}`;
    return req.callAsJson(getIncrementResponseSchema, requestOptions);
  }

  /**
   * Gets a subscription
   *
   * @param subscriptionId  Subscription id
   * @return Response from the API call
   */
  async getSubscription(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId
   * @param request         Request for updating the end date of the
   *                                                                   current signature cycle
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateLatestPeriodEndAt(
    subscriptionId: string,
    request: UpdateCurrentCycleEndDateRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateCurrentCycleEndDateRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/periods/latest/end-at`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  Subscription Id
   * @param request         Request for updating the end date of the
   *                                                                  subscription current status
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateCurrentCycleStatus(
    subscriptionId: string,
    request: UpdateCurrentCycleStatusRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateCurrentCycleStatusRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/cycle-status`;
    return req.call(requestOptions);
  }

  /**
   * Get Subscription Items
   *
   * @param subscriptionId  The subscription id
   * @param page            Page number
   * @param size            Page size
   * @param name            The item name
   * @param code            Identification code in the client system
   * @param status          The item statis
   * @param description     The item description
   * @param createdSince    Filter for item's creation date start range
   * @param createdUntil    Filter for item's creation date end range
   * @return Response from the API call
   */
  async getSubscriptionItems(
    subscriptionId: string,
    page?: number,
    size?: number,
    name?: string,
    code?: string,
    status?: string,
    description?: string,
    createdSince?: string,
    createdUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListSubscriptionItemsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
      name: [name, optional(string())],
      code: [code, optional(string())],
      status: [status, optional(string())],
      description: [description, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('name', mapped.name);
    req.query('code', mapped.code);
    req.query('status', mapped.status);
    req.query('description', mapped.description);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items`;
    return req.callAsJson(listSubscriptionItemsResponseSchema, requestOptions);
  }

  /**
   * Get Subscription Item
   *
   * @param subscriptionId  Subscription Id
   * @param itemId          Item id
   * @return Response from the API call
   */
  async getSubscriptionItem(
    subscriptionId: string,
    itemId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionItemResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      itemId: [itemId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items/${mapped.itemId}`;
    return req.callAsJson(getSubscriptionItemResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId
   * @param request         Request for updating a subscription
   *                                                                         affiliation id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionAffiliationId(
    subscriptionId: string,
    request: UpdateSubscriptionAffiliationIdRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateSubscriptionAffiliationIdRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/gateway-affiliation-id`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  The subscription id
   * @param page            Page number
   * @param size            Page size
   * @return Response from the API call
   */
  async getDiscounts(
    subscriptionId: string,
    page: number,
    size: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListDiscountsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      page: [page, number()],
      size: [size, number()],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/discounts/`;
    return req.callAsJson(listDiscountsResponseSchema, requestOptions);
  }

  /**
   * Updates a subscription item
   *
   * @param subscriptionId  Subscription Id
   * @param itemId          Item id
   * @param body            Request for updating a subscription item
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionItem(
    subscriptionId: string,
    itemId: string,
    body: UpdateSubscriptionItemRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionItemResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      itemId: [itemId, string()],
      body: [body, updateSubscriptionItemRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items/${mapped.itemId}`;
    return req.callAsJson(getSubscriptionItemResponseSchema, requestOptions);
  }

  /**
   * Creates a new Subscription item
   *
   * @param subscriptionId  Subscription id
   * @param request         Request for creating a subscription item
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createSubscriptionItem(
    subscriptionId: string,
    request: CreateSubscriptionItemRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionItemResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, createSubscriptionItemRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items`;
    return req.callAsJson(getSubscriptionItemResponseSchema, requestOptions);
  }

  /**
   * Lists all usages from a subscription item
   *
   * @param subscriptionId  The subscription id
   * @param itemId          The subscription item id
   * @param page            Page number
   * @param size            Page size
   * @param code            Identification code in the client system
   * @param group           Identification group in the client system
   * @param usedSince
   * @param usedUntil
   * @return Response from the API call
   */
  async getUsages(
    subscriptionId: string,
    itemId: string,
    page?: number,
    size?: number,
    code?: string,
    group?: string,
    usedSince?: string,
    usedUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListUsagesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      itemId: [itemId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
      code: [code, optional(string())],
      group: [group, optional(string())],
      usedSince: [usedSince, optional(string())],
      usedUntil: [usedUntil, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('code', mapped.code);
    req.query('group', mapped.group);
    req.query('used_since', mapped.usedSince);
    req.query('used_until', mapped.usedUntil);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items/${mapped.itemId}/usages`;
    return req.callAsJson(listUsagesResponseSchema, requestOptions);
  }

  /**
   * Atualização do valor mínimo da assinatura
   *
   * @param subscriptionId  Subscription Id
   * @param request         Request da requisição com o valor mínimo
   *                                                                        que será configurado
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionMiniumPrice(
    subscriptionId: string,
    request: UpdateSubscriptionMinimumPriceRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateSubscriptionMinimumPriceRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/minimum_price`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  The subscription id
   * @param cycleId
   * @return Response from the API call
   */
  async getSubscriptionCycleById(
    subscriptionId: string,
    cycleId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPeriodResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      cycleId: [cycleId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/cycles/${mapped.cycleId}`;
    return req.callAsJson(getPeriodResponseSchema, requestOptions);
  }

  /**
   * Create Usage
   *
   * @param subscriptionId  Subscription id
   * @param itemId          Item id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createAnUsage(
    subscriptionId: string,
    itemId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetUsageResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      itemId: [itemId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items/${mapped.itemId}/usages`;
    return req.callAsJson(getUsageResponseSchema, requestOptions);
  }

  /**
   * Cancels a subscription
   *
   * @param subscriptionId  Subscription id
   * @param request         Request for cancelling a subscription
   * @param idempotencyKey
   * @return Response from the API call
   */
  async cancelSubscription(
    subscriptionId: string,
    request?: CreateCancelSubscriptionRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, optional(createCancelSubscriptionRequestSchema)],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Deletes a subscription item
   *
   * @param subscriptionId       Subscription id
   * @param subscriptionItemId   Subscription item id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteSubscriptionItem(
    subscriptionId: string,
    subscriptionItemId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionItemResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      subscriptionItemId: [subscriptionItemId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items/${mapped.subscriptionItemId}`;
    return req.callAsJson(getSubscriptionItemResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  The subscription id
   * @param page            Page number
   * @param size            Page size
   * @return Response from the API call
   */
  async getIncrements(
    subscriptionId: string,
    page?: number,
    size?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListIncrementsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/increments/`;
    return req.callAsJson(listIncrementsResponseSchema, requestOptions);
  }

  /**
   * Updates the boleto due days from a subscription
   *
   * @param subscriptionId  Subscription Id
   * @param request
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionDueDays(
    subscriptionId: string,
    request: UpdateSubscriptionDueDaysRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateSubscriptionDueDaysRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/boleto-due-days`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Updates the credit card from a subscription
   *
   * @param subscriptionId  Subscription id
   * @param request         Request for updating a card
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionCard(
    subscriptionId: string,
    request: UpdateSubscriptionCardRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateSubscriptionCardRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/card`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Deletes a usage
   *
   * @param subscriptionId  The subscription id
   * @param itemId          The subscription item id
   * @param usageId         The usage id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteUsage(
    subscriptionId: string,
    itemId: string,
    usageId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetUsageResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      itemId: [itemId, string()],
      usageId: [usageId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items/${mapped.itemId}/usages/${mapped.usageId}`;
    return req.callAsJson(getUsageResponseSchema, requestOptions);
  }

  /**
   * Creates a discount
   *
   * @param subscriptionId  Subscription id
   * @param request         Request for creating a discount
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createDiscount(
    subscriptionId: string,
    request: CreateDiscountRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetDiscountResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, createDiscountRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/discounts`;
    return req.callAsJson(getDiscountResponseSchema, requestOptions);
  }

  /**
   * Updates the payment method from a subscription
   *
   * @param subscriptionId  Subscription id
   * @param request         Request for updating the paymentmethod
   *                                                                         from a subscription
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionPaymentMethod(
    subscriptionId: string,
    request: UpdateSubscriptionPaymentMethodRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateSubscriptionPaymentMethodRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/payment-method`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Creates a increment
   *
   * @param subscriptionId  Subscription id
   * @param request         Request for creating a increment
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createIncrement(
    subscriptionId: string,
    request: CreateIncrementRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetIncrementResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, createIncrementRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/increments`;
    return req.callAsJson(getIncrementResponseSchema, requestOptions);
  }

  /**
   * Creates a usage
   *
   * @param subscriptionId  Subscription Id
   * @param itemId          Item id
   * @param body            Request for creating a usage
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createUsage(
    subscriptionId: string,
    itemId: string,
    body: CreateUsageRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetUsageResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      itemId: [itemId, string()],
      body: [body, createUsageRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/items/${mapped.itemId}/usages`;
    return req.callAsJson(getUsageResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  Subscription Id
   * @param page            Page number
   * @param size            Page size
   * @return Response from the API call
   */
  async getSubscriptionCycles(
    subscriptionId: string,
    page: string,
    size: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCyclesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      page: [page, string()],
      size: [size, string()],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/cycles`;
    return req.callAsJson(listCyclesResponseSchema, requestOptions);
  }

  /**
   * Updates the billing date from a subscription
   *
   * @param subscriptionId  The subscription id
   * @param request         Request for updating the subscription
   *                                                                       billing date
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionBillingDate(
    subscriptionId: string,
    request: UpdateSubscriptionBillingDateRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateSubscriptionBillingDateRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/billing-date`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * Updates the start at date from a subscription
   *
   * @param subscriptionId  The subscription id
   * @param request         Request for updating the subscription start
   *                                                                   date
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateSubscriptionStartAt(
    subscriptionId: string,
    request: UpdateSubscriptionStartAtRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      request: [request, updateSubscriptionStartAtRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/start-at`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  The subscription Id
   * @param periodId        The period Id
   * @return Response from the API call
   */
  async getUsageReport(
    subscriptionId: string,
    periodId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetUsageReportResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      periodId: [periodId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/periods/${mapped.periodId}/usages/report`;
    return req.callAsJson(getUsageReportResponseSchema, requestOptions);
  }

  /**
   * @param id      Subscription's id
   * @param request
   * @return Response from the API call
   */
  async updateSplitSubscription(
    id: string,
    request: UpdateSubscriptionSplitRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetSubscriptionResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      id: [id, string()],
      request: [request, updateSubscriptionSplitRequestSchema],
    });
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.id}/split`;
    return req.callAsJson(getSubscriptionResponseSchema, requestOptions);
  }
}
