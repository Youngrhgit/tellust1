"use client";
import { useRouter } from "next/navigation";
import { useSettings } from "@/settingsContext";

function handleClickSignOut(router, setCurUser) {
  setCurUser(null);
  router.push("/");
}

function Settings() {
  const settings = useSettings();
  const router = useRouter();
  const setCurUser = settings.setCurUser;

  return (
    <>
      <div>This is the Settings Page</div>

      <button onClick={() => handleClickSignOut(router, setCurUser)}>
        Sign Out
      </button>
    </>
  );
}

export default Settings;
