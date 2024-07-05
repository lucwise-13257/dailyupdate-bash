import { promisify } from "util"
import { exec } from "child_process"
const webhookURL = process.env.WEBHOOK_URL
const shell = promisify(exec)
async function getPackages() {
  await shell("sudo apt update")
  const hostname = await shell("hostname")
  const pkgs = await shell(`aptitude search "~U" | wc -l`)
  const response = await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "content": `There are ${pkgs.stdout.trim()} updates available for ${hostname.stdout.trim()}`
    })
  })
  console.log(response)
}
try {
  getPackages()
} catch(e) {
  console.log(e)
}
