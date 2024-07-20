import React from "react";
import { apiClient } from "./apiclient";
import { useQuery } from "react-query";
export default function UseQueryTest() {
  // Fetch here
  const q1 = useQuery({
    queryKey: ["getAllUsers"],
    // cacheTime: 3 * 60000, //3 minutes
    // enabled: true,
    queryFn: async () => {
      let url = "/users";
      var ret = await apiClient.get(url);
      console.log("All Users", ret.data);
      return ret;
    },
  });

  return (
    <div className="flex justify-center items-center mt-[40vh]">
      <h1 className="font-bold text-[50px]">
        <p className="inline text-red-600">Open </p>
        Console to Check the Fetched Data
      </h1>
    </div>
  );
}
