import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


document.addEventListener("click", function (event) {
  const button = event.target.closest(".payment-link");
  if (!button) return; // clicked something else

  const row = button.closest(".checklist-row");
  if (!row) return; // ignore payment-link buttons outside rows

  const checkbox = row.querySelector('input[type="checkbox"]');
  const statusBox = row.querySelector(".check-info");
  const statusText = statusBox ? statusBox.querySelector("p") : null;

  if (checkbox) {
    checkbox.checked = true;
  }

  if (statusText) {
    statusText.textContent = "Processing payment";
  }

  if (statusBox) {
    statusBox.style.backgroundColor = "#1c2053"; // processing colour
  }

});
