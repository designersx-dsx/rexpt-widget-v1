//USER SCRIPT
function injectCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
             @keyframes float {
     0% { transform: translateY(0); }
     50% { transform: translateY(-8px); }
     100% { transform: translateY(0); }
   }

   @keyframes pulse-ring {
     0% {
       transform: scale(0.9);
       opacity: 0.7;
     }
     70% {
       transform: scale(1.6);
       opacity: 0;
     }
     100% {
       transform: scale(0.9);
       opacity: 0;
     }
   }

   body {
     margin: 0;
     font-family: sans-serif;
   }

   .floating-agent {
     position: fixed;
     bottom: 24px;
     right: 24px;
     width: 96px;
     height: 96px;
     z-index: 1000;
     cursor: pointer;
   }

   .floating-agent.animate {
     animation: float 3s ease-in-out infinite;
   }

   .agent-wrapper {
     position: relative;
     width: 100%;
     height: 100%;      
     border-radius: 50%;
     overflow: visible; 
     box-shadow: 0 4px 12px rgba(0,0,0,0.2);
   }

     .pulse-ring {
   position: absolute;
    right: -5px;
    bottom: -6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: pulse-ring 1.8s infinite;
    z-index: 0;
    background: #0CDD24;
    z-index: 11;
}

   .agent-wrapper img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     position: relative;
     z-index: 2;
     border-radius: 100px;
     border: 4px solid #7F709F;
       background: #ffffff;
   }

   .badge2 {
     position: absolute;
     bottom: -6px;
     width: 32px;
     height: 32px;
    
   }

   .badge2 img {
    
     object-fit: contain;
     border:unset;
   }

  
   .popup {
     position: fixed;
     bottom: 155px;
     right: 20px;
     width: 90%;
     max-width:320px;
     background-color: #fff;
     border-radius: 20px;
     border: 2px solid #eee;
     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
     z-index: 1001;
     display: none;
     /*overflow: hidden;*/
     font-family: sans-serif;
   }

   .popup.show {
     display: block;
   }
   .popup::after {
     content: "";
   position: absolute;
   bottom: -18px;
   right: 24px;
   width: 36px;
   height: 36px;
   background-color: #fff;
   /* border: 2px solid #eee; */
   transform: rotate(45deg);
   box-shadow: 14px 15px 20px rgba(0, 0, 0, 0.1);
   z-index: -1;
   border-radius: 0px 0px 8px 0px;
   /* font-size: 35px; */
   /* color: #BCBCBC; */
   }

   .popup-header {
     padding: 5px 40px;
     font-size: 12px;
     color: #888;
     text-align: right;
    
   }

   .popup-body {
    position: relative;
    text-align: center;
    padding: 15px 15px 10px 15px;
    // height: 325px;
    // background: radial-gradient(circle at 50% 30%, #FFFFFF 0%, #263B5A 50%, #19273C 100%);
    background: radial-gradient(circle at 50% 30%, #263b5aea 3%, #19273C 40%);
    margin-inline: 22px;
    margin-bottom: 22px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap:1rem
   }


.pulse-ring-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin-top:2rem;

}

.agent-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  top:6px;
  position: relative;
  z-index: 1;

}

/* Blinking Rings */
.pulse-ring2 {
  position: absolute;
  top: 56%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 4px solid rgba(255, 255, 255, 0.5); /* Default fallback */
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 1;
  animation: pulseAnim 1.5s ease-out infinite;
}

/* Ring 1 - Red */
.pulse-ring2:nth-child(1) {
  border-color: #ffffffff;
  animation-delay: 0s;
}

/* Ring 2 - Green */
.pulse-ring2:nth-child(2) {
  border-color: #3B4859;
  animation-delay: 0.4s;
}

/* Ring 3 - Blue */
.pulse-ring2:nth-child(3) {
  border-color: 28364A;
  animation-delay: 0.8s;
}

@keyframes pulseAnim {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 0;
  }
}


/* Text content styles */
.agent-info {
  text-align: center;
  // line-height:20px;
}

.call-label {
  font-size: 14px;
  color: #D1DCED;
  margin-bottom: 0px;
  font-family: "Inter", sans-serif;

}

.phone-number {
  font-size: 16px;
  font-weight: bold;
  margin: 4px 0 0px;
  color: #ffffffff;
  font-family: "Inter", sans-serif;

}

.tag-label {
  font-size: 12px;
  font-weight:600;
  color: #D1DCED;
  letter-spacing: 1px;
  font-family: "Inter", sans-serif;
  text-transform: capitalize;

}


   .call-banner {
     position: absolute;
     bottom: 22px;
     left: 50%;
     transform: translateX(-50%);
     background-color: #28a745;
     color: white;
     padding: 8px 12px;
     border-radius: 32px;
     font-size: 14px;
     max-width: 72%;
     box-shadow: 0 2px 6px rgba(0,0,0,0.2);
     display: flex;
     align-items: center;
     gap: 8px;
     width: 100%;
     cursor: pointer;
   }

   .call-banner .call-icon {
     width: 24px;
     height: 24px;
     animation: vibe 1s linear 1s infinite;
   }

@keyframes vibe {
   0% {}

   2% {
       transform: translateX(5px) rotateZ(1deg);
   }

   4% {
       transform: translateX(-5px) rotateZ(-1deg);
   }

   6% {
       transform: translateX(3px) rotateZ(2deg);
   }

   8% {
       transform: translateX(-2px) rotateZ(-2deg);
   }

   10% {
       transform: translateX(1px) rotateZ(2deg);
   }

   12% {
       transform: translateX(-5px) rotateZ(-2deg);
   }

   14% {
       transform: translateX(3px) rotateZ(-1deg);
   }

   16% {
       transform: translateX(-5px) rotateZ(-2deg);
   }

   18% {
       transform: translateX(5px) rotateZ(2deg);
   }

   20% {
       transform: translateX(-5px) rotateZ(-2deg);
   }

   22% {
       transform: translateX(5px) rotateZ(2deg);
   }

   24% {
       transform: translateX(-3px) rotateZ(-2deg);
   }

   26% {
       transform: translateX(0px) rotateZ(0deg);
   }

   100% {}
}

.greendiv, .reddiv {
 position: relative;
    // bottom: 1rem;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    border-radius: 30px;
    padding: 10px 16px;
    color: white;
    display: flex
;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 80%;

 transition: background-color 0.4s ease, transform 0.4s ease;
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 align-text:left;

}

.greendiv {
 background-color: #0caa4f;
}

.reddiv {
 background-color: #DA1B14;
}

// .greendiv:hover, .reddiv:hover {
//  transform: translateX(-50%) scale(1.03);
// }

.callText p {
 font-weight: 600;
 font-size: 15px;
 margin: 0;
 color :#ffff
 transition: color 0.3s ease;
}

.callText small {
 font-size: 9px;
 font-weight: 400;
 margin-top: 3px;
 display: block;
 color :#ffff
 transition: opacity 0.3s ease;
}
 .phoneIcon {
 align-items: self-end;
    display: flex
;}

.phoneIcon img {
 animation: vibe 1s linear 1s infinite;
}

   .call-banner .call-text {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     line-height: 1.2;
   }

   .call-banner .call-title {
     font-weight: 600;
     font-size: 18px;
     font-family: "Lato", sans-serif;
   }

   .call-banner .call-subtitle {
     font-size: 10px;
     opacity: 0.9;
     font-family: "Inter", sans-serif;
   }

   .close-button {
     position: absolute;
   top: 100%;
   right: 10.8px;
   font-size: 34px;
   color: #BCBCBC;
   background: transparent;
   border: none;
   cursor: pointer;
   }

   .close-button:hover {
     color: #333;
   }
     .popup{
         display: block;
         }

   .popup-header a {
     text-decoration: unset;
     color: #7D7D7D;
     font-family: "Inter", sans-serif;
   }

   /* Additional styles for noFloat state */
   .noFloat {
     animation: none !important;
   }
.WraperBlink {
  position: absolute;
    right: 22%;
    bottom: 18px;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    z-index: 11;
}
    .pulse-dot {
  position: absolute;
    top: 9px;
    left: 8px;
    width: 4px;
    height: 4px;
    background-color: #0CDD24;
    border-radius: 50%;
    z-index: 12;
}
    .callText{
        text-align: start;line-height:normal}
        .agent-intro{   text-align: center;
          font-size: 9px;
          position: relative;
          bottom: 0;
          color: #ffff;
              margin: 0;
          }
          .terms-text {
            cursor: pointer;
            font-weight: 800;
            text-decoration: underline;
          },
          .terms-wrapper {
            position: relative;
            top: -6rem;
          }
          
          .terms-popup {
            
            width: 245px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
            padding: 10px;
            text-align: justify;
            font-size: 12px;
            line-height: 15px;
          }
          
          .terms-content h2 {
            margin-top: 0;
            font-size: 16px;
            margin-bottom: -7px;
          }
          
          .close-terms {
            color: #000000;
            cursor: pointer;
          }
            .button-stack {
            display: flex;
            gap: 10px;
            width: 80%;
            background-color:#F7A600;
             border-radius: 30px;
            padding: 10px 16px;
            cursor:pointer
            }
            .chatdiv{
            display: flex; 
             align-items:center;
                 gap: 10px;
            }
             .chatText p{
             margin:0px;
             font-weight: 600;
             font-size: 15px;
              color:#ffff
             }
            .chat-popup{
             position:fixed; bottom:155px; right:20px;
             max-width:500px;
             width:90%;
             background:#fff; border-radius:16px;
             border:1px solid #ECECEC;
             box-shadow:0 18px 40px rgba(0,0,0,.18);
             z-index:1002; display:none; font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;
            }
                .chat-popup.show{display:block}
                .chat-popup::after{
                content:""; position:absolute; bottom:-18px; right:24px;
                width:36px; height:36px; background:#fff; transform:rotate(45deg);
                box-shadow:14px 15px 20px rgba(0,0,0,.10); border-radius:0 0 8px 0;
                }
                .attio-header{display:flex; align-items:center; justify-content:space-between;
                padding:12px 16px; border-bottom:1px solid #EFEFEF}
                .attio-brand{display:flex; align-items:center; gap:10px}
                .attio-logo{width:28px; height:28px; border-radius:6px; overflow:hidden;
                display:flex; align-items:center; justify-content:center;
                background:#111; color:#fff; font-weight:700; font-size:12px}
                .attio-title{line-height:1}
                .attio-title .t{font-weight:700; font-size:14px}
                .attio-title .s{font-size:12px; color:#7A7A7A}
                .attio-close{border:0; background:transparent; font-size:20px; color:#666; cursor:pointer}
                .attio-body{padding:12px 16px 18px}
                .attio-thread{
                height:55dvh; overflow:auto; padding:10px 0; border:1px solid #EFEFEF;
                border-radius:12px; background:#fff; margin-top:10px;
                }
                .msg{max-width:75%;width: max-content; padding:10px 12px; border-radius:14px; margin:8px 10px;
                font-size:16px; line-height:1.35; word-wrap:break-word; box-shadow:0 1px 1px rgba(0,0,0,.04)}
                .msg.bot{background:#F5F7FA; border:1px solid #E8EEF5; color:#3E4B5A; margin-left:10px}
                .msg.user{background:#6564EB; color:#fff; margin-left:auto; margin-right:10px}
                .composer{display:flex; gap:8px; align-items:center; margin-top:10px;
                border:1px solid #E6E6E6; border-radius:14px; padding:6px;z-index: 1;
                    position: relative;}
                .composer input{flex:1; border:0; outline:0; padding:10px 12px; font-size:14px}
                .composer button{border:0; background:#6564EB; color:#fff; padding:10px 14px;
                border-radius:10px; font-weight:600; cursor:pointer}
                 @media (max-width:650px) {
                .chat-popup {
                    max-width: none !important;
                    width: 100% !important;
                    left: 0 !important;
                    right: 0 !important;
                    border-radius: 0 !important;
                    }
                  }

                .msg.bot.typing{ display:flex; align-items:center; gap:6px }
                .msg.bot.typing .dot{
                  width:6px; height:6px; border-radius:50%;
                  background:#3E4B5A; opacity:.5; display:inline-block;
                  animation: typingBlink 1s infinite;
                }
                .msg.bot.typing .dot:nth-child(2){ animation-delay:.15s }
                .msg.bot.typing .dot:nth-child(3){ animation-delay:.3s }
                @keyframes typingBlink{
                  0%{ transform: translateY(0); opacity:.3 }
                  50%{ transform: translateY(-3px); opacity:1 }
                  100%{ transform: translateY(0); opacity:.3 }
                }
                .attio-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 16px;
                border-bottom: 1px solid #EFEFEF;
              }
              .attio-end{
                background:#e53935; color:#fff; border:0;
                border-radius:6px; font-size:12px; padding:6px 10px;
                cursor:pointer; font-weight:600; transition:background .2s
              }
              .attio-end:hover{ background:#c62828 }
              .attio-close {
                border: 0;
                background: transparent;
                font-size: 20px;
                color: #666;
                cursor: pointer;
              }
                .msg .time {
              display:block;
              font-size:12px;
              color:#8a8a8a;
              margin-top:4px;
            }
            .msg.user .time{ color:#ffffffcc; text-align:right; }
            .msg.bot  .time { text-align:left;  opacity:.8; }
          `;
  document.head.appendChild(style);
}
const currentSiteURL = window.location.origin;
// const API_URL = "https://rex-bk.truet.net/api/";
const API_URL = "http://localhost:2512/api";

// --- CHAT PERSISTENCE ----
const CHAT_LS_KEY = "rex_chat_history";
let typingEl = null;
function loadChatHistory() {
  try {
    const raw = localStorage.getItem(CHAT_LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

let __rex_end_called__ = false;

function isGoodbye(text = "") {
  const t = String(text).toLowerCase();
  // Common English + Hinglish/Hindi variants
  const patterns = [
    /\bgood\s*bye\b/,
    /\bgoodbye\b/,
    /\bbye\b/,
    /\bbye bye\b/,
    /\bsee you\b/,
    /\btalk to you later\b/,
    /\btake care\b/,
    /\balvida\b/,
    /\bphir milenge\b/,
    /\bchat (?:end|ended|closing)\b/,
  ];
  return patterns.some((re) => re.test(t));
}

async function endChatArchiveNow({ silent = false } = {}) {
  if (__rex_end_called__) return; // ensure single fire
  __rex_end_called__ = true;

  try {
    const chatId = localStorage.getItem("chat_id");
    const knowledgeBaseId = localStorage.getItem("knowledge_base_id");
    if (chatId && knowledgeBaseId) {
      const res = await fetch(`${API_URL}/agent/end-chat-archive`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          knowledge_base_id: knowledgeBaseId,
          chat_id: chatId,
        }),
      });
      console.log("end chat", res);
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`end-chat-archive HTTP ${res.status}: ${txt}`);
      }
    }
  } catch (e) {
    console.error("[Rex] auto end-chat failed:", e);
    if (!silent) {
      // Optional: show a subtle, non-blocking note in the thread
      appendMessage?.(
        "bot",
        "⚠️ Unable to auto-end the chat. You can close the window.",
        Date.now()
      );
    }
  } finally {
    localStorage.removeItem("rex_last_ui");
    localStorage.removeItem(CHAT_LS_KEY);
    localStorage.removeItem("chat_id");
    try {
      clearInactivityTimers?.();
    } catch {}
    try {
      const cp = document.getElementById("rexChatPopup");
      if (cp) cp.classList.remove("show");
      window.location.reload();
    } catch {}
  }
}
let __rex_close_timer__ = null;
function startCloseTimer() {
  clearCloseTimer();
  // 4 minutes
  const WAIT_MS = 4 * 60 * 1000;

  __rex_close_timer__ = setTimeout(() => {
    try {
      const cp = document.getElementById("rexChatPopup");
      const isOpen = cp && cp.classList.contains("show");
      if (!isOpen) {
        endChatArchiveNow({ silent: true });
      }
    } catch (e) {
      console.warn("[Rex] close timer execution failed:", e);
    }
  }, WAIT_MS);
}

function clearCloseTimer() {
  if (__rex_close_timer__) {
    clearTimeout(__rex_close_timer__);
    __rex_close_timer__ = null;
  }
}

function saveChatHistory(arr) {
  try {
    localStorage.setItem(CHAT_LS_KEY, JSON.stringify(arr));
  } catch {}
}
function saveChatMessage(role, text) {
  const arr = loadChatHistory();
  arr.push({ role, text, ts: Date.now() });
  saveChatHistory(arr);
}
// --- API: create-chat-completion ---
async function createChatCompletion(userText) {
  // ensure chat_id hai
  let chatId = localStorage.getItem("chat_id");
  const agentIdHdr =
    localStorage.getItem("chat_agent_id") || getAgentIdFromScript();

  if (!chatId) {
    // safety: session create kar lo if not present
    await createChatSession(localStorage.getItem("chat_agent_id") || undefined);
    chatId = localStorage.getItem("chat_id");
    if (!chatId) throw new Error("chat_id missing; cannot send message");
  }

  const res = await fetch(`${API_URL}/Chatbot/create-chat-completion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // sirf tab bhejo jab backend ko zarurat ho:
      ...(agentIdHdr ? { agent_id: agentIdHdr } : {}),
    },
    body: JSON.stringify({ chat_id: chatId, content: userText }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();

  // response text pick
  const botText = data?.text ?? data?.raw?.messages?.[0]?.content ?? "";
  return { data, botText };
}

const getAgentIdFromScript = () => {
  const currentScript = document.getElementById("rex-widget-script");
  if (!currentScript) {
    console.warn("Script with ID 'rex-widget-script' not found");
    return null;
  }
  const rawSrc = currentScript.getAttribute("src");
  try {
    const url = new URL(rawSrc, window.location.href);
    const agentId = url.searchParams.get("agentId");
    const pureId = agentId?.replace("agentId=", "");
    return pureId;
  } catch (err) {
    console.error("Error parsing script src for agentId:", err);
    return null;
  }
};
async function shouldLoadWidget() {
  try {
    const agentId = getAgentIdFromScript();
    if (!agentId) return false;

    const response = await fetch(
      `${API_URL}/agent/checkAgentWidgetUrlAllowed`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: agentId,
          url: currentSiteURL,
        }),
      }
    );

    if (!response.ok) return false;
    const data = await response.json();
    console.log(data, "data");
    return data?.allowed === true;
  } catch (error) {
    console.error("Widget load check failed:", error);
    return false;
  }
}
primeChatAgentId();
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", async () => {
    const allowLoad = await shouldLoadWidget();
    if (allowLoad) createReviewWidget();
    else console.log("Widget load skipped due to API check.");
  });
} else {
  (async () => {
    const allowLoad = await shouldLoadWidget();
    if (allowLoad) createReviewWidget();
    else console.log("Widget load skipped due to API check.");
  })();
}
async function primeChatAgentId() {
  try {
    const agentId = getAgentIdFromScript();
    if (!agentId) return;

    const url = `${API_URL}/Chatbot/get-chat-agent-id?agent_id=${encodeURIComponent(
      agentId
    )}`;
    const res = await fetch(url, { method: "GET" });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const chatAgentId = data?.chat_agent_id;

    if (chatAgentId) {
      localStorage.setItem("chat_agent_id", String(chatAgentId));
      window.dispatchEvent(
        new CustomEvent("chat-agent-id:ready", { detail: { chatAgentId } })
      );
      if (!localStorage.getItem("chat_id")) {
        await createChatSession(chatAgentId);
      }
      console.log("[Rex] chat_agent_id stored:", chatAgentId);
    } else {
      console.warn("[Rex] chat_agent_id not found in response:", data);
    }
  } catch (err) {
    console.error("[Rex] primeChatAgentId failed:", err);
  }
}
// STEP 2: reate-chat-session
async function createChatSession(agentIdFromStep1) {
  try {
    const agentId = agentIdFromStep1 || localStorage.getItem("chat_agent_id");
    if (!agentId) {
      throw new Error("agent_id not found for createChatSession");
    }

    const res = await fetch(`${API_URL}/Chatbot/create-chat-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ agent_id: agentId }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (data?.chat_id) {
      localStorage.setItem("chat_id", String(data.chat_id));
      resetInactivityTimers();
      console.log("[Rex] chat_id stored:", data.chat_id);
    }

    return data;
  } catch (err) {
    console.error("[Rex] createChatSession failed:", err);
    throw err;
  }
}
function pingBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, ctx.currentTime);
    g.gain.setValueAtTime(0.001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.16);
  } catch {}
}
function createReviewWidget() {
  if (window.__REX_WIDGET_INITIALIZED__) {
    console.log("Rex widget already initialized.");
    return;
  }
  window.__REX_WIDGET_INITIALIZED__ = true;

  const existingAgentBtn = document.getElementById("agentButton");
  const existingPopup = document.getElementById("agentPopup");
  if (existingAgentBtn && existingPopup) {
    console.log("Review widget already exists. Skipping re-render.");
    return;
  }

  // Remove duplicates
  document.querySelectorAll(".floating-agent").forEach((el) => {
    if (el.id !== "agentButton") el.remove();
  });

  let app = document.getElementById("review-widget");
  if (!app) {
    app = document.createElement("div");
    app.id = "review-widget";
    document.body.appendChild(app);
  }
  const createElement = (tag, options = {}) => {
    const el = document.createElement(tag);
    Object.entries(options).forEach(([key, value]) => {
      if (key in el) el[key] = value;
      else el.setAttribute(key, value);
    });
    return el;
  };

  const initWidget = async () => {
    const { RetellWebClient } = await import(
      "https://cdn.jsdelivr.net/npm/retell-client-js-sdk@2.0.7/+esm"
    );
    const retellWebClient = new RetellWebClient();
    const agentId = getAgentIdFromScript();

    let agentName = "REX";
    let agentVoiceId = "";
    let agentVoiceName = "";
    let callId = "";
    let onCall = false;
    let userId = "";
    let businessName = "Rexptin";
    let avatar = "";
    let callContent = `Call ${agentName}`;
    let agentRole = "GENERAL";
    let agentVoipNumber = "NA";
    // REUSE or CREATE agent button
    try {
      const agentRes = await fetch(
        `${API_URL}/agent/fetchAgentDetailsFromRetell/${agentId}`,
        {
          method: "GET",
        }
      );
      const text = await agentRes.text();
      try {
        const json = JSON.parse(text);
        agentName = json.agentName || agentName;
        agentVoiceId = json.agentVoice || "";
        agentRole = json.agentRole;
        userId = json.userId;
        avatar = json.avatar;
        agentVoipNumber = json.voip_numbers;

        const kbId = json.knowledgeBaseId || json.knowledgeBaseId;
        if (kbId) localStorage.setItem("knowledge_base_id", String(kbId));
      } catch (e) {
        console.log("Response is not JSON");
      }
      const voicesRes = await fetch(
        `${API_URL}/agent/fetchAgentVoiceDetailsFromRetell`,
        {
          method: "POST",
        }
      );
      if (voicesRes.ok) {
        const voicesData = await voicesRes.json();
        const voice = voicesData.find((v) => v.voice_id === agentVoiceId);
        console.log(voice, "voice ");
        if (voice) {
          agentVoiceName = voice.avatar_url || "https:i.pravatar.cc/100?img=68";
        }
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }

    try {
      const bussinessDetails = await fetch(
        `${API_URL}/businessDetails/getBusinessDetailsById/${userId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then(async (res) => {
        const text = await res.text();
        const json = JSON.parse(text);
        businessName = json.businessName;
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    let rexAgent = document.getElementById("agentButton");
    if (!rexAgent) {
      rexAgent = createElement("div", {
        id: "agentButton",
        className: "floating-agent animate",
      });
      document.body.appendChild(rexAgent);
    } else {
      rexAgent.innerHTML = "";
    }

    const agentWrapper = createElement("div", { className: "agent-wrapper" });

    const wrapperBlink = createElement("div", { className: "WraperBlink" });

    const pulseRing = createElement("div", { className: "pulse-ring" });
    const pulseDot = createElement("div", { className: "pulse-dot" });

    wrapperBlink.appendChild(pulseRing);
    wrapperBlink.appendChild(pulseDot);

    const rexImg = createElement("img", {
      src: `https://rexptin.vercel.app/${avatar}`,
      alt: "AI Agent",
    });

    agentWrapper.appendChild(wrapperBlink);
    const badge2 = createElement("div", { className: "badge2" });
    const logoImg = createElement("img", {
      src: "https://rexptin.truet.net/images/favicon-final.svg",
      alt: "Badge Icon",
    });

    badge2.appendChild(logoImg);
    agentWrapper.appendChild(rexImg);
    agentWrapper.appendChild(badge2);
    rexAgent.appendChild(agentWrapper);

    // POPUP
    const modal = createElement("div", {
      id: "agentPopup",
      className: "popup",
    });
    modal.style.display = "none";

    const popupHeader = createElement("div", { className: "popup-header" });
    const poweredBy = createElement("a", {
      href: "https://www.rexpt.us/",
      target: "_blank",
      rel: "noopener noreferrer",
      innerHTML: "Powered by rexpt.us",
    });
    const popupBody = createElement("div", { className: "popup-body" });
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "pulse-ring-wrapper";
    const agentImg = document.createElement("img");
    agentImg.className = "agent-img";
    agentImg.src = `https://rexptin.vercel.app/${avatar}`;
    agentImg.alt = "Agent";
    const callBtn = createElement("div", {
      id: "start-call",
      className: "greendiv",
    });

    // info wrapper
    const infoWrapper = document.createElement("div");
    infoWrapper.className = "agent-info";

    const callLabel = document.createElement("p");
    callLabel.className = "call-label";
    callLabel.textContent = `Call ${agentName}`;
    const phoneNumber = document.createElement("h2");
    phoneNumber.className = "phone-number";
    phoneNumber.textContent = JSON.parse(agentVoipNumber) || "NA";
    const tag = document.createElement("span");
    tag.className = "tag-label";
    tag.textContent = `${agentRole?.split(" ")[0]} RECEPTIONIST`;
    const phoneIconWrapper = createElement("div", { className: "phoneIcon" });
    const phoneIcon = createElement("img", {
      id: "phoneIcon",
      src: "https://rexptin.vercel.app/svg/Phone-call.svg",
    });
    phoneIconWrapper.appendChild(phoneIcon);

    const callText = createElement("div", {
      id: "callText",
      className: "callText",
    });

    callText.innerHTML = `<p>Call <span class="agentTag">${
      agentName.length > 10 ? `${agentName.substring(0, 7)}..` : agentName
    }</span></p><small>${
      businessName?.length > 10
        ? `${businessName.substring(0, 8)}..`
        : businessName
    } Agent is LIVE</small>`;

    callBtn.appendChild(phoneIconWrapper);
    callBtn.appendChild(callText);

    /* --- Chat Lilu button --- */
    const chatBtn = createElement("div", {
      id: "start-chat",
      className: "chatdiv",
    });
    const chatIconWrapper = createElement("div", { className: "chatIcon" });
    const chatIcon = createElement("img", {
      id: "chatIcon",
      src: "./chatWithRex.svg",
      alt: "Chat",
    });
    chatIconWrapper.appendChild(chatIcon);

    const chatText = createElement("div", {
      id: "chatText",
      className: "chatText",
    });
    chatText.innerHTML = `<p>Chat With ${agentName.substring(0, 7)}</p>`;

    chatBtn.appendChild(chatIconWrapper);
    chatBtn.appendChild(chatText);

    /* --- Buttons ko stack me daalo --- */
    const buttonStack = createElement("div", { className: "button-stack" });
    buttonStack.appendChild(chatBtn);

    // /* (optional) Chat click handler */
    // chatBtn.onclick = () => {
    //   if (window.ChatLily?.open) {
    //     window.ChatLily.open({
    //       agentId: getAgentIdFromScript(),
    //       source: "popup_button",
    //     });
    //   } else {
    //     const url = `${currentSiteURL}/chat?agentId=${encodeURIComponent(
    //       getAgentIdFromScript() || ""
    //     )}`;
    //     window.open(url, "_blank");
    //   }
    // };

    chatBtn.onclick = () => {
      // 1) close the current agent popup
      modal.style.display = "none";
      rexAgent.classList.remove("noFloat");
      localStorage.setItem("rex_last_ui", "chat");
      // 2) open the new chat popup
      const cp = getOrCreateChatPopup();
      cp.classList.add("show");
      clearCloseTimer();
      // 3) (optional) mount your chat widget inside the popup
      // If you use ChatLily and it supports mount:
      if (window.ChatLily?.mount) {
        window.ChatLily.mount("#rexChatPopupMount", {
          agentId: getAgentIdFromScript(),
          source: "popup_button",
        });
      }
      // Else, if ChatLily only has .open(), comment the mount above and use:
      // if (window.ChatLily?.open) {
      //   window.ChatLily.open({ agentId: getAgentIdFromScript(), source: "popup_button" });
      // }
      // Or fallback to external page:
      // else {
      //   const url = `${currentSiteURL}/chat?agentId=${encodeURIComponent(getAgentIdFromScript() || "")}`;
      //   window.open(url, "_blank");
      // }
    };

    const closeButton = createElement("button", {
      className: "close-button",
      innerHTML: "×",
    });
    const agentIntro = document.createElement("p");
    agentIntro.className = "agent-intro";
    agentIntro.innerHTML = `By Clicking Call ${agentName} You agree to <b class="terms-text">Terms of Use</b>`;
    popupBody.appendChild(agentImg);
    popupBody.appendChild(callBtn);
    popupBody.appendChild(buttonStack);
    popupBody.appendChild(closeButton);
    popupHeader.appendChild(poweredBy);
    modal.appendChild(popupHeader);
    modal.appendChild(popupBody);
    document.body.appendChild(modal);
    infoWrapper.appendChild(callLabel);
    infoWrapper.appendChild(phoneNumber);
    infoWrapper.appendChild(tag);
    imageWrapper.appendChild(agentImg);
    popupBody.appendChild(imageWrapper);
    popupBody.appendChild(imageWrapper);
    popupBody.appendChild(infoWrapper);

    popupBody.appendChild(callBtn);
    popupBody.appendChild(buttonStack);
    popupBody.appendChild(agentIntro);
    popupBody.appendChild(closeButton);
    popupHeader.appendChild(poweredBy);
    modal.appendChild(popupHeader);
    modal.appendChild(popupBody);
    document.body.appendChild(modal);
    rexAgent.addEventListener("click", () => {
      const preferChat = localStorage.getItem("rex_last_ui") === "chat";
      const hasHistory = (loadChatHistory() || []).length > 0;

      if (preferChat || hasHistory) {
        const cp = getOrCreateChatPopup();
        cp.classList.add("show");

        rexAgent.classList.add("noFloat");
        clearCloseTimer();
      } else {
        modal.style.display = "block";
        rexAgent.classList.add("noFloat");
      }
    });
    closeButton.addEventListener("click", async () => {
      modal.style.display = "none";
      rexAgent.classList.remove("noFloat");
      if (onCall) {
        try {
          await retellWebClient.stopCall();
        } catch (err) {
          console.error("Call stop failed:", err);
        }
        callBtn.classList.remove("reddiv");
        callBtn.classList.add("greendiv");
        phoneIcon.src = "https://rexptin.vercel.app/svg/Phone-call.svg";
        callText.innerHTML = `<p>Call <span class="agentTag">${
          agentName.length > 8 ? `${agentName.substring(0, 8)}..` : agentName
        }</span></p><small>${
          businessName.length > 10
            ? `${businessName.substring(0, 8)}..`
            : businessName
        } Agent is LIVE</small>`;
        onCall = false;
      }
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        rexAgent.classList.remove("noFloat");
      }
    });
    // Create Terms Popup
    const termsWrapper = document.createElement("div");
    termsWrapper.className = "terms-wrapper";
    termsWrapper.style.position = "absolute";
    termsWrapper.style.top = "8.7rem";
    termsWrapper.style.zIndex = "11";
    popupBody.appendChild(termsWrapper);

    // Create Terms Popup (inside wrapper)
    const termsPopup = document.createElement("div");
    termsPopup.id = "termsPopup";
    termsPopup.className = "terms-popup";
    termsPopup.style.display = "none";
    termsPopup.innerHTML = `
  <div class="terms-content" style="position: relative; padding: 5px;">
    <span class="close-terms" 
          style="position: absolute; top: 0; right: 0px; font-size: 20px; font-weight: bold; cursor: pointer;">
      &times;
    </span>
    <h2>Terms of Use
    </h2>
    <p> By clicking the Call button to talk to Rexpt AI agent on ${
      businessName?.length > 15
        ? `${businessName.substring(0, 20)}..`
        : businessName
    } named ${agentName}, You Agree to Terms of Use for Rexpt AI Agents published on <a href="https://www.rexpt.in/Terms-Condition" target="_blank" style="color: #007bff; text-decoration: underline;">TERMS & CONDITIONS</a>. Each time You interact with this Al agent, You consent to the recording, storage, and sharing of my communications with ${
      businessName?.length > 15
        ? `${businessName.substring(0, 20)}..`
        : businessName
    }, Rexpt & Other third-party service providers, and as described in the <a href="https://www.rexpt.in/Privacy-Policy" target="_blank" style="color: #007bff; text-decoration: underline;">
    Privacy Policy</a>. If you do not wish to have your conversations recorded, please refrain from using this service & DO NOT MAKE THE CALL.
    </p>
  </div>
`;

    termsWrapper.appendChild(termsPopup);
    // Add Event Listener on "Terms of Use"
    agentIntro.querySelector(".terms-text").addEventListener("click", () => {
      termsPopup.style.display = "block";
    });
    // Close button
    termsPopup.querySelector(".close-terms").addEventListener("click", () => {
      termsPopup.style.display = "none";
    });

    callBtn.onclick = async () => {
      if (navigator?.mediaDevices) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });
          // Store the stream globally or in state if needed
          micStream = stream;
        } catch (err) {
          console.error("Microphone access denied or error:", err);
          alert("Please allow microphone access to proceed with the call.");
          // setPopupMessage("Microphone access is required to test agent.");
          // setPopupType("failed");
          return;
        }
        if (!onCall) {
          callBtn.disabled = true;
          callContent = "Calling...";
          callLabel.textContent = callContent;
          callText.innerHTML = `<p>Connecting...</p>`;
          try {
            const res = await fetch(`${API_URL}/agent/createWidegetWebCall`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ agent_id: agentId, url: currentSiteURL }),
            });

            if (res.ok) {
              const data = await res.json();

              // Validate response structure
              if (data?.access_token && data?.call_id) {
                const access_token = data.access_token;
                callId = data.call_id;

                await retellWebClient.startCall({ accessToken: access_token });
                callContent = "Connected";
                callLabel.textContent = callContent;
                callBtn.classList.remove("greendiv");
                callBtn.classList.add("reddiv");
                phoneIcon.src = "https://rexptin.vercel.app/svg/Hangup.svg";
                callText.innerHTML = `<p>Hang up Now</p><small>In Call with ${
                  agentName.length > 10
                    ? `${agentName.substring(0, 8)}..`
                    : agentName
                }</small>`;
                onCall = true;
                // Add pulse rings when call starts
                imageWrapper.classList.add("active");
                // Remove existing rings to avoid duplicates
                imageWrapper
                  .querySelectorAll(".pulse-ring2")
                  .forEach((ring) => ring.remove());
                // Add three new pulse rings
                for (let i = 0; i < 3; i++) {
                  const ring = document.createElement("span");
                  ring.className = "pulse-ring2";
                  imageWrapper.insertBefore(ring, agentImg); // Add before agent image
                }
              } else {
                console.error("Invalid response data:", data);
                throw new Error("Invalid response data");
              }
            } else {
              throw new Error("Failed to fetch access token");
            }
          } catch (err) {
            console.error("Call failed:", err.message);
            callText.innerHTML = `<p style="color: red;">Unauthorized Access</p>`;
          } finally {
            callBtn.disabled = false;
          }
        } else {
          await retellWebClient.stopCall();
          callBtn.classList.remove("reddiv");
          callBtn.classList.add("greendiv");
          phoneIcon.src = "https://rexptin.vercel.app/svg/Phone-call.svg";
          callText.innerHTML = `<p style="color:white">Call <span class="agentTag">${
            agentName.length > 8 ? `${agentName.substring(0, 8)}..` : agentName
          }</span></p>
                <small>${
                  businessName.length > 10
                    ? `${businessName.substring(0, 8)}..`
                    : businessName
                } Agent is LIVE</small>`;
          onCall = false;
          callLabel.textContent = `Call ${agentName}`;
          imageWrapper.classList.remove("active");
          imageWrapper
            .querySelectorAll(".pulse-ring2")
            .forEach((ring) => ring.remove());
          const data = {
            agentId: getAgentIdFromScript(),
            callId: callId,
          };
          // const res = await fetch(`${API_URL}/agent/updateAgentMinutesLeft`, {
          //     method: "PATCH",
          //     headers: { "Content-Type": "application/json" },
          //     body: JSON.stringify({  agentId: getAgentIdFromScript(), callId: callId }),
          //   });
        }
      }

      // --- NEW CHAT POPUP (closed by default)
      const chatModal = createElement("div", {
        id: "rexChatPopup",
        className: "chat-popup",
      });

      const chatHeader = createElement("div", {
        className: "chat-popup-header",
      });
      const chatTitleBox = createElement("div");
      chatTitleBox.innerHTML = `
  <div class="chat-popup-title">${businessName || "Support"}</div>
  <div class="chat-popup-sub">The team can also help</div>
`;
      const chatCloseBtn = createElement("button", {
        className: "chat-popup-close",
        innerHTML: "&times;",
      });
      chatHeader.appendChild(chatTitleBox);
      chatHeader.appendChild(chatCloseBtn);

      const chatBody = createElement("div", { className: "chat-popup-body" });
      chatBody.innerHTML = `
  <div class="chat-msg">
    Hi there, welcome! Our team is offline right now, but you can:
    <ul style="margin:8px 0 0 18px;">
      <li>Search our Help Center, available 24/7</li>
      <li>Leave a note and we'll get back to you</li>
    </ul>
  </div>

  <div id="rexChatPopupMount"></div>

  <div class="chat-actions">
    <input id="rexChatEmail" type="email" placeholder="email@example.com" />
    <button id="rexChatSend">Send</button>
  </div>
`;
      chatModal.appendChild(chatHeader);
      chatModal.appendChild(chatBody);
      document.body.appendChild(chatModal);

      // handlers
      chatCloseBtn.onclick = () => chatModal.classList.remove("show");
      document.getElementById("rexChatSend").onclick = () => {
        const v = (document.getElementById("rexChatEmail").value || "").trim();
        if (!v) {
          alert("Please enter an email");
          return;
        }
        // yahan aap apna POST call kar sakte ho
        alert("Message sent. We'll reach out soon.");
        chatModal.classList.remove("show");
      };
    };

    let chatModalEl = null;

    function getOrCreateChatPopup() {
      if (chatModalEl) return chatModalEl;

      const logoUrl = "https://rexptin.truet.net/images/favicon-final.svg"; // change if needed

      chatModalEl = document.createElement("div");
      chatModalEl.id = "rexChatPopup";
      chatModalEl.className = "chat-popup";
      chatModalEl.innerHTML = `
        <div class="attio-header">
          <div class="attio-brand" style="display:flex;align-items:center;gap:10px">
            <div class="attio-logo" style="width:28px;height:28px;border-radius:6px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#111">
              <img src="${logoUrl}" alt="" style="width:100%;height:100%"/>
            </div>
            <div class="attio-title" style="line-height:1">
              <div class="t" style="font-weight:700;font-size:20px;color:#24252c;">Chat with ${agentName.substring(
                0,
                7
              )}</div>
              <div class="s" style="font-size:12px;color:#7A7A7A">The team can also help</div>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:6px">
            <button class="attio-end">End chat</button>
            <button class="attio-close" aria-label="Close">&times;</button>
          </div>
        </div>

        <div class="attio-body">
          <div id="rexMessages" class="attio-thread"></div>
          <div class="composer">
            <input id="rexInput" type="text" placeholder="Type a message…" />
            <button id="rexSend"  type="button">Send</button>
          </div>
        </div>
`;

      document.body.appendChild(chatModalEl);

      // Safe bindings AFTER element exists
      const $endBtn = chatModalEl.querySelector(".attio-end");
      const $closeBtn = chatModalEl.querySelector(".attio-close");

      if ($closeBtn) {
        $closeBtn.onclick = () => {
          chatModalEl.classList.remove("show");
          try {
            clearInactivityTimers();
            startCloseTimer();
          } catch {}
        };
      }

      if ($endBtn) {
        $endBtn.onclick = async () => {
          const ok = window.confirm("Are you sure you want to end this chat?");
          if (!ok) return;
          try {
            clearInactivityTimers();
            const chatId = localStorage.getItem("chat_id");
            const knowledgeBaseId = localStorage.getItem("knowledge_base_id");

            if (chatId && knowledgeBaseId) {
              const res = await fetch(`${API_URL}/agent/end-chat-archive`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  knowledge_base_id: knowledgeBaseId,
                  chat_id: chatId,
                }),
              });

              if (!res.ok) {
                const txt = await res.text().catch(() => "");
                throw new Error(`end-chat-archive HTTP ${res.status}: ${txt}`);
              }
            }
            localStorage.removeItem("rex_last_ui");
            // clear local state and close popup (no input disabling)
            localStorage.removeItem(CHAT_LS_KEY);
            localStorage.removeItem("chat_id");
            // wipe thread so reopening shows fresh state without page refresh
            const $msgs = chatModalEl.querySelector("#rexMessages");
            if ($msgs) $msgs.innerHTML = "";
            chatModalEl.classList.remove("show");
            window.location.reload();
          } catch (e) {
            console.error("end-chat failed:", e);
          }
        };
      }

      // close handler
      chatModalEl.querySelector(".attio-close").onclick = () => {
        chatModalEl.classList.remove("show");
        try {
          clearInactivityTimers();
          startCloseTimer();
        } catch {}
      };

      // helpers
      const $msgs = chatModalEl.querySelector("#rexMessages");
      const $input = chatModalEl.querySelector("#rexInput");
      const $send = chatModalEl.querySelector("#rexSend");

      const ESC = (s) =>
        s.replace(
          /[&<>"']/g,
          (m) =>
            ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            }[m])
        );
      function appendMessage(role, text, ts) {
        const when = ts || Date.now();
        const timeStr = new Date(when).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const div = document.createElement("div");
        div.className = `msg ${role}`;
        // content + time line
        div.innerHTML = `${ESC(text)}<span class="time">${timeStr}</span>`;
        $msgs.appendChild(div);
        $msgs.scrollTop = $msgs.scrollHeight;
      }

      function showTyping() {
        if (typingEl) return; // already visible
        typingEl = document.createElement("div");
        typingEl.className = "msg bot typing";
        typingEl.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
        $msgs.appendChild(typingEl);
        $msgs.scrollTop = $msgs.scrollHeight;
      }

      function hideTyping() {
        if (!typingEl) return;
        typingEl.remove();
        typingEl = null;
      }
      // === INACTIVITY (scoped to chat popup) ===
      const FIRST_WAIT = 2 * 60 * 1000;
      const SECOND_WAIT = 3 * 60 * 1000;
      const THIRD_WAIT = 4 * 60 * 1000;

      let t1 = null,
        t2 = null,
        t3 = null;
      let inactivityLocked = false;

      function clearInactivityTimers() {
        if (t1) {
          clearTimeout(t1);
          t1 = null;
        }
        if (t2) {
          clearTimeout(t2);
          t2 = null;
        }
        if (t3) {
          clearTimeout(t3);
          t3 = null;
        }
      }

      function scheduleInactivityTimers() {
        clearInactivityTimers();

        t1 = setTimeout(() => {
          appendMessage(
            "bot",
            "👋 Are you still there? I’m here if you need anything."
          );
          saveChatMessage(
            "bot",
            "👋 Are you still there? I’m here if you need anything."
          );
          pingBeep();
        }, FIRST_WAIT);

        t2 = setTimeout(() => {
          appendMessage(
            "bot",
            "👋 Are you still there? I’m here if you need anything."
          );
          saveChatMessage(
            "bot",
            "👋 Are you still there? I’m here if you need anything."
          );
          pingBeep();
        }, FIRST_WAIT + SECOND_WAIT);

        t3 = setTimeout(async () => {
          if (inactivityLocked) return;
          inactivityLocked = true;
          try {
            const chatId = localStorage.getItem("chat_id");
            const knowledgeBaseId = localStorage.getItem("knowledge_base_id");

            if (chatId && knowledgeBaseId) {
              const res = await fetch(`${API_URL}/agent/end-chat-archive`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  knowledge_base_id: knowledgeBaseId,
                  chat_id: chatId,
                }),
              });

              if (!res.ok) {
                const txt = await res.text().catch(() => "");
                throw new Error(`end-chat-archive HTTP ${res.status}: ${txt}`);
              }
            }
          } catch (e) {
            console.error("end-chat API failed:", e);
          } finally {
            localStorage.removeItem(CHAT_LS_KEY);
            localStorage.removeItem("chat_id");

            if (chatModalEl) {
              chatModalEl.classList.remove("show");
            }
            clearInactivityTimers();
            window.location.reload();
          }
        }, FIRST_WAIT + SECOND_WAIT + THIRD_WAIT);
      }

      function resetInactivityTimers() {
        inactivityLocked = false;
        scheduleInactivityTimers();
      }

      // --- render saved history BEFORE greeting ---
      const hist = loadChatHistory();
      if (hist.length) {
        hist.forEach((m) => appendMessage(m.role, m.text));
      }

      // initial greeting from bot (optional)
      if ($msgs.children.length === 0) {
        const greet = `Hello! My name is ${
          agentName || "I"
        } from ${businessName} How can I assist you today?`;

        appendMessage("bot", greet);

        // const greet = `Hi! ${
        //   agentName || "I"
        // } am here to help. Send your question below.`;
        // appendMessage("bot", greet);
      }
      async function sendMessage() {
        const t = ($input.value || "").trim();
        if (!t) return;
        resetInactivityTimers();
        clearCloseTimer();
        const tsNow = Date.now();
        appendMessage("user", t, tsNow);
        saveChatMessage("user", t);
        $input.value = "";
        $input.disabled = true;
        $send.disabled = true;

        // ---- SHOW TYPING while waiting ----
        showTyping();

        try {
          // API hit
          const { botText } = await createChatCompletion(t);
          const reply = botText || "…";

          // ---- HIDE TYPING before posting reply ----
          hideTyping();

          // appendMessage("bot", reply);
          appendMessage("bot", reply, Date.now());
          saveChatMessage("bot", reply);
          try {
            if (isGoodbye(reply)) {
              setTimeout(async () => {
                await endChatArchiveNow({ silent: true });
              }, 2000);
              return;
            }
          } catch (e) {
            console.warn("[Rex] goodbye check failed:", e);
          }
          resetInactivityTimers();
        } catch (e) {
          console.error(e);

          // ---- HIDE TYPING on error ----
          hideTyping();

          const errMsg = "Sorry, couldn't send your message. Please try again.";
          appendMessage("bot", errMsg, Date.now());
          saveChatMessage("bot", errMsg);
        } finally {
          $input.disabled = false;
          $send.disabled = false;
          $input.focus();
        }
      }

      $send.onclick = sendMessage;
      $input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      });
      function renderHistory() {
        const hist = loadChatHistory();
        hist.forEach((m) => appendMessage(m.role, m.text, m.ts || Date.now()));
      }
      renderHistory();
      scheduleInactivityTimers();

      return chatModalEl;
    }
  };

  injectCSS();
  (async () => {
    await initWidget();
  })();
}
