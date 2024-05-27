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

export type StatsResponse = {
  lookback: number;
  created_time: number;
  all_transfer_data: {
    [date: string]: number;
  };
  all_transfer_summary: number;
  all_transfer_summary_rate: number;
  all_packets_data: {
    [date: string]: number;
  };
  all_packets_summary: number;
  all_packets_summary_rate: number;
  providers_data: {
    [date: string]: number;
  };
  providers_superspeed_data: {
    [date: string]: number;
  };
  providers_summary: number;
  providers_summary_superspeed: number;
  countries_data: {
    [date: string]: number;
  };
  countries_summary: number;
  regions_data: {
    [date: string]: number;
  };
  regions_summary: number;
  cities_data: {
    [date: string]: number;
  };
  cities_summary: number;
  extender_transfer_data: {
    [date: string]: number;
  };
  extender_transfer_summary: number;
  extender_transfer_summary_rate: number;
  extenders_data: {
    [date: string]: number;
  };
  extenders_superspeed_data: {
    [date: string]: number;
  };
  extenders_summary: number;
  extenders_summary_superspeed: number;
  networks_data: {
    [date: string]: number;
  };
  networks_summary: number;
  devices_data: {
    [date: string]: number;
  };
  devices_summary: number;
};
