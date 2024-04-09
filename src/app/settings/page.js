import { useSettings } from "@/settingsContext";

function Settings() {
  const settings = useSettings();

  console.log("settings = ", settings);
  const setCurUser = settings.setCurUser;

  return (
    <>
      <div>This is the Settings Page</div>

      <button onClick={() => setCurUser(null)}>Sign Out</button>
    </>
  );
}

export default Settings;
