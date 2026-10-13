const BASE_URL = "https://platform.phonico.com/api";

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { params, headers, ...customOptions } = options;

  let url = `${BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...headers,
  };

  let res: Response;

  try {
    res = await fetch(url, {
      ...customOptions,
      headers: defaultHeaders,
    });
  } catch (error: any) {
    const cause = error?.cause;
    console.error(
      "apiClient network error:",
      url,
      cause?.code,
      cause?.message || error?.message,
    );
    throw new Error(
      cause?.code
        ? `Network error (${cause.code}): ${cause.message || ""}`
        : error?.message || "Network request failed",
    );
  }

  let data: any;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Invalid response from server (status ${res.status})`);
  }

  if (!res.ok || data.status === false || data.success === false) {
    let errorMessage = data.message || data.error || "Something went wrong";

    if (data.errors) {
      const firstErrorKey = Object.keys(data.errors)[0];
      errorMessage = data.errors[firstErrorKey][0];
    }

    throw new Error(errorMessage);
  }

  return data as T;
}
