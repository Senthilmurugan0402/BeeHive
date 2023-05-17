export namespace APIData {
  export interface ProductCategories {
    product_category_description: string;
    product_category_id: number;
    product_category_image: string;
    product_category_link_fuel_type: boolean;
    product_category_link_model: boolean;
    product_category_name: string;
  }
  export interface ServiceCategories {
    service_category_description: string;
    service_category_id: number;
    service_category_image: string;
    service_category_name: string;
    service_category_icon: string;
  }

  export interface ProductPhotos {
    product_id: number;
    product_photo: string;
    product_photo_id: number;
  }
  export interface ServicePhotos {
    service_id: number;
    service_photo: string;
    service_photo_id: number;
  }

  export interface ServicePointPhotos {
    service_point_id: number;
    service_point_photo_id: number;
    sp_photo: string;
  }
  export interface SchemePhotos {
    scheme_id: number;
    scheme_photo: string;
    scheme_photo_id: number;
  }
  export interface SchemeProducts {
    product_category_id: number;
    product_category_name: string;
    product_id: number;
    product_name: string;
    scheme_product_id: number;
    scheme_product_quantity: string;
    product_base_selling_price: string;
  }
  export interface SchemeServices {
    scheme_service_id: number;
    scheme_service_quantity: string;
    service_category_id: number;
    service_category_name: string;
    service_id: number;
    service_name: string;
  }
  export interface ProductList {
    gst_tax_id: number;
    gst_tax_name: string;
    product_brand_id: number;
    product_brand_name: string;
    product_category_id: number;
    product_category_name: string;
    product_description: string;
    product_has_serial_number: boolean;
    product_hsn_code: string;
    product_id: number;
    product_mrp: string;
    product_name: string;
    product_base_selling_price: string;
    product_warranty_months: number;
    product_photos: ProductPhotos[];
  }

  export interface ItemReview {
    customer_app_user_id: number;
    item_ref_id: number;
    item_review_created_at: string;
    item_review_desc: string;
    item_review_id: number;
    item_review_rating: string;
    item_review_reply_datetime: string;
    item_review_reply_text: string;
    item_review_reply_user_id: number;
    item_review_updated_at: string;
    item_type: number;
    order_item_id: number;
    customer_app_user_name: string;
  }

  export interface ReviewRatings {
    five_star: 0;
    four_star: 1;
    one_star: 0;
    three_star: 0;
    total_reviews: 1;
    two_star: 0;
    reviews: ItemReview[];
  }
  export interface Product {
    available_product_serials: [];
    gst_tax_id: number;
    gst_tax_name: string;
    gst_tax_percentage: string;
    product_base_selling_price: string;
    product_category_id: number;
    product_category_name: string;
    product_description: string;
    product_has_serial_number: boolean;
    product_hsn_code: string;
    product_id: number;
    product_mrp: string;
    product_name: string;
    product_photos: ProductPhotos[];
    product_purchase_price: string;
    product_suppliers: [];
    product_vehicles: [];
    product_warranty_years: number;
    product_warranty_months: number;
    service_point_products: [];
    customer_wishlist_available: number;
    product_avg_rating: number;
    product_reviews: ReviewRatings;
    customer_cart_available: number;
    customer_cart_qty: number;
    product_brand_name: string;
    product_brand_image: string;
    product_brand_logo_small: string;
    product_brand_id: number;
    product_feature_types: FeatureTypes[];
    product_addl_info: productAddtionalInfo[];
    product_exchange_discount_amount: number;
    product_has_free_installation: number;
    product_fuel_saving_rating_image: string;
  }

  export interface FeatureTypes {
    feature_type_created_at: string;
    feature_type_icon: string;
    feature_type_id: number;
    feature_type_name: string;
    feature_type_updated_at: string;
    product_category_id: number;
  }

  export interface ServiceList {
    gst_tax_id: number;
    gst_tax_name: string;
    service_base_price: string;
    service_category_id: number;
    service_category_name: string;
    service_description: string;
    service_id: number;
    service_name: string;
    service_sac_code: string;
    service_status: number;
    service_photos: ServicePhotos[];
  }

  export interface ServicePointList {
    distance: number;
    service_point_address: string;
    service_point_city_id: number;
    service_point_city_name: string;
    service_point_contact2: string;
    service_point_contact3: string;
    service_point_contact_number: string;
    service_point_id: number;
    service_point_landmark: string;
    service_point_location_lat: string;
    service_point_location_lng: string;
    service_point_name: string;
    service_point_operation_type: number;
    service_point_owner_name: string;
    service_point_pincode: string;
    service_point_state_id: number;
    service_point_status: boolean;
    service_point_image: string;
    service_point_avg_rating: string;
    sp_working_day_message: string;
  }

  export interface ServicePointServices {
    service_category_id: number;
    service_category_name: string;
    service_id: number;
    service_name: string;
    service_point_id: number;
    sp_service_available_upto: string;
    sp_service_id: number;
    sp_service_limit_availability: boolean;
    sp_service_price: string;
    sp_service_status: boolean;
  }

  export interface ServicePointWorkTimes {
    service_point_id: number;
    sp_worktime_day: number;
    sp_worktime_end: string;
    sp_worktime_id: number;
    sp_worktime_start: string;
  }

  export interface ServicePoint {
    service_point_address: string;
    service_point_city_id: number;
    service_point_city_name: string;
    service_point_contact2: string;
    service_point_contact3: string;
    service_point_contact_number: string;
    service_point_id: number;
    service_point_landmark: string;
    service_point_location_lat: string;
    service_point_location_lng: string;
    distance: number;
    service_point_name: string;
    service_point_operation_type: number;
    service_point_owner_name: string;
    service_point_photos: ServicePointPhotos[];
    service_point_pincode: string;
    service_point_products: [];
    service_point_schemes: [];
    service_point_services: ServicePointServices[];
    service_point_state_id: number;
    service_point_state_name: string;
    service_point_status: number;
    service_point_worktimes: [];
    service_point_avg_rating: number;
    sp_working_day_message: string;
  }

  export interface serviceVehicles {
    service_id: number;
    service_vehicle_id: number;
    vehicle_category_id: number;
    vehicle_category_name: string;
  }

  export interface Service {
    gst_tax_id: number;
    customer_wishlist_available: number;
    service_avg_rating: string;
    service_category_id: number;
    service_category_name: string;
    service_description: string;
    service_id: number;
    service_name: string;
    service_icon: string;
    service_photos: ServicePhotos[];
    service_sac_code: string;
    service_vehicles: serviceVehicles[];
    service_base_price: string;
    service_reviews: ReviewRatings;
    customer_cart_available: number;
    customer_cart_qty: number;
    service_addl_info: serviceAddtionalInfo[];
  }

  export interface SchemeList {
    product_avg_rating: string;
    scheme_base_offer_price: string;
    scheme_description: string;
    scheme_id: number;
    scheme_name: string;
    scheme_status: number;
    scheme_type: string;
    scheme_usage_limit: number;
    scheme_valid_days: number;
  }

  export interface Scheme {
    scheme_base_offer_price: string;
    scheme_description: string;
    scheme_id: number;
    scheme_name: string;
    scheme_photos: SchemePhotos[];
    scheme_products: SchemeProducts[];
    scheme_services: SchemeServices[];
    customer_wishlist_available: number;
    scheme_reviews: ReviewRatings;
    scheme_status: number;
    scheme_type: string;
    scheme_usage_limit: string;
    scheme_valid_days: string;
    scheme_avg_rating: string;
    customer_cart_available: number;
    customer_cart_qty: number;
    products: string[];
    services: string[];
    scheme_addl_info: schemeAdditionalInfo[];
  }

  export interface TrendingItem {
    trending_item_id: number;
    trending_item_type: number;
    trending_item_ref_id: number;
    trending_item_ref_name: string;
    trending_item_photo: string;
    customer_wishlist_available: number;
    trending_item_price: string;
    customer_cart_available: number;
    customer_cart_qty: number;
  }

  export interface PopularProduct {
    popular_product_id: number;
    product_id: number;
    product_name: string;
    product_photo: string;
    product_base_selling_price: number;
    customer_wishlist_available: number;
    customer_cart_available: number;
    customer_cart_qty: number;
  }

  export interface RecommendedItem {
    recommended_item_id: number;
    recommended_item_type: number;
    recommended_item_ref_id: number;
    item_name: string;
    item_price: number;
    recommended_item_image: string;
    avg_rating: number;
    customer_wishlist_available: number;
    product_exchange_discount_amount: number;
    product_feature_types: FeatureTypes[];
    recommended_item_brand_logo_small: string;
    recommended_item_warranty_months: number;
    recommended_item_warranty_years: number;
    recommended_item_mrp: number;
    recommended_item_has_free_installation: number;
    customer_cart_available: number;
    customer_cart_qty: number;
  }

  export interface CouponCode {
    coupon_code: string;
    coupon_code_created_at: string;
    coupon_code_description: string;
    coupon_code_discount_type: number;
    coupon_code_discount_value: string;
    coupon_code_id: number;
    coupon_code_status: boolean;
    coupon_code_updated_at: string;
    coupon_code_usage_type: number;
    coupon_code_valid_from: string;
    coupon_code_valid_upto: string;
  }

  export interface FilterProductCategory {
    product_category_id: number;
    product_category_name: string;
  }
  export interface FilterServiceCategory {
    service_category_id: number;
    service_category_name: string;
  }

  export interface ProductBrand {
    product_brand_id: number;
    product_brand_name: string;
    product_brand_image: string;
  }

  export interface specialOffer {
    special_offer_id: number;
    special_offer_name: string;
  }

  export interface ProductFilter {
    filter_budgets: FilterBudgets[];
    budget_max: number;
    budget_min: number;
    filter_discounts: FilterDiscounts[];
    product_brands: ProductBrand[];
    product_categories: FilterProductCategory[];
    products: Product[];
    recommended_items: Product[];
    vehicle_brands: VehicleBrand[];
    vehicle_models: VehicleModels[];
    vehicle_categories: VehicleCategory[];
    total_products: number;
    special_offers: specialOffer[];
  }

  export interface FilterDiscounts {
    filter_discount_id: number;
    filter_discount_name: string;
    filter_discount_start: number;
  }

  export interface FilterBudgets {
    filter_budget_end: string;
    filter_budget_id: number;
    filter_budget_name: string;
    filter_budget_start: string;
  }

  export interface SchemeFilter {
    filter_budgets: FilterBudgets[];
    budget_max: number;
    budget_min: number;
    filter_discounts: FilterDiscounts[];
    schemes: Scheme[];
    recommended_items: Scheme[];
    total_schemes: number;
    vehicle_brands: VehicleBrand[];
    vehicle_categories: VehicleCategory[];
    vehicle_models: VehicleModels[];
    special_offers: specialOffer[];
  }

  export interface ServiceFilter {
    filter_budgets: FilterBudgets[];
    budget_max: number;
    budget_min: number;
    filter_discounts: FilterDiscounts[];
    services: Service[];
    recommended_items: Service[];
    total_services: number;
    vehicle_brands: VehicleBrand[];
    vehicle_categories: VehicleCategory[];
    vehicle_models: VehicleModels[];
    service_categories: FilterServiceCategory[];
    special_offers: specialOffer[];
  }

  export interface FilterParameters {
    servicePointId: number[];
    productCategoryId: number[];
    vehicleCategoryId: number[];
    productBrandId: number[];
    vehicleModelId: number[];
    vehicleBrandId: number[];
    budgetFrom: string;
    budgetTo: string;
    discountFrom: string;
    productStatus: boolean;
    sortType: string;
    searchText: string;
  }

  export interface CartItem {
    agreed_item_bill_to: number;
    agreed_item_id: number;
    agreed_item_price: number;
    cart_item_approval_required: number;
    cart_item_avg_rating: string;
    cart_item_exchange_discount_amount: number;
    cart_item_fuel_saving_rating: string;
    cart_item_fuel_saving_rating_image: string;
    cart_item_has_free_installation: number;
    cart_item_id: number;
    cart_item_image: string;
    cart_item_mrp: string;
    cart_item_name: string;
    cart_item_quantity: number;
    cart_item_ref_id: number;
    cart_item_selling_price: number;
    cart_item_tax_amount: number;
    cart_item_taxable_amount: number;
    cart_item_type: number;
    cart_item_warranty_months: number;
    cart_item_warranty_years: number;
    gst_tax_percentage: number;
  }

  export interface CartDetail {
    coupon_code_id: number;
    coupon_code_name: string;
    coupon_discount_price: number;
    total: number;
    total_gst: number;
    total_item: number;
    item_details: CartItem[];
    customer_reward_points_total: number;
    approval_required: boolean;
    advance_amount_available: number;
    advance_amount: string;
    pay_balance_amount: number;
    pay_balance_available: number;
    reward_to_take: string;
    payment_scheme: number;
  }
  export interface modelDetail {
    vehicle_brand_id: number;
    vehicle_brand_name: string;
    vehicle_category_id: number;
    vehicle_category_name: string;
    vehicle_model_id: number;
    vehicle_model_name: string;
    vehicle_model_status: number;
    vehicle_variant_created_at: null;
    vehicle_variant_name: string;
    vehicle_variant_status: number;

  }

  export interface WishListItems {
    customer_app_user_id: number;
    wishlist_item_id: number;
    wishlist_item_ref_id: number;
    wishlist_item_type: number;
    wishlist_item_type_category_name: string;
    wishlist_item_type_name: string;
    wishlist_item_mrp: string;
    wishlist_item_avg_rating: string;
    wishlist_item_photo: string;
    wishlist_item_base_selling_price: String;
    customer_cart_available: number;
  }

  export interface Wishlist {
    customer_wishlist_items: WishListItems[];
    total_count: number;
  }

  export interface Review {
    customer_app_user_id: number;
    customer_app_user_name: string;
    service_point_id: number;
    service_point_name: number;
    sp_review_desc: string;
    sp_review_id: number;
    sp_review_rating: string;
    sp_review_reply_datetime: string;
    sp_review_reply_text: string;
    sp_review_reply_user_id: number;
    sp_review_updated_at: string;
  }

  export interface ServicePointReview {
    sp_reviews: Review[];
    sp_reviews_star: ServicePointReviewStar;
    total_count: number;
  }

  export interface ServicePointReviewStar {
    five_star: number;
    four_star: number;
    one_star: number;
    three_star: number;
    two_star: number;
  }

  export interface CustomerProfile {
    account_owner_company_name: string;
    account_owner_customer_id: number;
    account_owner_customer_first_name: string;
    city_id: number;
    customer_address: string;
    customer_address_2: string;
    customer_address_city_id: number;
    customer_address_city_name: string;
    customer_address_landmark: string;
    customer_address_pincode: string;
    customer_address_state_id: number;
    customer_address_state_name: string;
    customer_comm_address: string;
    customer_comm_address_2: string;
    customer_comm_address_city_id: number;
    customer_comm_address_city_name: string;
    customer_comm_address_is_same: number;
    customer_comm_address_landmark: string;
    customer_comm_address_pincode: string;
    customer_comm_address_state_id: number;
    customer_comm_address_state_name: string;
    customer_company_designation: string;
    customer_company_doj: string;
    customer_company_name: string;
    customer_dob: any;
    customer_email: string;
    customer_gender: number;
    customer_gstin: string;
    customer_id: number;
    customer_industry_type_id: number;
    customer_industry_type_name: string;
    customer_mobile: number;
    customer_first_name: string;
    customer_last_name: string;
    customer_payment_scheme: string;
    customer_profile_image: string;
    customer_reward_points_total: number;
    customer_status: number;
    customer_type: number;
    customer_driver_image: string;
    customer_driver_license_image: string;
    customer_driver_license_number: string;
    customer_driver_mobile: string;
    customer_driver_name: string;
    customer_driver_status: number;
    customer_driver_gender: number;
    Driver_profile_image: string;
    customer_default_billing_address_id: number;
    customer_default_shipping_address_id: number;
    account_owner_customer_email: string;
    account_owner_customer_mobile: string;
    account_owner_customer_last_name: string;
  }

  export interface Order extends DashboardOrder {
    customer_app_user_id: number;
    customer_appointment_id: number;
    customer_appointment_item_feedback_id: number;
    customer_id: number;
    customer_vehicle_id: number;
    no_of_items: number;
    order_coupon_code_id: number;
    order_coupon_discount_amt: string;
    order_created_at: string;
    order_current_status_id: number;
    order_datetime: string;
    order_hash: string;
    order_id: number;
    order_invoice_number: string;
    order_number: string;
    order_original_amount: string;
    order_status: number;
    order_tax_amount: string;
    order_taxable_amount: string;
    order_total_amount: string;
    order_updated_at: string;
    order_vehicle_number_photo: string;
    service_point_id: number;
    user_id: number;
    order_image: string;
    order_items: OrderItems[];
    pay_balance_available: number;
    balance_amount: string;
    paid_amount: number;
    pay_balance_amount: string;
    order_payment: number;
    order_billing_customer_app_user_id: number;
  }

  export interface OrdersList {
    orders: Order[];
    total_count: number;
  }

  export interface DashboardOrder {
    customer_first_name: string;
    service_point_name: string;
    order_reward_amt: number;
    order_payments: OrderPayments[];
  }

  export interface CustomerAppoinmentStatus {
    customer_appointment_id: number;
    customer_appointment_status: number;
    customer_appointment_status_id: number;
    customer_appointment_status_remarks: string;
    customer_appointment_status_time: string;
  }

  export interface CustomerAppoinment {
    customer_appointment_contact: string;
    customer_appointment_created_at: string;
    customer_appointment_current_status_id: number;
    customer_appointment_start_slot_time: string;
    customer_appointment_end_slot_time: string;
    customer_appointment_id: number;
    customer_appointment_remarks: string;
    customer_appointment_serviced_user_id: number;
    customer_appointment_status: number;
    customer_appointment_updated_at: string;
    customer_vehicle_id: number;
    customer_vehicle_model: string;
    customer_vehicle_owner_name: string;
    customer_vehicle_regno: string;
    service_point_id: number;
    service_point_name: string;
    vehicle_category_id: number;
    vehicle_model_id: number;
    order_number: string;
    order_datetime: string;
    service_point_address: string;
    order_id: number;
    service_point_avg_rating: string;
    service_point_location_lat: string;
    service_point_location_lng: String;
    sp_review_id: number;
    sp_working_day_message: string;
    is_rescheduled_available: number;
    is_cancel_available: number;
  }

  export interface AppoinmentsList {
    customer_appointments: CustomerAppoinment[];
    total_count: number;
  }

  export interface OrderItems {
    avg_rating: string;
    order_id: number;
    order_item_cancel_reason: string;
    order_item_cancel_remarks: string;
    order_item_cancelled_quantity: number;
    order_item_cgst_amount: string;
    order_item_cgst_percent: string;
    order_item_franchise_commission: string;
    order_item_fulfilled_quantity: number;
    order_item_has_warranty: string;
    order_item_id: number;
    order_item_igst_amount: string;
    order_item_igst_percent: string;
    order_item_mrp: string;
    order_item_name: string;
    order_item_price: string;
    order_item_quantity: number;
    order_item_ref_id: number;
    order_item_refund_quantity: number;
    order_item_selling_price: string;
    order_item_sgst_amount: string;
    order_item_sgst_percent: string;
    order_item_tax_amount: string;
    order_item_taxable_amount: string;
    order_item_total_amount: string;
    order_item_type: number;
    order_item_warranty_upto: string;
    scheme_order_item_id: number;
    order_item_image: string;
    used_qty: number;
    order_item_approval_status: number;
    order_item_status: number;
    order_item_exchange_discount_amount: number;
    order_item_has_free_installation: number;
    order_item_is_exchange: number;
    remaining_qty: number;
    item_review_id: number;
    order_item_approved_by:string,
    order_item_approved_datetime:string
  }

  export interface OrderPayments {
    order_id: number;
    order_payment_amount: string;
    order_payment_created_at: string;
    order_payment_date: string;
    order_payment_id: number;
    order_payment_link: string;
    order_payment_link_id: number;
    order_payment_mode_id: number;
    order_payment_reference: string;
    order_payment_status: number;
    order_payment_updated_at: string;
    payment_mode_name: string;
  }

  export interface CustomerDetail {
    account_owner_customer_id: number;
    city_id: number;
    customer_address: string;
    customer_address_city_id: number;
    customer_address_landmark: string;
    customer_address_pincode: string;
    customer_comm_address: string;
    customer_comm_address_city_id: string;
    customer_comm_address_is_same: boolean;
    customer_comm_address_landmark: string;
    customer_comm_address_pincode: string;
    customer_company_designation: string;
    customer_company_doj: string;
    customer_company_name: string;
    customer_created_at: string;
    customer_dob: string;
    customer_email: string;
    customer_gender: number;
    customer_gstin: string;
    customer_id: number;
    customer_industry_type_id: number;
    customer_mobile: string;
    customer_name: string;
    customer_payment_scheme: number;
    customer_profile_image: string;
    customer_reward_points_total: string;
    customer_status: number;
    customer_type: number;
    customer_updated_at: string;
  }

  export interface CustomerVehicle {
    customer_id: number;
    customer_vehicle_category: string;
    customer_vehicle_chassis_no: string;
    customer_vehicle_class: string;
    customer_vehicle_color: string;
    customer_vehicle_created_at: string;
    customer_vehicle_cubic_capacity: string;
    customer_vehicle_fuel_type: string;
    customer_vehicle_id: number;
    customer_vehicle_make: string;
    customer_vehicle_model: string;
    customer_vehicle_no_of_cyl: number;
    customer_vehicle_no_of_tyres: number;
    customer_vehicle_owner_name: string;
    customer_vehicle_rc_father_name: string;
    customer_vehicle_rc_upto: string;
    customer_vehicle_reg_date: string;
    customer_vehicle_reg_location: string;
    customer_vehicle_regno: string;
    customer_vehicle_seating_cap: number;
    customer_vehicle_status: number;
    customer_vehicle_updated_at: string;
    customer_vehicle_wheelbase: number;
    fuel_type_id: number;
    fuel_type_name: string;
    vehicle_brand_id: number;
    vehicle_brand_name: string;
    vehicle_category_id: number;
    vehicle_category_name: string;
    vehicle_model_id: number;
    vehicle_model_name: string;
  }

  export interface OrderDetail {
    order_status: number;
    order_tax_amount: string;
    order_taxable_amount: string;
    order_total_amount: string;
    order_updated_at: string;
    order_vehicle_number_photo: string;
    service_point_id: number;
    user_id: string;
    customer_detail: CustomerDetail;
    customer_vehicle_detail: CustomerVehicle;
    order_number: string;
    order_original_amount: string;
    customer_app_user_id: number;
    customer_appointment_id: number;
    customer_id: number;
    customer_vehicle_id: number;
    order_coupon_code_id: number;
    order_coupon_discount_amt: string;
    order_created_at: string;
    order_current_status_id: number;
    order_datetime: string;
    order_hash: string;
    order_id: number;
    order_invoice_number: string;
    order_payments: OrderPayments[];
    order_items: OrderItems[];
    service_point_name: string;
    service_point_address: string;
    service_point_contact_number: string;
    balance_amount: string;
    customer_appointment: {
      customer_appointment_contact: string;
      customer_appointment_created_at: string;
      customer_appointment_current_status_id: number;
      customer_appointment_end_slot_time: string;
      customer_appointment_id: number;
      customer_appointment_remarks: string;
      customer_appointment_serviced_user_id: number;
      customer_appointment_start_slot_time: string;
      customer_appointment_status: number;
      customer_appointment_updated_at: string;
      customer_vehicle_id: number;
      service_point_id: number;
      service_point_name: string;
      service_point_address: string;
      service_point_avg_rating: String;
    };
    order_reward_amt: any;
    order_earned_reward_amt: string;
  }

  export interface customerVehicle {
    customer_id: number;
    customer_vehicle_category: string;
    customer_vehicle_chassis_no: string;
    customer_vehicle_class: string;
    customer_vehicle_color: string;
    customer_vehicle_cubic_capacity: string;
    customer_vehicle_fuel_type: string;
    customer_vehicle_id: number;
    customer_vehicle_make: string;
    customer_vehicle_model: string;
    customer_vehicle_no_of_cyl: number;
    customer_vehicle_no_of_tyres: number;
    customer_vehicle_owner_name: string;
    customer_vehicle_rc_father_name: string;
    customer_vehicle_rc_upto: string;
    customer_vehicle_reg_date: string;
    customer_vehicle_reg_location: string;
    customer_vehicle_regno: string;
    customer_vehicle_seating_cap: number;
    customer_vehicle_status: number;
    customer_vehicle_wheelbase: number;
    order_vehicle_reg_no: number;
    fuel_type_name: string;
    vehicle_brand_id: number;
    vehicle_brand_name: string;
    vehicle_category_name: string;
    vehicle_model_name: string;
    vehicle_variant_name: string;
    customer_vehicle_schemes: CustomerVehicleSchemes[];
    customer_drivers: CustomerDriver[];
    customer_vehicle_driver_id: number;
    order_item_allocations: OrderItemAllocationList[];
    customer_appointments: CustomerAppoinment[];
  }

  export interface customerVehiclesList {
    customer_vehicles: customerVehicle[];
    total_count: number;
  }

  export interface CustomerDriver {
    customer_company_name: string;
    customer_driver_gender: number;
    customer_driver_id: number;
    customer_driver_image: string;
    customer_driver_license_image: string;
    customer_driver_license_number: string;
    customer_driver_mobile: string;
    customer_driver_name: string;
    customer_id: number;
    customer_name: string;
    customer_driver_status: number;
    customer_vehicles: customerVehicle[];
    customer_vehicle_driver_id: number;
  }
  export interface customerDriversList {
    customer_drivers: CustomerDriver[];
    total_count: number;
  }

  export interface VehicleInfo {
    blackListStatus: boolean;
    bodyType: string;
    c_city: string;
    category: string;
    challan_details: string;
    chassisno: string;
    color: string;
    engineNo: string;
    fla_cubic_cap: string;
    fla_fncr_name: string;
    fla_fuel_type_desc: string;
    fla_ins_name: string;
    fla_maker_desc: string;
    fla_model_desc: string;
    fla_seat_cap: number;
    grossWeight: number;
    hypothecation: number;
    ins_from: string;
    manu_yr: string;
    non_use_from: string;
    non_use_status: string;
    non_use_to: string;
    normsDescription: string;
    owner: number;
    owner_cd_desc: string;
    p_city: string;
    permitIssueDate: string;
    permitNumber: string;
    permitType: string;
    permitValidFrom: string;
    permitValidUpto: string;
    pollutionControlNumber: string;
    pollutionControlValidity: string;
    rc_f_name: string;
    rc_fit_upto: string;
    rc_insurance_policy_no: string;
    rc_no_cyl: number;
    rc_registered_at: string;
    rc_status: string;
    rc_status_final: number;
    regDate: string;
    sleepingCapacity: string;
    standingCapacity: string;
    status: string;
    statusAsOn: string;
    taxUpto: string;
    unladenWeight: string;
    userregNo: string;
    vahan: string;
    vh_class_desc: string;
    wheelbase: number;
  }

  export interface VehicleCategory {
    vehicle_category_created_at: string;
    vehicle_category_id: number;
    vehicle_category_link_to: number;
    vehicle_category_name: string;
    vehicle_category_updated_at: string;
  }

  export interface VehicleCategoriesList {
    vehicle_categories: VehicleCategory[];
    total_count: number;
  }

  export interface VehicleBrand {
    vehicle_brand_id: number;
    vehicle_brand_name: string;
    vehicle_brand_status: number;
    vehicle_category_id: number;
    vehicle_category_name: string;
  }

  export interface VehicleBrandsList {
    vehicle_brands: VehicleBrand[];
    total_count: number;
  }

  export interface VehicleModels {
    vehicle_brand_id: number;
    vehicle_brand_name: string;
    vehicle_category_id: number;
    vehicle_category_name: string;
    vehicle_model_id: number;
    vehicle_model_name: string;
    vehicle_model_status: number;
  }

  export interface VehicleModelsList {
    vehicle_models: VehicleModels[];
    total_count: number;
  }

  export interface CustomerVehicleSchemes {
    customer_vehicle_id: number;
    customer_vehicle_scheme_added_at: string;
    customer_vehicle_scheme_id: number;
    customer_vehicle_scheme_updated_at: string;
    scheme_base_offer_price: string;
    scheme_id: number;
    scheme_name: string;
  }

  export interface CommonSearchItem {
    avg_rating: string;
    item_brand_small_logo: string;
    item_cart_id: number;
    item_cart_qty: number;
    item_exchange_discount_amount: number;
    item_fuel_saving_rating_image: string;
    item_has_free_installation: number;
    item_has_fuel_saving_rating: number;
    item_image: string;
    item_name: string;
    item_price: string;
    item_ref_id: number;
    item_type: number;
    item_warranty_months: number;
    item_warranty_years: number;
    item_wishlist_id: number;
    scheme_products: [];
    scheme_services: [];
    product_feature_types: FeatureTypes[];
  }

  export interface CustomerVehicleDetail {
    customer_id: number;
    customer_vehicle_category: string;
    customer_vehicle_chassis_no: string;
    customer_vehicle_class: string;
    customer_vehicle_color: string;
    customer_vehicle_created_at: string;
    customer_vehicle_cubic_capacity: number;
    customer_vehicle_fuel_type: string;
    customer_vehicle_id: number;
    customer_vehicle_make: string;
    customer_vehicle_model: string;
    customer_vehicle_no_of_cyl: number;
    customer_vehicle_no_of_tyres: number;
    customer_vehicle_owner_name: string;
    customer_vehicle_rc_father_name: string;
    customer_vehicle_rc_upto: string;
    customer_vehicle_reg_date: string;
    customer_vehicle_reg_location: string;
    customer_vehicle_regno: string;
    customer_vehicle_schemes: [];
    customer_vehicle_seating_cap: number;
    customer_vehicle_status: number;
    customer_vehicle_updated_at: string;
    customer_vehicle_wheelbase: 0;
    fuel_type_id: number;
    fuel_type_name: string;
    vehicle_brand_id: number;
    vehicle_brand_name: string;
    vehicle_category_id: number;
    vehicle_category_name: string;
    vehicle_model_id: number;
    vehicle_model_name: string;
    vehicle_variant_id: number;
  }

  export interface State {
    state_id: number;
    state_name: string;
  }

  export interface State {
    state_id: number;
    state_name: string;
  }

  export interface StateList {
    states: State[];
    total_count: number;
  }

  export interface IndustryTypes {
    industry_type_created_at: string;
    industry_type_id: number;
    industry_type_name: string;
    industry_type_updated_at: string;
  }

  export interface IndustryList {
    industry_types: IndustryTypes[];
    total_count: number;
  }

  export interface Designation {
    designation_id: number;
    designation_name: string;
  }

  export interface City {
    city_id: number;
    city_name: string;
    state_id: number;
    state_name: string;
  }

  export interface CityList {
    cities: City[];
    total_count: number;
  }

  export interface CustomerPartner {
    customer_company_name: string;
    customer_email: string;
    customer_id: number;
    customer_mobile: string;
    customer_first_name: string;
    customer_status: number;
    product_count: number;
    scheme_count: number;
    service_count: number;
  }

  export interface PartnerInvite {
    customer_mobile: string;
    customer_email: string;
    customer_first_name: string;
    customer_last_name: string;
    customer_company_name: string;
  }

  export interface OrderItemsApprove {
    avg_rating: string;
    order_id: number;
    order_item_cancel_reason: string;
    order_item_cancel_remarks: string;
    order_item_cancelled_quantity: number;
    order_item_cgst_amount: string;
    order_item_cgst_percent: string;
    order_item_franchise_commission: string;
    order_item_fulfilled_quantity: number;
    order_item_has_warranty: string;
    order_item_id: number;
    order_item_igst_amount: string;
    order_item_igst_percent: string;
    order_item_mrp: string;
    order_item_name: string;
    order_item_price: string;
    order_item_quantity: number;
    order_item_ref_id: number;
    order_item_refund_quantity: number;
    order_item_selling_price: string;
    order_item_sgst_amount: string;
    order_item_sgst_percent: string;
    order_item_tax_amount: string;
    order_item_taxable_amount: string;
    order_item_total_amount: string;
    order_item_type: number;
    order_item_warranty_upto: string;
    scheme_order_item_id: number;
    order_item_image: string;
    used_qty: number;
    order_item_approval_status: number;
    order_item_status: number;
    order_item_exchange_discount_amount: number;
    order_item_has_free_installation: number;
    order_item_is_exchange: number;
    order_number:string;
    order_created_at:string;
    order_total_amount:string;
    remaining_qty: number;
    item_price: number;
    item_mrp: string;
    item_name: string;
    request_by: string;
    item_review_id: number;
    request_by_mobile:string;
    customer_email:string;
    customer_corporate_user_division:string;
    order_vehicle_reg_no:string;
    vehicle_brand_name:string;
    vehicle_model_name:string;
    vehicle_variant_name:string;
    order_item_approved_by:string,
    order_item_approved_datetime:string;
  }
  export interface PartnerApproval {
    item_type: number;
    item_ref_id: number;
    item_name: string;
    item_description: string;
    avg_rating: number;
    item_price: number;
    order_item_approval_status: number;
    item_image: string;
    order_item_id: number;
    order_id: number;
    order_created_at: string;
    item_mrp: string;
    order_item_quantity: number;
    order_number: string;
    request_by: string;
    order_total_amount: string;
    request_by_mobile:string;
    customer_email:string;
    customer_corporate_user_division:string;
    order_vehicle_reg_no:string;
    vehicle_brand_name:string;
    vehicle_model_name:string;
    vehicle_variant_name:string;
    order_items:OrderItemsApprove[];
  }

  export interface PartnerOrders {
    order_created_at: string;
    order_id: number;
    service_point_address: string;
    service_point_name: string;
    order_total_amount: string;
    order_number: string;
  }
  export interface PartnerVehicle {
    customer_id: number;
    customer_vehicle_category: string;
    customer_vehicle_chassis_no: string;
    customer_vehicle_class: string;
    customer_vehicle_color: string;
    customer_vehicle_cubic_capacity: string;
    customer_vehicle_fuel_type: string;
    customer_vehicle_id: number;
    customer_vehicle_make: string;
    customer_vehicle_model: string;
    customer_vehicle_no_of_cyl: number;
    customer_vehicle_no_of_tyres: number;
    customer_vehicle_owner_name: string;
    customer_vehicle_rc_father_name: string;
    customer_vehicle_rc_upto: string;
    customer_vehicle_reg_date: string;
    customer_vehicle_reg_location: string;
    customer_vehicle_regno: string;
    customer_vehicle_seating_cap: number;
    customer_vehicle_status: number;
    customer_vehicle_wheelbase: number;
    fuel_type_name: string;
    vehicle_brand_id: number;
    vehicle_brand_name: string;
    vehicle_category_name: string;
    vehicle_model_name: string;
  }

  export interface PartnerDetail {
    account_owner_customer_id: number;
    approvals: PartnerApproval[];
    city_id: number;
    customer_address: string;
    customer_address_2: string;
    customer_address_city_id: number;
    customer_address_landmark: string;
    customer_address_pincode: string;
    customer_comm_address: string;
    customer_comm_address_2: string;
    customer_comm_address_city_id: number;
    customer_comm_address_is_same: boolean;
    customer_comm_address_landmark: string;
    customer_comm_address_pincode: string;
    customer_company_designation: null;
    customer_company_doj: string;
    customer_company_name: string;
    customer_created_at: string;
    customer_dob: string;
    customer_email: string;
    customer_first_name: string;
    customer_gender: number;
    customer_gstin: string;
    customer_id: number;
    customer_industry_type_id: number;
    customer_last_name: string;
    customer_mobile: string;
    customer_orders: PartnerOrders[];
    customer_payment_scheme: number;
    customer_profile_image: string;
    customer_reward_points_total: string;
    customer_status: number;
    customer_type: number;
    customer_updated_at: string;
    customer_vehicles: PartnerVehicle[];
    total_vehicles: number;
    inactive_vehicles: number;
    customer_payments: PaymentPending[];
  }

  export interface PaymentPending {
    customer_payments: Order[];
    total_count: number;
  }

  export interface OrderApprovalPayments {
    customer_app_user_id: number;
    payment_status: number;
    request_by: string;
    customer_appointment_id: number;
    customer_id: number;
    customer_vehicle_id: number;
    order_balance_amount: string;
    order_billing_address_city_name: string;
    order_billing_address_gstin: number;
    order_billing_address_id: number;
    order_billing_address_landmark: string;
    order_billing_address_line1: string;
    order_billing_address_line2: string;
    order_billing_address_pincode: string;
    order_billing_gstin: string;
    order_coupon_code_id: number;
    order_coupon_discount_amt: string;
    order_created_at: string;
    order_current_status_id: number;
    order_datetime: string;
    order_delivery_amount: string;
    order_delivery_service_point_id: number;
    order_group_id: number;
    order_hash: string;
    order_id: number;
    order_invoice_number: string;
    order_items: OrderItems[];
    order_number: string;
    order_original_amount: string;
    order_paid_amount: string;
    order_process_type: number;
    order_reward_amt: string;
    order_shipping_address_city_name: string;
    order_shipping_address_gstin: string;
    order_shipping_address_id: number;
    order_shipping_address_landmark: string;
    order_shipping_address_line1: string;
    order_shipping_address_line2: string;
    order_shipping_address_pincode: string;
    order_tax_amount: string;
    order_taxable_amount: string;
    order_total_amount: string;
    order_updated_at: string;
    order_vehicle_number_photo: string;
    service_point_id: number;
    user_id: number;
  }

  export interface Filters {
    searchText: string;
    models: number;
    brand: number;
    specialOffers: number[];
    vehicleTypes: number;
    productbrand: number[];
    categories: number[];
    budgetValueFrom: number;
    budgetValueTo: number;
    sorting_order: string;
    discount: number[];
    limit: number;
    rating: number;
    servicePointId: number;
  }

  export interface OrderItemAllocationList {
    avg_rating: string;
    order_id: number;
    order_item_approval_customer_id: number;
    order_item_billing_customer_id: number;
    order_item_cgst_amount: string;
    order_item_cgst_percent: string;
    order_item_franchise_commission: null;
    order_item_fulfilled_quantity: string;
    order_item_has_warranty: null;
    order_item_id: number;
    order_item_igst_amount: string;
    order_item_igst_percent: string;
    order_item_image: string;
    order_item_mrp: string;
    order_item_name: string;
    order_item_price: string;
    order_item_quantity: string;
    order_item_ref_id: number;
    order_item_refund_quantity: null;
    order_item_remaining_quantity: 1;
    order_item_selling_price: string;
    order_item_sgst_amount: string;
    order_item_sgst_percent: string;
    order_item_tax_amount: string;
    order_item_taxable_amount: string;
    order_item_total_amount: string;
    order_item_type: number;
    order_item_warranty_upto: string;
    available_qty: number;
  }

  export interface selectedItemsData {
    order_item_allocated_to: number;
    order_item_allocation_ref_id: number;
    order_item_allocation_quantity: number;
    order_item_type: number;
    order_item_ref_id: number;
  }

  export interface appoinmentTimeSlots {
    created_at: string;
    time_slot_end_time: string;
    time_slot_id: number;
    time_slot_name: string;
    time_slot_start_time: string;
    updated_at: string;
  }

  // stardardRatelist datatypes
  export interface StandardRateList {
    agreed_item_id: number;
    agreed_item_type: number;
    agreed_item_ref_id: number;
    agreed_item_price: number;
    agreed_item_bill_to: number;
    agreed_item_used: number;
    customer_id: number;
    agreed_item_added_at?: any;
    agreed_item_updated_at?: any;
    agreed_item_rating: string;
    agreed_item_name: string;
    agreed_item_image: string;
  }

  export interface ApprovalList {
    avg_rating: string;
    item_description: string;
    item_name: string;
    item_price: number;
    item_ref_id: number;
    item_type: number;
    item_warranty_months: number;
    order_item_approval_status: number;
  }
  export interface AvailableItems {
    available_qty: string;
    avg_rating: string;
    order_item_image: string;
    order_item_mrp: string;
    order_item_name: string;
    order_item_price: string;
    order_item_ref_id: number;
    order_item_type: number;
    usage_limit: number;
    order_brand_name: string;
  }

  export interface availableItemsData {
    name: string;
  }
  export interface selectedItemsDataApproval {
    order_item_id: number;
    order_item_approval_status: number;
  }

  export interface selectedItemsDataApprovalCorporate {
    order_id: number;
    order_item_approval_status: number;
  }

  export interface CustomerAppoinmentItems {
    appointment_item_fulfilled_quantity: number;
    appointment_item_id: number;
    appointment_item_quantity: number;
    appointment_item_service_completed: string;
    customer_appointment_id: number;
    order_item_id: number;
    order_item_ref_category_name: string;
    order_item_ref_name: string;
    product_name: string;
    appointment_item_image: string;
    scheme_name: string;
    service_name: string;
    appointment_item_rating: number;
    appointment_item_type: number;
    appointment_item_type_ref_id: number;
    appointment_item_name: string;
    customer_appoint_item_status: number;
    appointment_item_exchange_discount_amount: number;
    appointment_item_has_free_installation: number;
    appointment_item_price: string;
  }

  export interface CustomerAppoinmentDetail {
    customer_appointment_contact: string;
    customer_appointment_current_status_id: number;
    customer_appointment_end_slot_time: string;
    customer_appointment_id: number;
    customer_appointment_items: CustomerAppoinmentItems[];
    customer_appointment_remarks: string;
    customer_appointment_serviced_user_id: number;
    customer_appointment_start_slot_time: string;
    customer_vehicle_id: number;
    service_point_id: number;
    service_point_name: string;
    customer_appointment_status: number;
    service_point_address: string;
    service_point_avg_rating: string;
    service_point_location_lat: string;
    service_point_location_lng: String;
    sp_review_id: number;
    sp_working_day_message: string;
  }

  export interface CustomerAddress {
    city_name: string;
    customer_address_city_id: number;
    customer_address_gstin: string;
    customer_address_id: number;
    customer_address_landmark: string;
    customer_address_line1: string;
    customer_address_line2: string;
    customer_address_pincode: string;
    customer_id: number;
    state_id: number;
    state_name: string;
  }

  export interface CustomerFormData {
    customer_address_id: number;
    customer_address_line1: string;
    customer_address_line2: string;
    customer_address_landmark: string;
    customer_address_city_id: number;
    customer_address_pincode: string;
    customer_address_gstin: string;
  }

  export interface orderGroupData {
    balance_amount: string;
    customer_app_user_id: number;
    customer_appointment_id: null;
    customer_detail: CustomerProfile;
    customer_first_name: string;
    customer_id: number;
    customer_vehicle_detail: CustomerVehicle;
    customer_vehicle_id: number;
    order_billing_address_city_name: string;
    order_billing_address_id: number;
    order_billing_address_landmark: string;
    order_billing_address_line1: string;
    order_billing_address_line2: string;
    order_billing_address_pincode: string;
    order_billing_gstin: string;
    order_coupon_code_id: number;
    order_coupon_discount_amt: string;
    order_created_at: string;
    order_current_status_id: number;
    order_datetime: string;
    order_group_id: number;
    order_hash: string;
    order_id: number;
    order_invoice_number: string;
    order_items: OrderItems[];
    order_number: string;
    order_original_amount: null;
    order_payments: OrderPayments[];
    order_reward_amt: string;
    order_shipping_address_city_name: string;
    order_shipping_address_id: number;
    order_shipping_address_landmark: string;
    order_shipping_address_line1: string;
    order_shipping_address_line2: string;
    order_shipping_address_pincode: string;
    order_status: number;
    order_tax_amount: string;
    order_taxable_amount: string;
    order_total_amount: string;
    order_updated_at: string;
    order_vehicle_number_photo: string;
    paid_amount: number;
    service_point_address: string;
    service_point_contact_number: string;
    service_point_id: number;
    service_point_name: string;
    user_id: number;
    customer_appointment: {
      customer_appointment_contact: string;
      customer_appointment_created_at: string;
      customer_appointment_current_status_id: number;
      customer_appointment_end_slot_time: string;
      customer_appointment_id: number;
      customer_appointment_remarks: string;
      customer_appointment_serviced_user_id: number;
      customer_appointment_start_slot_time: string;
      customer_appointment_status: number;
      customer_appointment_updated_at: string;
      customer_vehicle_id: number;
      service_point_id: number;
      service_point_name: string;
      service_point_address: string;
      service_point_avg_rating: String;
    };
  }

  export interface SelectedItems {
    appointment_item_type: number;
    appointment_item_type_ref_id: number;
    appointment_item_quantity: number;
    appointment_item_id: number;
    item_name: string;
    item_image: string;
    item_rating: string;
    item_price: string;
    item_mrp: string;
  }

  export interface MechmilsPay {
    customer_paybal_purchase_amount: number;
    payment_mode_id?: number;
  }
  export interface MechmilsPayList {
    paybal_balance: string;
    customer_id: number;
    paybal_transactions: MechmilesPaybalTransactions[];
  }
  export interface MechmilesPaybalTransactions {
    customer_paybal_purchase_order_id: string;
    customer_paybal_purchase_payment_ref: string;
    customer_paybal_purchase_status: number;
    customer_paybal_trans_amount: string;
    customer_paybal_trans_id: number;
    customer_paybal_trans_ref_id: number;
    customer_paybal_trans_time: string;
    customer_paybal_trans_type: number;
    payment_mode_name: string;
    order_id: number;
  }

  export interface MechmilesPayDetails {
    customer_id: number;
    customer_paybal_purchase_order_id: string;
    customer_paybal_purchase_payment_ref: string;
    customer_paybal_purchase_status: number;
    customer_paybal_trans_amount: string;
    customer_paybal_trans_id: number;
    customer_paybal_trans_ref_id: number;
    customer_paybal_trans_time: string;
    customer_paybal_trans_type: number;
    payment_mode_name: string;
  }
  export interface AuditList {
    customer_appointment_current_status_time: string;
    customer_appointment_id: number;
    appointment_item_id: number;
    customer_appointment_serviced_user_name: string;
    customer_vehicle_regno: string;
    service_point_name: string;
    services: AuditReportServices[];
  }

  export interface AuditReportServices {
    appointment_item_id: number;
    customer_appointment_id: number;
    service_category_icon: string;
    service_id: number;
    service_process_type: number;
    service_name: string;
  }
  export interface myRewards {
    customer_id: number;
    customer_point_datetime: string;
    customer_point_id: number;
    customer_point_ref: number;
    customer_point_type: number;
    customer_reward_points: number;
    total_earned?: string;
    total_redeemed?: string;
    total_available?: string;
    earned_amt: string;
    reward_redeemed: string;
    customer_reward_earned?: string;
  }

  export interface CorporateUsers {
    customer_app_user_id: number;
    customer_app_corporate_user_fname: string;
    customer_app_user_mobile: string;
    customer_app_corporate_user_lname: string;
    customer_app_corporate_user_email: string;
    customer_app_corporate_user_designation: string;
    customer_app_status: number;
    customer_app_corporate_user_image: string;
  }

  export interface productAddtionalInfo {
    product_addl_info_desc: string;
    product_addl_info_id: number;
    product_addl_info_title: string;
    product_id: number;
  }

  export interface serviceAddtionalInfo {
    service_addl_info_desc: string;
    service_addl_info_id: number;
    service_id: number;
  }

  export interface schemeAdditionalInfo {
    name: string;
    price: number;
  }

  export interface VehicleVariants {
    approval_id: number;
    vehicle_model_id: number;
    vehicle_variant_approval_id: number;
    vehicle_variant_created_at: string;
    vehicle_variant_fuel_type_id: number;
    vehicle_variant_id: number;
    vehicle_variant_name: string;
    vehicle_variant_status: number;
    vehicle_variant_updated_at: string;
  }

  export interface DashboardOrders {
    customer_name: string;
    no_of_items: number;
    order_datetime: string;
    order_id: number;
    order_number: string;
    order_reward_earned_amount: string;
    order_status: number;
    order_total_amount: string;
    payment_mode_name: string;
    service_point_name: string;
  }

  export interface DashboardAppoinments {
    customer_appointment_contact: string;
    customer_appointment_end_slot_time: string;
    customer_appointment_id: number;
    customer_appointment_remarks: string;
    customer_appointment_start_slot_time: string;
    customer_vehicle_id: number;
    customer_vehicle_regno: number;
    service_point_id: number;
    service_point_name: string;
  }

  export interface DashboardReviews {
    customer_app_user_id: number;
    customer_app_user_name: string;
    item_review_created_at: string;
    item_review_desc: string;
    item_review_rating: string;
  }

  export interface Notifications {
    customer_app_user_id: number;
    customer_notification_created_at: string;
    customer_notification_id: number;
    customer_notification_push_response: string;
    customer_notification_push_status: number;
    customer_notification_read: number;
    customer_notification_ref_id: number;
    customer_notification_text: string;
    customer_notification_title: string;
    customer_notification_type: number;
    customer_notification_updated_at: string;
  }

  export interface StandardSelectedItems {
    cart_item_type: number;
    cart_item_type_ref_id: number;
  }
}
