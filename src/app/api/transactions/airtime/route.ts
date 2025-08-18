import { NextResponse } from "next/server";
import axios from "axios";

export type TransactionAirtimeResponse = {
  content: Transaction[];
};

export type Transaction = {
  transactionId: number;
  status: string;
  operatorTransactionId: string | null;
  customIdentifier: string | null;
  recipientPhone: number | null;
  recipientEmail: string | null;
  senderPhone: number | null;
  countryCode: string | null;
  operatorId: number | null;
  operatorName: string | null;
  discount: number | null;
  discountCurrencyCode: string | null;
  requestedAmount: number | null;
  requestedAmountCurrencyCode: string | null;
  deliveredAmount: number | null;
  deliveredAmountCurrencyCode: string | null;
  transactionDate: string; // could refine to Date if parsed
  pinDetail: PinDetail | null;
  balanceInfo: BalanceInfo | null;
};

export type PinDetail = {
  serial: number | null;
  info1: string | null;
  info2: string | null;
  info3: string | null;
  value: string | null;
  code: number | null;
  ivr: string | null;
  validity: string | null;
};

export type BalanceInfo = {
  // shape not provided, so use `any` or define later
  [key: string]: any;
};


export async function GET(req: Request) {
  try {
    // Extract query params from the request
    const { searchParams } = new URL(req.url);

    // Build params dynamically (fallbacks for defaults)
    const params = {
      size: searchParams.get("size") || "10",
      page: searchParams.get("page") || "1",
      countryCode: searchParams.get("countryCode") || "NG",
      // operatorId: searchParams.get("operatorId") || "341",
      // operatorName: searchParams.get("operatorName") || "MTN Nigeria",
      // customIdentifier: searchParams.get("customIdentifier") || "april-top-up",
      startDate: searchParams.get("startDate") || "2025-02-10 00:00:00",
      endDate: searchParams.get("endDate") || "2025-08-30 00:00:00",
    };

    // Call Reloadly API using Axios
    const res = await axios.get(
      "https://topups.reloadly.com/topups/reports/transactions",
      {
        headers: {
          Accept: "application/com.reloadly.topups-v1+json",
          Authorization: `Bearer ${process.env.RELOADLY_TOKEN}`,
        },
        params, // Axios will convert this to query string
      }
    );

    return NextResponse.json(res.data);
  } catch (error: any) {
    console.error("Error fetching transactions:", error);

    return NextResponse.json(
      { error: error.response?.data || error.message },
      { status: error.response?.status || 500 }
    );
  }
}

