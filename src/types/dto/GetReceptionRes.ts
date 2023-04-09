interface ReceptionData {
  reception_id: string;
  name: string;
  phone_number: string;
  address: string;
  laundry_item: string;
  request_memo: string | null;
  collection_date: string;
  status: string;
}

export type { ReceptionData };
