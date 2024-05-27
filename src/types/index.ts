type Group = {
  location_group_id: string;
  name: string;
  provider_count: number;
};

export type Location = {
  location_id: string;
  location_type: string;
  name: string;
  region_location_id: string;
  country_location_id: string;
  country_code: string;
  provider_count: number;
  city_location_id?: string;
};

export type ProviderLocationsResponse = {
  groups: Group[];
  locations: Location[];
  devices: any[];
};

export type LocationProvider = {
  client_id: string;
  estimated_bytes_per_second: number;
};
