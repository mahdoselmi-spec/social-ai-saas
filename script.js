async function generatePost() {
  const topic = document.getElementById("topic").value;
  const tone = document.getElementById("tone").value;
  const output = document.getElementById("output");

  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, tone })
  });

  const data = await res.json();
  output.textContent = data.post || data.error;
}
