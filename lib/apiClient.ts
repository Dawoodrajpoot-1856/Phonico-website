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

  try {
    const res = await fetch(url, {
      ...customOptions,
      headers: defaultHeaders,
    });

    const data = await res.json();

    if (!res.ok || data.status === false || data.success === false) {
      let errorMessage = data.message || data.error || "Something went wrong";

      if (data.errors) {
        const firstErrorKey = Object.keys(data.errors)[0];
        errorMessage = data.errors[firstErrorKey][0];
      }

      throw new Error(errorMessage);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Network request failed");
  }
}
