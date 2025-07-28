function submitIssue() {
  const name = document.getElementById("name").value.trim();
  const net = document.getElementById("net").value.trim();
  const issue = document.getElementById("issue").value.trim();

  if (!issue) {
    alert("⚠️ Please describe your issue before submitting.");
    return;
  }

  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
  complaints.push({ name: name || "Anonymous", issue });
  localStorage.setItem("complaints", JSON.stringify(complaints));

  document.getElementById("responseBox").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("issue").value = "";
}

function showReports() {
  // the locked report section
  document.getElementById("lockedReports").style.display = "block";
}
function unlockReports() {
  const pass = document.getElementById("reportPass").value.trim();
  const validPass = "!@#$%★";



  if (pass === validPass) {
    const storedReports = localStorage.getItem("cyberReports");
    const reports = storedReports ? JSON.parse(storedReports) : [];

    let html = "<h3>🔓 All Submitted Reports</h3>";
    reports.forEach((rpt, idx) => {
      html += `
        <div class="report-card">
          <strong>${rpt.name || "Anonymous"}</strong>
          <p>${rpt.text}</p>
        </div>
      `;
    });

    document.getElementById("reportDisplay").innerHTML = html;
  } else {
    alert("🚫 Wrong password. Try again.");
    document.getElementById("reportDisplay").innerHTML = "";
  }
}
function submitIssue() {
  const name = document.getElementById("name").value.trim();
  const issue = document.getElementById("issue").value.trim();

  if (!issue) {
    alert("⚠️ Please describe your issue before submitting.");
    return;
  }

  // SAVE LOCALLY
  let reports = JSON.parse(localStorage.getItem("cyberReports")) || [];
  reports.push({ name: name || "Anonymous", text: issue });
  localStorage.setItem("cyberReports", JSON.stringify(reports));

  document.getElementById("responseBox").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("net").value = "";
  document.getElementById("issue").value = "";
}
