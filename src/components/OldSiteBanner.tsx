import * as React from "react";
import { useRouter } from "next/router";
import { X } from "react-bootstrap-icons";
import { Button } from "./Button";

export function OldSiteBanner() {
  const [localStorageBannerValue, removeBanner] = useLocalStorage<string>("casper.dev_oldsite");
  const router = useRouter();
  const cameFromOldSite = router.query["from-old"] === "true";
  const hasClosedBannerBefore = localStorageBannerValue === "true";

  if (!cameFromOldSite || hasClosedBannerBefore) {
    return null;
  }

  return (
    <div
      className="flex items-center justify-center p-2 bg-gray-300 dark:bg-blue-1 shadow-md ease-linear"
      role="banner"
    >
      <div className="max-w-4xl w-full flex items-center justify-between">
        <p>
          <span className="font-medium">casperthehost.me</span> is now{" "}
          <span className="font-medium">casper.dev</span> <span role="img">🥳</span>!
        </p>

        <Button onClick={() => removeBanner("true")} className="!px-1">
          <X width={25} height={25} />
        </Button>
      </div>
    </div>
  );
}

function useLocalStorage<T>(key: string) {
  const [value, setValue] = React.useState<T | null>(null);

  React.useEffect(() => {
    setValue(localStorage.getItem(key) as T | null);
  }, [key]);

  function handleChange(value: any) {
    setValue(value);
    localStorage.setItem(key, value);
  }

  return [value, handleChange] as const;
}
